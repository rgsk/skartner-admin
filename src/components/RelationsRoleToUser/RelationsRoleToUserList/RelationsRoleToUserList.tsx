import { RelationsRoleToUserDocument } from 'gql/graphql';
import { Datagrid, List, TextField } from 'react-admin';
const RelationsRoleToUserList = () => {
  return (
    <List
      queryOptions={{
        meta: {
          query: RelationsRoleToUserDocument,
        },
      }}
    >
      <Datagrid>
        <TextField source="role.name" sortable={false} />
        <TextField source="user.email" sortable={false} />
        <TextField source="assigner.email" sortable={false} />
        <TextField source="assignedAt" sortable={false} />
      </Datagrid>
    </List>
  );
};

export default RelationsRoleToUserList;
