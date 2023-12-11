import RolesCreate from 'components/Roles/RolesCreate/RolesCreate';
import RolesEdit from 'components/Roles/RolesEdit/RolesEdit';
import RolesList from 'components/Roles/RolesList/RolesList';
import RolesShow from 'components/Roles/RolesShow/RolesShow';

const roles = {
  list: RolesList,
  create: RolesCreate,
  show: RolesShow,
  edit: RolesEdit,
};
export default roles;
