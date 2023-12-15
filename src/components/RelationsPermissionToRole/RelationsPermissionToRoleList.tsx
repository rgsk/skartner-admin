import {
  BooleanField,
  Datagrid,
  DateField,
  EditButton,
  List,
  ShowButton,
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
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default RelationsPermissionToRoleList;
