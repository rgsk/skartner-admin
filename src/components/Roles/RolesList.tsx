import {
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  TextField,
  TextInput,
} from 'react-admin';
const RolesList = () => {
  return (
    <List
      filters={[
        <TextInput key="name_contains" source="name_contains" alwaysOn />,
      ]}
    >
      <Datagrid>
        <TextField source="id" sortable={false} />
        <TextField source="name" sortable={false} />
        <DateField source="createdAt" />
        <ShowButton />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default RolesList;
