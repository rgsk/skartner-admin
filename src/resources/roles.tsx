import RolesCreate from 'components/Roles/RolesCreate';
import RolesEdit from 'components/Roles/RolesEdit';
import RolesList from 'components/Roles/RolesList';
import RolesShow from 'components/Roles/RolesShow';
import { Fetcher } from 'fetcher';
import {
  CreateRoleDocument,
  DeleteRoleDocument,
  DeleteRolesDocument,
  RoleDocument,
  RolesDocument,
  UpdateRoleDocument,
} from 'gql/graphql';

const roles = {
  list: RolesList,
  create: RolesCreate,
  show: RolesShow,
  edit: RolesEdit,
};
export default roles;

export const rolesFetcher: Fetcher = {
  list: RolesDocument,
  one: RoleDocument,
  create: CreateRoleDocument,
  update: UpdateRoleDocument,
  delete: DeleteRoleDocument,
  deleteMany: DeleteRolesDocument,
};
