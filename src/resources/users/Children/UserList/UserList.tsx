import { UsersDocument } from "gql/graphql";
import {
  BooleanField,
  Datagrid,
  EmailField,
  List,
  TextField,
  useGetList,
} from "react-admin";

const UserList = () => {
  const { data } = useGetList("users", { meta: { query: UsersDocument } });
  console.log({ useGetList: data });
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
