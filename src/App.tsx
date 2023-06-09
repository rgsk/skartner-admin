import { Admin, Resource } from "react-admin";
import { jsonServerDataProvider } from "./dataProvider";
import users from "./users/users";

export const App = () => (
  <Admin dataProvider={jsonServerDataProvider}>
    <Resource name="users" {...users} />
  </Admin>
);
