import { CreateRelationPermissionToUserDocument } from 'gql/graphql';
import { Create } from 'react-admin';
import { RelationsPermissionToUserForm } from '../RelationsPermissionToUserEdit/RelationsPermissionToUserEdit';

const RelationsPermissionToUserCreate = () => {
  return (
    <Create
      mutationOptions={{
        meta: {
          mutation: CreateRelationPermissionToUserDocument,
        },
      }}
    >
      <RelationsPermissionToUserForm />
    </Create>
  );
};
export default RelationsPermissionToUserCreate;
