import {
  BooleanField,
  DateField,
  DeleteButton,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin';

interface IRelationsPermissionToRoleShowProps {}
const RelationsPermissionToRoleShow: React.FC<
  IRelationsPermissionToRoleShowProps
> = ({}) => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source={'permission.name'} />
        <TextField source={'role.name'} />
        <TextField source={'granter.email'} />
        <BooleanField source={'isAllowed'} />

        <DateField source={'grantedAt'} showTime />
        <DeleteButton />
      </SimpleShowLayout>
    </Show>
  );
};

export default RelationsPermissionToRoleShow;
