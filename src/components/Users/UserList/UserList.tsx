import { UserListDocument } from "gql/graphql";
import {
  BooleanField,
  Datagrid,
  DateField,
  EmailField,
  List,
  TextField,
} from "react-admin";
const UserList = () => {
  return (
    <List
      queryOptions={{
        meta: {
          query: UserListDocument,
        },
      }}
    >
      <Datagrid>
        <TextField source="id" sortable={false} />
        <EmailField source="email" />
        <BooleanField
          label="Meta show default prompt inputs changed"
          source="meta.showDefaultGreWordSearchPromptInputs"
          sortable={false}
        />
        <DateField source="createdAt" />
      </Datagrid>
    </List>
  );
};

export default UserList;
