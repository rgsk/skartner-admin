import { UserSessionListDocument, UserSessionListQuery } from "gql/graphql";
import { getSourceValidator } from "lib/graphqlUtils";
import { Datagrid, List, TextField } from "react-admin";

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
    >
      <Datagrid>
        <TextField source={getSource("id")} />
        <TextField source={getSource("user.email")} />
      </Datagrid>
    </List>
  );
};
export default UserSessionList;
