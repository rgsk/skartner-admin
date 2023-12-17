import { Box } from '@mui/material';
import ServerLinks from 'components/ServerLinks';
import {
  BooleanField,
  Datagrid,
  DateField,
  EmailField,
  List,
  ShowButton,
  TextField,
} from 'react-admin';
const UsersList = () => {
  return (
    <Box>
      <Box sx={{ marginTop: 5 }}>
        <ServerLinks />
      </Box>
      <List>
        <Datagrid>
          <TextField source="id" sortable={false} />
          <EmailField source="email" />
          <BooleanField
            source="meta.showDefaultGreWordSearchPromptInputs"
            sortable={false}
          />
          <DateField source="createdAt" />
          <ShowButton />
        </Datagrid>
      </List>
    </Box>
  );
};

export default UsersList;
