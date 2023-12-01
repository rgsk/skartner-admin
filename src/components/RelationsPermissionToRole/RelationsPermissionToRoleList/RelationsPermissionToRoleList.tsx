import { RelationsPermissionToRoleDocument } from "gql/graphql";
import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  TextField,
} from "react-admin";
const RelationsPermissionToRoleList = () => {
  return (
    <List
      queryOptions={{
        meta: {
          query: RelationsPermissionToRoleDocument,
        },
      }}
    >
      <Datagrid>
        <TextField source="permission.name" sortable={false} />
        <TextField source="role.name" sortable={false} />
        <TextField source="granter.email" sortable={false} />
        <BooleanField source="isAllowed" sortable={false} />
        <DateField source="grantedAt" />
      </Datagrid>
    </List>
  );
};

export default RelationsPermissionToRoleList;
