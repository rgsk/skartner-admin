import { UsersDocument } from "gql/graphql";
import {
  BooleanField,
  Datagrid,
  EmailField,
  List,
  TextField,
} from "react-admin";

const UserList = () => {
  return (
    <List
      queryOptions={{
        meta: {
          query: UsersDocument,
        },
      }}
    >
      <Datagrid>
        <TextField source="id" />
        <EmailField source="email" />
        <BooleanField source="meta.showDefaultGreWordSearchPromptInputs" />
      </Datagrid>
    </List>
  );
};

export default UserList;
