import { CreatePermissionDocument } from 'gql/graphql';
import { Create, SimpleForm, TextInput } from 'react-admin';

const PermissionsCreate = () => (
  <Create
    mutationOptions={{
      meta: {
        mutation: CreatePermissionDocument,
      },
    }}
  >
    <SimpleForm>
      <TextInput source="name" required={true} fullWidth />
    </SimpleForm>
  </Create>
);

export default PermissionsCreate;
