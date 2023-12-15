import {
  BooleanField,
  DateField,
  DeleteButton,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin';

interface IRelationsPermissionToUserShowProps {}
const RelationsPermissionToUserShow: React.FC<
  IRelationsPermissionToUserShowProps
> = ({}) => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source={'permission.name'} />
        <TextField source={'user.email'} />
        <TextField source={'granter.email'} />
        <BooleanField source={'isAllowed'} />
        <DateField source="grantedAt" showTime />
        <DeleteButton />
      </SimpleShowLayout>
    </Show>
  );
};
export default RelationsPermissionToUserShow;
