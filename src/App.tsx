import { Admin, CustomRoutes, Resource } from "react-admin";
import { FirebaseAuthProvider } from "react-admin-firebase";
import { Route } from "react-router";
import greWords from "resources/greWords";
import userSessions from "resources/userSessions";
import users from "resources/users";
import { dataProvider } from "./dataProvider";

import { ApolloProvider } from "@apollo/client";
import CustomLoginPage from "CustomLoginPage";
import Practice from "components/Practice/Practice";
import useToken from "hooks/useToken";
import apolloClient from "lib/apolloClient";
import environmentVars from "lib/environmentVars";
import { useEffect } from "react";
import permissions from "resources/permissions";
import relationsPermissionToRole from "resources/relationsPermissionToRole";
import relationsPermissionToUser from "resources/relationsPermissionToUser";
import relationsRoleToUser from "resources/relationsRoleToUser";
import roles from "resources/roles";

const authProvider = FirebaseAuthProvider(environmentVars.firebaseConfig, {});

export const App = () => {
  const { token, tokenLoading } = useToken();
  useEffect(() => {
    if (token !== undefined) {
      window.localStorage.setItem("token", token);
    } else {
      window.localStorage.removeItem("token");
    }
  }, [token]);
  return (
    <ApolloProvider client={apolloClient}>
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
            <Resource name="users" {...users} />
            <Resource name="greWords" {...greWords} />
            <Resource name="userSessions" {...userSessions} />
            <Resource name="permissions" {...permissions} />
            <Resource name="roles" {...roles} />
            <Resource
              name="relationsPermissionToRole"
              {...relationsPermissionToRole}
            />
            <Resource
              name="relationsPermissionToUser"
              {...relationsPermissionToUser}
            />
            <Resource name="relationsRoleToUser" {...relationsRoleToUser} />
          </>
        )}
      </Admin>
    </ApolloProvider>
  );
};
