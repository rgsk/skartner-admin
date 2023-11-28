import { Box } from "@mui/material";
import ServerLinks from "components/ServerLinks";
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
    <Box>
      <Box sx={{ marginTop: 5 }}>
        <ServerLinks />
      </Box>
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
            source="meta.showDefaultGreWordSearchPromptInputs"
            sortable={false}
          />
          <DateField source="createdAt" />
        </Datagrid>
      </List>
    </Box>
  );
};

export default UserList;
