import { Box } from '@mui/material';

import { DeleteButton, Show, TabbedShowLayout, TextField } from 'react-admin';
import PermissionToRole from './Children/PermissionToRole';
import PermissionToUser from './Children/PermissionToUser';

interface IPermissionsShowProps {}
const PermissionsShow: React.FC<IPermissionsShowProps> = ({}) => {
  return (
    <Box>
      <Show>
        <TabbedShowLayout>
          <TabbedShowLayout.Tab label="summary">
            <TextField source={'id'} />
            <TextField source={'name'} />
            <DeleteButton />
          </TabbedShowLayout.Tab>
          <TabbedShowLayout.Tab label="users" path="users">
            <PermissionToUser />
          </TabbedShowLayout.Tab>
          <TabbedShowLayout.Tab label="roles" path="roles">
            <PermissionToRole />
          </TabbedShowLayout.Tab>
        </TabbedShowLayout>
      </Show>
    </Box>
  );
};

export default PermissionsShow;
