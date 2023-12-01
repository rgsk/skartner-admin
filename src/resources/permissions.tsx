import PermissionsCreate from "components/Permissions/PermissionsCreate/PermissionsCreate";
import PermissionsList from "components/Permissions/PermissionsList/PermissionsList";
import PermissionsShow from "components/Permissions/PermissionsShow/PermissionsShow";
import PermissionsEdit from "components/Roles/RolesEdit/RolesEdit";

const permissions = {
  list: PermissionsList,
  show: PermissionsShow,
  create: PermissionsCreate,
  edit: PermissionsEdit,
};
export default permissions;
