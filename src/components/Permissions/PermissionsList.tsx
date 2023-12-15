import {
  DeletePermissionDocument,
  DeletePermissionsDocument,
  PermissionsDocument,
} from 'gql/graphql';
import {
  BulkDeleteButton,
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  TextField,
  TextInput,
} from 'react-admin';

const PermissionsList = () => {
  return (
    <List
      queryOptions={{
        meta: {
          query: PermissionsDocument,
        },
      }}
      filters={[
        <TextInput key="name_contains" source="name_contains" alwaysOn />,
      ]}
    >
      <Datagrid
        bulkActionButtons={
          <BulkDeleteButton
            mutationOptions={{ meta: { mutation: DeletePermissionsDocument } }}
          />
        }
      >
        <TextField source="id" sortable={false} />
        <TextField source="name" sortable={false} />
        <DateField source="createdAt" />
        <ShowButton />
        <EditButton />
        <DeleteButton
          mutationOptions={{ meta: { mutation: DeletePermissionDocument } }}
        />
      </Datagrid>
    </List>
  );
};

export default PermissionsList;
