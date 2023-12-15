import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  ShowButton,
  TextField,
  TextInput,
} from 'react-admin';

interface IGreWordListProps {}
const GreWordsList: React.FC<IGreWordListProps> = ({}) => {
  return (
    <List
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
      <Datagrid>
        <TextField source="id" sortable={false}></TextField>
        <TextField source="cacheWord.text" sortable={false}></TextField>
        <ReferenceField
          label="User"
          source="userId"
          reference="users"
          sortable={false}
        >
          <TextField source="email" />
        </ReferenceField>
        <DateField source="updatedAt" />
        <ShowButton />
      </Datagrid>
    </List>
  );
};
export default GreWordsList;
