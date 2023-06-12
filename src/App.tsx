import { Admin, Resource } from "react-admin";
import greWords from "resources/greWords";
import userSessions from "resources/userSessions";
import users from "resources/users";
import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" {...users} />
    <Resource name="greWords" {...greWords} />
    <Resource name="userSessions" {...userSessions} />
  </Admin>
);
