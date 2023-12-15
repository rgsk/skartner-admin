import {
  BooleanField,
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  TextField,
} from 'react-admin';
interface IRelationsPermissionToUserListProps {}
const RelationsPermissionToUserList: React.FC<
  IRelationsPermissionToUserListProps
> = ({}) => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" sortable={false} />
        <TextField source="permission.name" sortable={false} />
        <TextField source="user.email" sortable={false} />
        <TextField source="granter.email" sortable={false} />
        <BooleanField source="isAllowed" sortable={false} />
        <DateField source="grantedAt" />
        <ShowButton />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default RelationsPermissionToUserList;
