import { Box } from "@mui/material";
import ServerLinks from "components/ServerLinks";
import { UsersDocument } from "gql/graphql";
import {
  BooleanField,
  Datagrid,
  DateField,
  EmailField,
  List,
  TextField,
} from "react-admin";
const UsersList = () => {
  return (
    <Box>
      <Box sx={{ marginTop: 5 }}>
        <ServerLinks />
      </Box>
      <List
        queryOptions={{
          meta: {
            query: UsersDocument,
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

export default UsersList;
