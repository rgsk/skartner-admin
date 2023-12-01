import { RelationsPermissionToUserDocument } from "gql/graphql";
import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  TextField,
} from "react-admin";
const RelationsPermissionToUserList = () => {
  return (
    <List
      queryOptions={{
        meta: {
          query: RelationsPermissionToUserDocument,
        },
      }}
    >
      <Datagrid>
        <TextField source="permission.name" sortable={false} />
        <TextField source="user.email" sortable={false} />
        <TextField source="granter.email" sortable={false} />
        <BooleanField source="isAllowed" sortable={false} />
        <DateField source="grantedAt" />
      </Datagrid>
    </List>
  );
};

export default RelationsPermissionToUserList;
