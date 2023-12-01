import { PermissionsDocument } from "gql/graphql";
import { Datagrid, DateField, List, TextField } from "react-admin";
const PermissionsList = () => {
  return (
    <List
      queryOptions={{
        meta: {
          query: PermissionsDocument,
        },
      }}
    >
      <Datagrid>
        <TextField source="id" sortable={false} />
        <TextField source="name" sortable={false} />
        <DateField source="createdAt" />
      </Datagrid>
    </List>
  );
};

export default PermissionsList;
