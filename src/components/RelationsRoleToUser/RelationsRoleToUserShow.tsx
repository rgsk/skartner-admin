import { DateField, Show, SimpleShowLayout, TextField } from 'react-admin';

const RelationsRoleToUserShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source={'role.name'} />
        <TextField source={'user.email'} />
        <TextField source={'assigner.email'} />
        <DateField source={'assignedAt'} showTime />
      </SimpleShowLayout>
    </Show>
  );
};
export default RelationsRoleToUserShow;
