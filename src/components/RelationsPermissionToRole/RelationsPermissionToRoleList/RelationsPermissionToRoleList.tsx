import {
  DeleteRelationPermissionToRoleDocument,
  DeleteRelationsPermissionToRoleDocument,
  RelationsPermissionToRoleDocument,
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
const RelationsPermissionToRoleList = () => {
  return (
    <List
      queryOptions={{
        meta: {
          query: RelationsPermissionToRoleDocument,
        },
      }}
    >
      <Datagrid
        bulkActionButtons={
          <BulkDeleteButton
            mutationOptions={{
              meta: { mutation: DeleteRelationsPermissionToRoleDocument },
            }}
          />
        }
      >
        <TextField source="permission.name" sortable={false} />
        <TextField source="role.name" sortable={false} />
        <TextField source="granter.email" sortable={false} />
        <BooleanField source="isAllowed" sortable={false} />
        <DateField source="grantedAt" />
        <DeleteButton
          mutationOptions={{
            meta: { mutation: DeleteRelationPermissionToRoleDocument },
          }}
        />
      </Datagrid>
    </List>
  );
};

export default RelationsPermissionToRoleList;
