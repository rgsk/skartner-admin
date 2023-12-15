import { Create, SimpleForm, TextInput } from 'react-admin';

const RolesCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" required={true} fullWidth />
    </SimpleForm>
  </Create>
);

export default RolesCreate;
