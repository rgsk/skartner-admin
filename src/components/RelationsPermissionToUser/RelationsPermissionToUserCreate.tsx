import { Create } from 'react-admin';
import { RelationsPermissionToUserForm } from './RelationsPermissionToUserEdit';

const RelationsPermissionToUserCreate = () => {
  return (
    <Create>
      <RelationsPermissionToUserForm />
    </Create>
  );
};
export default RelationsPermissionToUserCreate;
