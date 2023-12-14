import Resources from 'Resources';
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
  EditButton,
  FilterPayload,
  List,
  ShowButton,
  TextField,
} from 'react-admin';
interface IRelationsPermissionToUserListProps {
  filter?: FilterPayload;
}
const RelationsPermissionToUserList: React.FC<
  IRelationsPermissionToUserListProps
> = ({ filter }) => {
  return (
    <List
      resource={Resources.relationsPermissionToUser}
      queryOptions={{
        meta: {
          query: RelationsPermissionToUserDocument,
        },
      }}
      filter={filter}
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
        <ShowButton />
        <EditButton />
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
