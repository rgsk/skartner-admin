import { DeleteButton, Show, SimpleShowLayout, TextField } from 'react-admin';

interface IRolesShowProps {}
const RolesShow: React.FC<IRolesShowProps> = ({}) => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source={'id'} />
        <TextField source={'name'} />
        <DeleteButton />
      </SimpleShowLayout>
    </Show>
  );
};

export default RolesShow;
