import ShowEditDeleteButtons from 'components/Custom/ShowEditDeleteButtons';
import { Datagrid, List, TextField } from 'react-admin';
const RelationsRoleToUserList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="role.name" sortable={false} />
        <TextField source="user.email" sortable={false} />
        <TextField source="assigner.email" sortable={false} />
        <TextField source="assignedAt" />
        <ShowEditDeleteButtons />
      </Datagrid>
    </List>
  );
};

export default RelationsRoleToUserList;
