import {
  DeleteRelationPermissionToUserDocument,
  DeleteRelationsPermissionToUserDocument,
  RelationsPermissionToUserDocument,
} from 'gql/graphql';
import {
  BooleanField,
  BulkDeleteButton,
  Datagrid,
  DateField,
  DeleteButton,
  List,
  TextField,
} from 'react-admin';
const RelationsPermissionToUserList = () => {
  return (
    <List
      queryOptions={{
        meta: {
          query: RelationsPermissionToUserDocument,
        },
      }}
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
        <TextField source="id" sortable={false} />
        <TextField source="permission.name" sortable={false} />
        <TextField source="user.email" sortable={false} />
        <TextField source="granter.email" sortable={false} />
        <BooleanField source="isAllowed" sortable={false} />
        <DateField source="grantedAt" />
        <DeleteButton
          mutationOptions={{
            meta: { mutation: DeleteRelationPermissionToUserDocument },
          }}
        />
      </Datagrid>
    </List>
  );
};

export default RelationsPermissionToUserList;
