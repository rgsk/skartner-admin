import {
  DeleteRelationRoleToUserDocument,
  DeleteRelationsRoleToUserDocument,
  RelationsRoleToUserDocument,
} from 'gql/graphql';
import {
  BulkDeleteButton,
  Datagrid,
  DeleteButton,
  List,
  TextField,
} from 'react-admin';
const RelationsRoleToUserList = () => {
  return (
    <List
      queryOptions={{
        meta: {
          query: RelationsRoleToUserDocument,
        },
      }}
    >
      <Datagrid
        bulkActionButtons={
          <BulkDeleteButton
            mutationOptions={{
              meta: { mutation: DeleteRelationsRoleToUserDocument },
            }}
          />
        }
      >
        <TextField source="role.name" sortable={false} />
        <TextField source="user.email" sortable={false} />
        <TextField source="assigner.email" sortable={false} />
        <TextField source="assignedAt" sortable={false} />
        <DeleteButton
          mutationOptions={{
            meta: { mutation: DeleteRelationRoleToUserDocument },
          }}
        />
      </Datagrid>
    </List>
  );
};

export default RelationsRoleToUserList;
