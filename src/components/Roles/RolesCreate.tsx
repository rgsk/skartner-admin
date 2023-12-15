import { CreateRoleDocument } from 'gql/graphql';
import { Create, SimpleForm, TextInput } from 'react-admin';

const RolesCreate = () => (
  <Create
    mutationOptions={{
      meta: {
        mutation: CreateRoleDocument,
      },
    }}
  >
    <SimpleForm>
      <TextInput source="name" required={true} fullWidth />
    </SimpleForm>
  </Create>
);

export default RolesCreate;
