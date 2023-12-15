import { Box } from '@mui/material';

import { DeletePermissionDocument, PermissionDocument } from 'gql/graphql';
import { DeleteButton, Show, TabbedShowLayout, TextField } from 'react-admin';
import PermissionToRole from './Children/PermissionToRole';
import PermissionToUser from './Children/PermissionToUser';

interface IPermissionsShowProps {}
const PermissionsShow: React.FC<IPermissionsShowProps> = ({}) => {
  return (
    <Box>
      <Show queryOptions={{ meta: { query: PermissionDocument } }}>
        <TabbedShowLayout>
          <TabbedShowLayout.Tab label="summary">
            <TextField source={'id'} />
            <TextField source={'name'} />
            <DeleteButton
              mutationOptions={{ meta: { mutation: DeletePermissionDocument } }}
            />
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
