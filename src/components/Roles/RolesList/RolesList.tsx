import {
  DeleteRoleDocument,
  DeleteRolesDocument,
  RolesDocument,
} from 'gql/graphql';
import {
  BulkDeleteButton,
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  TextField,
  TextInput,
} from 'react-admin';
const RolesList = () => {
  return (
    <List
      queryOptions={{
        meta: {
          query: RolesDocument,
        },
      }}
      filters={[<TextInput source="name_contains" alwaysOn />]}
    >
      <Datagrid
        rowClick="show"
        bulkActionButtons={
          <BulkDeleteButton
            mutationOptions={{ meta: { mutation: DeleteRolesDocument } }}
          />
        }
      >
        <TextField source="id" sortable={false} />
        <TextField source="name" sortable={false} />
        <DateField source="createdAt" />
        <EditButton />
        <DeleteButton
          mutationOptions={{ meta: { mutation: DeleteRoleDocument } }}
        />
      </Datagrid>
    </List>
  );
};

export default RolesList;
