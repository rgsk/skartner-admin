import PermissionsCreate from "components/Permissions/PermissionsCreate/PermissionsCreate";
import PermissionsEdit from "components/Permissions/PermissionsEdit/PermissionsEdit";
import PermissionsList from "components/Permissions/PermissionsList/PermissionsList";
import PermissionsShow from "components/Permissions/PermissionsShow/PermissionsShow";

const permissions = {
  list: PermissionsList,
  show: PermissionsShow,
  create: PermissionsCreate,
  edit: PermissionsEdit,
};
export default permissions;
