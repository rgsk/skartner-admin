import { Datagrid, DateField, List, TextField } from 'react-admin';

const PermissionHierarchiesList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" sortable={false} />
        <TextField source="parentPermission.name" sortable={false} />
        <TextField source="childPermission.name" sortable={false} />
        <DateField source="createdAt" showTime />
      </Datagrid>
    </List>
  );
};
export default PermissionHierarchiesList;
