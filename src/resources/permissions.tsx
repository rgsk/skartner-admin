import { ResourceType } from 'ResourceType';
import PermissionsCreate from 'components/Permissions/PermissionsCreate';
import PermissionsEdit from 'components/Permissions/PermissionsEdit';
import PermissionsList from 'components/Permissions/PermissionsList';
import PermissionsShow from 'components/Permissions/PermissionsShow/PermissionsShow';
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
