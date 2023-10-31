import { Admin, CustomRoutes, Resource } from "react-admin";
import { FirebaseAuthProvider } from "react-admin-firebase";
import { Route } from "react-router";
import greWords from "resources/greWords";
import userSessions from "resources/userSessions";
import users from "resources/users";
import { dataProvider } from "./dataProvider";

import CustomLoginPage from "CustomLoginPage";
import Practice from "components/Practice/Practice";
import environmentVars from "lib/environmentVars";

const authProvider = FirebaseAuthProvider(environmentVars.firebaseConfig, {});

export const App = () => {
  return (
    <Admin
      dataProvider={dataProvider}
      loginPage={CustomLoginPage}
      authProvider={authProvider}
    >
      <CustomRoutes>
        <Route path="/practice" element={<Practice />} />
      </CustomRoutes>
      <Resource name="users" {...users} />
      <Resource name="greWords" {...greWords} />
      <Resource name="userSessions" {...userSessions} />
    </Admin>
  );
};
