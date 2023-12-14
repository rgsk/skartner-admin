import Resources from 'Resources';
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
  EditButton,
  FilterPayload,
  List,
  ShowButton,
  TextField,
} from 'react-admin';

interface IRelationsPermissionToRoleListProps {
  filter?: FilterPayload;
}
const RelationsPermissionToRoleList: React.FC<
  IRelationsPermissionToRoleListProps
> = ({ filter }) => {
  return (
    <List
      queryOptions={{
        meta: {
          query: RelationsPermissionToRoleDocument,
        },
      }}
      filter={filter}
      resource={Resources.relationsPermissionToRole}
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
        <ShowButton />
        <EditButton />
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
