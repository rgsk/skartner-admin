import { Edit, SimpleForm, TextInput } from 'react-admin';

const RolesEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" />
      </SimpleForm>
    </Edit>
  );
};

export default RolesEdit;
