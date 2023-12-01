import { DeletePermissionsDocument, PermissionsDocument } from "gql/graphql";
import {
  BulkDeleteButton,
  Datagrid,
  DateField,
  EditButton,
  List,
  TextField,
  TextInput,
} from "react-admin";

const PermissionsList = () => {
  return (
    <List
      queryOptions={{
        meta: {
          query: PermissionsDocument,
        },
      }}
      filters={[<TextInput source="name_contains" alwaysOn />]}
    >
      <Datagrid
        rowClick="show"
        bulkActionButtons={
          <BulkDeleteButton
            mutationOptions={{ meta: { mutation: DeletePermissionsDocument } }}
          />
        }
      >
        <TextField source="id" sortable={false} />
        <TextField source="name" sortable={false} />
        <DateField source="createdAt" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default PermissionsList;
