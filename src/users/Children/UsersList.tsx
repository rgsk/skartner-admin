// in src/users.tsx
import { useEffect } from "react";
import { Datagrid, EmailField, List, TextField, UrlField } from "react-admin";
import environmentVars from "../../lib/environmentVars";

const UserList = () => {
  useEffect(() => {
    console.log(environmentVars);
  }, []);
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="address.street" />
        <TextField source="phone" />
        <UrlField source="website" />
        <TextField source="company.name" />
      </Datagrid>
    </List>
  );
};

export default UserList;
