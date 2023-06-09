import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import users from "./users/users";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" {...users} />
  </Admin>
);
