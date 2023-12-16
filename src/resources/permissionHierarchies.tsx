import { ResourceType } from 'ResourceType';
import PermissionHierarchiesCreate from 'components/PermissionHierarchies/PermissionHierarchiesCreate';
import PermissionHierarchiesList from 'components/PermissionHierarchies/PermissionHierarchiesList';
import PermissionHierarchiesShow from 'components/PermissionHierarchies/PermissionHierarchiesShow';
import { Fetcher } from 'fetcher';
import {
  CreatePermissionHierarchyDocument,
  DeletePermissionHierarchiesDocument,
  DeletePermissionHierarchyDocument,
  PermissionHierarchiesDocument,
  PermissionHierarchyDocument,
} from 'gql/graphql';

const permissionHierarchies: Partial<ResourceType> = {
  list: PermissionHierarchiesList,
  show: PermissionHierarchiesShow,
  create: PermissionHierarchiesCreate,
};

export default permissionHierarchies;

export const permissionHierarchiesFetcher: Partial<Fetcher> = {
  list: PermissionHierarchiesDocument,
  one: PermissionHierarchyDocument,
  delete: DeletePermissionHierarchyDocument,
  deleteMany: DeletePermissionHierarchiesDocument,
  create: CreatePermissionHierarchyDocument,
};
