import ShowEditDeleteButtons from 'components/Custom/ShowEditDeleteButtons';
import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  TextField,
} from 'react-admin';

interface IRelationsPermissionToRoleListProps {}
const RelationsPermissionToRoleList: React.FC<
  IRelationsPermissionToRoleListProps
> = ({}) => {
  return (
    <List>
      <Datagrid>
        <TextField source="permission.name" sortable={false} />
        <TextField source="role.name" sortable={false} />
        <TextField source="granter.email" sortable={false} />
        <BooleanField source="isAllowed" sortable={false} />
        <DateField source="grantedAt" />
        <ShowEditDeleteButtons />
      </Datagrid>
    </List>
  );
};

export default RelationsPermissionToRoleList;
