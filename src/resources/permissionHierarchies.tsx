import { ResourceType } from 'ResourceType';
import PermissionHierarchiesCreate from 'components/PermissionHierarchies/PermissionHierarchiesCreate';
import PermissionHierarchiesEdit from 'components/PermissionHierarchies/PermissionHierarchiesEdit';
import PermissionHierarchiesList from 'components/PermissionHierarchies/PermissionHierarchiesList';
import PermissionHierarchiesShow from 'components/PermissionHierarchies/PermissionHierarchiesShow';
import { Fetcher } from 'fetcher';
import {
  CreatePermissionHierarchyDocument,
  DeletePermissionHierarchiesDocument,
  DeletePermissionHierarchyDocument,
  PermissionHierarchiesDocument,
  PermissionHierarchyDocument,
  UpdatePermissionHierarchyDocument,
} from 'gql/graphql';

const permissionHierarchies: ResourceType = {
  list: PermissionHierarchiesList,
  show: PermissionHierarchiesShow,
  create: PermissionHierarchiesCreate,
  edit: PermissionHierarchiesEdit,
};

export default permissionHierarchies;

export const permissionHierarchiesFetcher: Fetcher = {
  list: PermissionHierarchiesDocument,
  one: PermissionHierarchyDocument,
  delete: DeletePermissionHierarchyDocument,
  deleteMany: DeletePermissionHierarchiesDocument,
  create: CreatePermissionHierarchyDocument,
  update: UpdatePermissionHierarchyDocument,
};
