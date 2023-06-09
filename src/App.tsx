import { Admin, Resource } from "react-admin";
import greWords from "resources/greWords";
import users from "resources/users";
import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" {...users} />
    <Resource name="greWords" {...greWords} />
  </Admin>
);
