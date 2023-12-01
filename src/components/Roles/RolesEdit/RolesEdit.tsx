import { RoleDocument, UpdateRoleDocument } from "gql/graphql";
import { Edit, SimpleForm, TextInput } from "react-admin";

const RolesEdit = () => {
  return (
    <Edit
      queryOptions={{ meta: { query: RoleDocument } }}
      mutationOptions={{ meta: { mutation: UpdateRoleDocument } }}
    >
      <SimpleForm>
        <TextInput source="name" />
      </SimpleForm>
    </Edit>
  );
};

export default RolesEdit;
