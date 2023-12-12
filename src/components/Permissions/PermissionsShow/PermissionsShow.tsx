import {
  Autocomplete,
  Box,
  CircularProgress,
  TextField as MuiTextField,
  Typography,
} from '@mui/material';
import Resources from 'Resources';
import { useLocation } from 'react-router-dom';

import {
  DeletePermissionDocument,
  DeleteRelationPermissionToUserDocument,
  DeleteRelationsPermissionToUserDocument,
  PermissionDocument,
  PermissionQuery,
  RelationsPermissionToRoleDocument,
  RelationsPermissionToUserDocument,
  UsersDocument,
  useCreateRelationPermissionToUserMutation,
} from 'gql/graphql';
import useUser from 'hooks/useUser';
import useToggle from 'hooks/utils/useToggle';
import { useMemo, useState } from 'react';
import {
  BooleanField,
  BulkDeleteButton,
  Datagrid,
  DateField,
  DeleteButton,
  List,
  Show,
  SimpleShowLayout,
  TextField,
  useGetList,
  useRecordContext,
  useRefresh,
} from 'react-admin';

interface IPermissionsShowProps {}
const PermissionsShow: React.FC<IPermissionsShowProps> = ({}) => {
  return (
    <Box>
      <Show queryOptions={{ meta: { query: PermissionDocument } }}>
        <SimpleShowLayout>
          <TextField source={'id'} />
          <TextField source={'name'} />
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
  const permission = useRecordContext() as PermissionQuery['permission'];
  const { user } = useUser();
  const [toggleValue, toggle] = useToggle();
  const refresh = useRefresh();

  const [userEmailSearchInput, setUserEmailSearchInput] = useState('');

  const { data: relationsPermissionToUser } = useGetList(
    Resources.relationsPermissionToUser,
    {
      meta: {
        query: RelationsPermissionToUserDocument,
      },
      filter: {
        permissionId_equals: permission?.id,
      },
    },
  );

  const { data: users } = useGetList(Resources.users, {
    meta: { query: UsersDocument },
    filter: {
      email_contains: userEmailSearchInput,
    },
  });

  const location = useLocation();

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
          },
        });
      }
    }
  };
  const options = useMemo(() => {
    return (
      users
        ?.filter((u) => {
          return !relationsPermissionToUser?.some((r) => r?.userId === u.id);
        })
        ?.map((u) => u.email) ?? []
    );
  }, [relationsPermissionToUser, users]);
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
            onChange={(e) => {
              setUserEmailSearchInput(e.target.value);
            }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {createRelationPermissionToUserMutationResult.loading && (
                    <Box sx={{ transform: 'translate(0px, -3px)' }}>
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
            setUserEmailSearchInput('');
          }
        }}
      />
      <List
        queryOptions={{
          meta: {
            query: RelationsPermissionToUserDocument,
          },
        }}
        resource={Resources.relationsPermissionToUser}
        filter={{ permissionId_equals: permission?.id }}
      >
        <Datagrid
          bulkActionButtons={
            <BulkDeleteButton
              mutationOptions={{
                meta: { mutation: DeleteRelationsPermissionToUserDocument },
              }}
            />
          }
        >
          <TextField source="user.email" sortable={false} />
          <TextField source="granter.email" sortable={false} />
          <BooleanField source="isAllowed" sortable={false} />
          <DateField source="grantedAt" />
          <DeleteButton
            mutationOptions={{
              meta: { mutation: DeleteRelationPermissionToUserDocument },
            }}
            redirect={() => {
              return location.pathname.slice(1);
            }}
          />
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
