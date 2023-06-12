import { UserSessionListDocument, UserSessionListQuery } from "gql/graphql";
import { getSourceValidator } from "lib/graphqlUtils";
import {
  Datagrid,
  DateField,
  List,
  NumberField,
  TextField,
  TextInput,
} from "react-admin";

type UserSessionRecord = Exclude<
  UserSessionListQuery["userSessions"][number],
  undefined | null
>;

const getSource = getSourceValidator<UserSessionRecord>();

interface IUserSessionListProps {}
const UserSessionList: React.FC<IUserSessionListProps> = ({}) => {
  return (
    <List
      queryOptions={{
        meta: {
          query: UserSessionListDocument,
        },
      }}
      filters={[<TextInput source="user_email_startsWith" alwaysOn />]}
    >
      <Datagrid>
        <TextField source={getSource("id")} />
        <TextField source={getSource("user.email")} />
        <DateField source={getSource("startedAt")} showTime={true} />
        <DateField source={getSource("endedAt")} showTime={true} />
        <NumberField source={getSource("duration")} />
      </Datagrid>
    </List>
  );
};
export default UserSessionList;
