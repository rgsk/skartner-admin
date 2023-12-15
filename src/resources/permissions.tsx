import { ResourceType } from 'ResourceType';
import PermissionsCreate from 'components/Permissions/PermissionsCreate/PermissionsCreate';
import PermissionsList from 'components/Permissions/PermissionsList/PermissionsList';
import PermissionsShow from 'components/Permissions/PermissionsShow/PermissionsShow';
import PermissionsEdit from 'components/Roles/RolesEdit/RolesEdit';
import { Fetcher } from 'fetcher';
import {
  CreatePermissionDocument,
  DeletePermissionDocument,
  DeletePermissionsDocument,
  PermissionDocument,
  PermissionsDocument,
  UpdatePermissionDocument,
} from 'gql/graphql';

const permissions: ResourceType = {
  list: PermissionsList,
  show: PermissionsShow,
  create: PermissionsCreate,
  edit: PermissionsEdit,
};
export default permissions;

export const permissionsFetcher: Fetcher = {
  list: PermissionsDocument,
  one: PermissionDocument,
  create: CreatePermissionDocument,
  update: UpdatePermissionDocument,
  delete: DeletePermissionDocument,
  deleteMany: DeletePermissionsDocument,
};
