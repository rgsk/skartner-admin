import { Box } from '@mui/material';

import { Show, TabbedShowLayout, TextField } from 'react-admin';
import PermissionHierarchy from './Children/PermissionHierarchy';
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
            <PermissionHierarchy />
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
