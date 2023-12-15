import {
  DeleteRelationPermissionToRoleDocument,
  RelationPermissionToRoleDocument,
} from 'gql/graphql';
import {
  BooleanField,
  DateField,
  DeleteButton,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin';

interface IRelationsPermissionToRoleShowProps {}
const RelationsPermissionToRoleShow: React.FC<
  IRelationsPermissionToRoleShowProps
> = ({}) => {
  return (
    <Show queryOptions={{ meta: { query: RelationPermissionToRoleDocument } }}>
      <SimpleShowLayout>
        <TextField source={'permission.name'} />
        <TextField source={'role.name'} />
        <TextField source={'granter.email'} />
        <BooleanField source={'isAllowed'} />

        <DateField source={'grantedAt'} showTime />
        <DeleteButton
          mutationOptions={{
            meta: { mutation: DeleteRelationPermissionToRoleDocument },
          }}
        />
      </SimpleShowLayout>
    </Show>
  );
};

export default RelationsPermissionToRoleShow;
