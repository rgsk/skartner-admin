import { DeletePermissionDocument, PermissionDocument } from "gql/graphql";
import { DeleteButton, Show, SimpleShowLayout, TextField } from "react-admin";

interface IPermissionsShowProps {}
const PermissionsShow: React.FC<IPermissionsShowProps> = ({}) => {
  return (
    <Show queryOptions={{ meta: { query: PermissionDocument } }}>
      <SimpleShowLayout>
        <TextField source={"id"} />
        <TextField source={"name"} />
        <DeleteButton
          mutationOptions={{ meta: { mutation: DeletePermissionDocument } }}
        />
      </SimpleShowLayout>
    </Show>
  );
};

export default PermissionsShow;
