import { Create, SimpleForm, TextInput } from 'react-admin';

const PermissionsCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" required={true} fullWidth />
    </SimpleForm>
  </Create>
);

export default PermissionsCreate;
