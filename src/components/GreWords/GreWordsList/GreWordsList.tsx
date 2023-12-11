import {
  GreWordListReferenceUsersDocument,
  GreWordsDocument,
} from 'gql/graphql';
import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
  TextInput,
} from 'react-admin';

interface IGreWordListProps {}
const GreWordsList: React.FC<IGreWordListProps> = ({}) => {
  return (
    <List
      queryOptions={{
        meta: {
          query: GreWordsDocument,
        },
      }}
      filters={[
        <TextInput
          key="cacheWord_text_startsWith"
          source="cacheWord_text_startsWith"
          alwaysOn
        />,
        <TextInput
          key="user_email_startsWith"
          source="user_email_startsWith"
          alwaysOn
        />,
      ]}
    >
      <Datagrid rowClick="show">
        <TextField source="id" sortable={false}></TextField>
        <TextField source="cacheWord.text" sortable={false}></TextField>
        <ReferenceField
          label="User"
          source="userId"
          reference="users"
          queryOptions={{
            meta: {
              query: GreWordListReferenceUsersDocument,
            },
          }}
          sortable={false}
        >
          <TextField source="email" />
        </ReferenceField>
        <DateField source="updatedAt" />
      </Datagrid>
    </List>
  );
};
export default GreWordsList;
