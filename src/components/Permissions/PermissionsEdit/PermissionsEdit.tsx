import { PermissionDocument, UpdatePermissionDocument } from "gql/graphql";
import { Edit, SimpleForm, TextInput } from "react-admin";

const PermissionsEdit = () => {
  return (
    <Edit
      queryOptions={{ meta: { query: PermissionDocument } }}
      mutationOptions={{ meta: { mutation: UpdatePermissionDocument } }}
    >
      <SimpleForm>
        <TextInput source="name" />
      </SimpleForm>
    </Edit>
  );
};

export default PermissionsEdit;
