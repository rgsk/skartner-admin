import { Box } from '@mui/material';

import { DeletePermissionDocument, PermissionDocument } from 'gql/graphql';
import { DeleteButton, Show, SimpleShowLayout, TextField } from 'react-admin';
import PermissionToRole from './Children/PermissionToRole';
import PermissionToUser from './Children/PermissionToUser';

interface IPermissionsShowProps {}
const PermissionsShow: React.FC<IPermissionsShowProps> = ({}) => {
  return (
    <Box>
      <Show queryOptions={{ meta: { query: PermissionDocument } }}>
        <SimpleShowLayout>
          <TextField source={'id'} />
          <TextField source={'name'} />
          <DeleteButton
            mutationOptions={{ meta: { mutation: DeletePermissionDocument } }}
          />
        </SimpleShowLayout>
        <Box sx={{ mt: 2 }}>
          <PermissionToUser />
        </Box>
        <Box sx={{ mt: 2 }}>
          <PermissionToRole />
        </Box>
      </Show>
    </Box>
  );
};

export default PermissionsShow;
