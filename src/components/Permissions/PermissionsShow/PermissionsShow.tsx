import {
  Autocomplete,
  Box,
  CircularProgress,
  TextField as MuiTextField,
  Typography,
} from "@mui/material";
import {
  DeletePermissionDocument,
  PermissionDocument,
  PermissionQuery,
  QueryMode,
  RelationsPermissionToRoleDocument,
  RelationsPermissionToUserDocument,
  useCreateRelationPermissionToUserMutation,
  useRelationsPermissionToUserQuery,
  useUsersQuery,
} from "gql/graphql";
import useUser from "hooks/useUser";
import useRunOnWindowFocus from "hooks/utils/useRunOnWindowFocus";
import useToggle from "hooks/utils/useToggle";
import { useState } from "react";
import {
  BooleanField,
  Datagrid,
  DateField,
  DeleteButton,
  List,
  Show,
  SimpleShowLayout,
  TextField,
  useRecordContext,
  useRefresh,
} from "react-admin";

interface IPermissionsShowProps {}
const PermissionsShow: React.FC<IPermissionsShowProps> = ({}) => {
  return (
    <Box>
      <Show queryOptions={{ meta: { query: PermissionDocument } }}>
        <SimpleShowLayout>
          <TextField source={"id"} />
          <TextField source={"name"} />
          <DeleteButton
            mutationOptions={{ meta: { mutation: DeletePermissionDocument } }}
          />
        </SimpleShowLayout>
        <Box sx={{ mt: 2 }}>
          <PermissionToUser />
        </Box>
        <Box sx={{ mt: 2 }}>
          <PermissionToRole />
        </Box>
      </Show>
    </Box>
  );
};

export default PermissionsShow;

interface IPermissionToUserProps {}
const PermissionToUser: React.FC<IPermissionToUserProps> = ({}) => {
  const permission = useRecordContext() as PermissionQuery["permission"];
  const { user } = useUser();
  const [toggleValue, toggle] = useToggle();
  const refresh = useRefresh();
  const [userEmailSearchInput, setUserEmailSearchInput] = useState("");
  const {
    data: { relationsPermissionToUser } = {},
    refetch: refetchRelationsPermissionToUser,
  } = useRelationsPermissionToUserQuery({
    variables: { where: { permissionId: { equals: permission?.id } } },
    skip: !permission,
  });

  const { data: { users } = {} } = useUsersQuery({
    variables: {
      where: {
        email: {
          contains: userEmailSearchInput,
          mode: QueryMode.Insensitive,
        },
      },
    },
  });

  useRunOnWindowFocus(refetchRelationsPermissionToUser);

  const [
    createRelationPermissionToUserMutation,
    createRelationPermissionToUserMutationResult,
  ] = useCreateRelationPermissionToUserMutation();

  const onSelect = (email: string) => {
    if (permission && user) {
      const selectedUser = users?.find((u) => u.email === email);
      if (selectedUser) {
        createRelationPermissionToUserMutation({
          variables: {
            userId: selectedUser.id,
            permissionId: permission.id,
            granterId: user.id,
            isAllowed: true,
          },
          onCompleted: () => {
            refresh();
            refetchRelationsPermissionToUser();
          },
        });
      }
    }
  };
  const options =
    users
      ?.filter((u) => {
        return !relationsPermissionToUser?.some((r) => r?.userId === u.id);
      })
      ?.map((u) => u.email) ?? [];
  return (
    <Box>
      <Typography>Relations Permission To User</Typography>
      <Autocomplete
        options={options}
        key={`${toggleValue}`}
        renderInput={(params) => (
          <MuiTextField
            {...params}
            label="email"
            // error={!!errors.line2}
            // helperText={errors.line2?.message}
            onChange={(e: any) => {
              setUserEmailSearchInput(e.target.value);
            }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {createRelationPermissionToUserMutationResult.loading && (
                    <Box sx={{ transform: "translate(0px, -3px)" }}>
                      <CircularProgress size={20} />
                    </Box>
                  )}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        onChange={(event, email) => {
          if (email) {
            onSelect(email);
            toggle();
            setUserEmailSearchInput("");
          }
        }}
      />
      <List
        queryOptions={{
          meta: {
            query: RelationsPermissionToUserDocument,
          },
        }}
        resource="relationsPermissionToUser"
        filter={{ permissionId_equals: permission?.id }}
      >
        <Datagrid>
          <TextField source="user.email" sortable={false} />
          <TextField source="granter.email" sortable={false} />
          <BooleanField source="isAllowed" sortable={false} />
          <DateField source="grantedAt" />
        </Datagrid>
      </List>
    </Box>
  );
};

interface IPermissionToRoleProps {}
const PermissionToRole: React.FC<IPermissionToRoleProps> = ({}) => {
  const permission = useRecordContext();
  return (
    <Box>
      <Typography>Relations Permission To Role</Typography>
      <List
        queryOptions={{
          meta: {
            query: RelationsPermissionToRoleDocument,
          },
        }}
        resource="relationsPermissionToRole"
        filter={{ permissionId_equals: permission?.id }}
      >
        <Datagrid>
          <TextField source="role.name" sortable={false} />
          <TextField source="granter.email" sortable={false} />
          <BooleanField source="isAllowed" sortable={false} />
          <DateField source="grantedAt" />
        </Datagrid>
      </List>
    </Box>
  );
};
