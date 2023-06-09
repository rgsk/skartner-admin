import { Admin, Resource } from "react-admin";
import users from "resources/users";
import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" {...users} />
  </Admin>
);
