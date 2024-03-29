import { Admin, CustomRoutes, Resource } from 'react-admin';
import { FirebaseAuthProvider } from 'react-admin-firebase';
import { Route } from 'react-router';
import greWords from 'resources/greWords';
import userSessions from 'resources/userSessions';
import users from 'resources/users';
import { dataProvider } from './dataProvider';

import { ApolloProvider, useApolloClient } from '@apollo/client';
import CustomLoginPage from 'CustomLoginPage';
import Resources from 'Resources';
import Practice from 'components/Practice/Practice';
import useToken from 'hooks/useToken';
import useRunOnWindowFocus from 'hooks/utils/useRunOnWindowFocus';
import apolloClient from 'lib/apolloClient';
import environmentVars from 'lib/environmentVars';
import { useEffect } from 'react';
import permissionHierarchies from 'resources/permissionHierarchies';
import permissions from 'resources/permissions';
import relationsPermissionToRole from 'resources/relationsPermissionToRole';
import relationsPermissionToUser from 'resources/relationsPermissionToUser';
import relationsRoleToUser from 'resources/relationsRoleToUser';
import roles from 'resources/roles';

const authProvider = FirebaseAuthProvider(environmentVars.firebaseConfig, {});

export const App = () => {
  const { token, tokenLoading } = useToken();
  useEffect(() => {
    if (token !== undefined) {
      window.localStorage.setItem('token', token);
    } else {
      window.localStorage.removeItem('token');
    }
  }, [token]);

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalHooksSetter />
      <Admin
        dataProvider={dataProvider}
        loginPage={CustomLoginPage}
        authProvider={authProvider}
      >
        <CustomRoutes>
          <Route path="/practice" element={<Practice />} />
        </CustomRoutes>
        {tokenLoading ? null : (
          <>
            <Resource name={Resources.users} {...users} />
            <Resource name={Resources.greWords} {...greWords} />
            <Resource name={Resources.userSessions} {...userSessions} />
            <Resource name={Resources.permissions} {...permissions} />
            <Resource name={Resources.roles} {...roles} />
            <Resource
              name={Resources.relationsPermissionToRole}
              {...relationsPermissionToRole}
            />
            <Resource
              name={Resources.relationsPermissionToUser}
              {...relationsPermissionToUser}
            />
            <Resource
              name={Resources.relationsRoleToUser}
              {...relationsRoleToUser}
            />
            <Resource
              name={Resources.permissionHierarchies}
              {...permissionHierarchies}
            />
          </>
        )}
      </Admin>
    </ApolloProvider>
  );
};

interface IGlobalHooksSetterProps {}
const GlobalHooksSetter: React.FC<IGlobalHooksSetterProps> = ({}) => {
  const client = useApolloClient();
  useRunOnWindowFocus(() => {
    client.refetchQueries({ include: 'active' });
  });
  return null;
};
export default GlobalHooksSetter;
