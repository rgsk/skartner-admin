import {
  DeleteRelationPermissionToUserDocument,
  RelationPermissionToUserDocument,
} from 'gql/graphql';
import {
  BooleanField,
  DateField,
  DeleteButton,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin';

interface IRelationsPermissionToUserShowProps {}
const RelationsPermissionToUserShow: React.FC<
  IRelationsPermissionToUserShowProps
> = ({}) => {
  return (
    <Show queryOptions={{ meta: { query: RelationPermissionToUserDocument } }}>
      <SimpleShowLayout>
        <TextField source={'permission.name'} />
        <TextField source={'user.email'} />
        <TextField source={'granter.email'} />
        <BooleanField source={'isAllowed'} />
        <DateField source="grantedAt" showTime />
        <DeleteButton
          mutationOptions={{
            meta: { mutation: DeleteRelationPermissionToUserDocument },
          }}
        />
      </SimpleShowLayout>
    </Show>
  );
};
export default RelationsPermissionToUserShow;
