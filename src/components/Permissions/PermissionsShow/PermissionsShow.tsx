import { Box, Typography } from "@mui/material";
import {
  DeletePermissionDocument,
  PermissionDocument,
  RelationsPermissionToRoleDocument,
  RelationsPermissionToUserDocument,
} from "gql/graphql";
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
  const permission = useRecordContext();
  return (
    <Box>
      <Typography>Relations Permission To User</Typography>
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
