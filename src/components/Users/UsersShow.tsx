import { UserQuery, useUserPermissionsGraphQuery } from 'gql/graphql';
import {
  EmailField,
  Show,
  SimpleShowLayout,
  useRecordContext,
} from 'react-admin';

const UsersShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <EmailField source="email" />
        <UserPermissionsGraphDisplay />
      </SimpleShowLayout>
    </Show>
  );
};
export default UsersShow;

interface IUserPermissionsGraphDisplayProps {}
const UserPermissionsGraphDisplay: React.FC<
  IUserPermissionsGraphDisplayProps
> = ({}) => {
  const User = useRecordContext() as UserQuery['user'];
  const { data: { userPermissionsGraph } = {} } = useUserPermissionsGraphQuery({
    variables: { where: { id: { equals: User?.id } } },
    skip: !User,
    fetchPolicy: 'network-only',
  });
  if (!userPermissionsGraph) {
    return null;
  }
  return (
    <div>
      <pre>{JSON.stringify(JSON.parse(userPermissionsGraph), null, 4)}</pre>
    </div>
  );
};
