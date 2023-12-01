import { RolesDocument } from "gql/graphql";
import { Datagrid, DateField, List, TextField } from "react-admin";
const RoleList = () => {
  return (
    <List
      queryOptions={{
        meta: {
          query: RolesDocument,
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

export default RoleList;