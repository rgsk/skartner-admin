import { CreateRelationPermissionToRoleDocument } from 'gql/graphql';
import { Create } from 'react-admin';
import { RelationsPermissionToRoleForm } from './RelationsPermissionToRoleEdit';

const RelationsPermissionToRoleCreate = () => {
  return (
    <Create
      mutationOptions={{
        meta: {
          mutation: CreateRelationPermissionToRoleDocument,
        },
      }}
    >
      <RelationsPermissionToRoleForm />
    </Create>
  );
};
export default RelationsPermissionToRoleCreate;
