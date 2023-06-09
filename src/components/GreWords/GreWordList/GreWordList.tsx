import {
  GreWordListDocument,
  GreWordListReferenceUsersDocument,
} from "gql/graphql";
import {
  Datagrid,
  List,
  ReferenceField,
  TextField,
  TextInput,
} from "react-admin";

interface IGreWordListProps {}
const GreWordList: React.FC<IGreWordListProps> = ({}) => {
  return (
    <List
      queryOptions={{
        meta: {
          query: GreWordListDocument,
        },
      }}
      filters={[
        <TextInput source="spelling_startsWith" alwaysOn />,
        <TextInput source="user_email_startsWith" alwaysOn />,
      ]}
    >
      <Datagrid rowClick="show">
        <TextField source="id"></TextField>
        <TextField source="spelling"></TextField>
        <ReferenceField
          label="User"
          source="userId"
          reference="users"
          queryOptions={{
            meta: {
              query: GreWordListReferenceUsersDocument,
            },
          }}
        >
          <TextField source="email" />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
export default GreWordList;
