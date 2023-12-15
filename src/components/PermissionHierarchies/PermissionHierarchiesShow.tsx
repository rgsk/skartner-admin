import { DateField, Show, SimpleShowLayout, TextField } from 'react-admin';

const PermissionHierarchiesShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source={'id'} />
        <TextField source={'parentPermission.name'} />
        <TextField source={'childPermission.name'} />
        <DateField source="createdAt" showTime />
      </SimpleShowLayout>
    </Show>
  );
};

export default PermissionHierarchiesShow;
