import { DeleteRoleDocument, RoleDocument } from "gql/graphql";
import { DeleteButton, Show, SimpleShowLayout, TextField } from "react-admin";

interface IRolesShowProps {}
const RolesShow: React.FC<IRolesShowProps> = ({}) => {
  return (
    <Show queryOptions={{ meta: { query: RoleDocument } }}>
      <SimpleShowLayout>
        <TextField source={"id"} />
        <TextField source={"name"} />
        <DeleteButton
          mutationOptions={{ meta: { mutation: DeleteRoleDocument } }}
        />
      </SimpleShowLayout>
    </Show>
  );
};

export default RolesShow;
