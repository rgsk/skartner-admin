import { ResourceType } from 'ResourceType';
import PermissionHierarchiesList from 'components/PermissionHierarchies/PermissionHierarchiesList';
import PermissionHierarchiesShow from 'components/PermissionHierarchies/PermissionHierarchiesShow';
import { Fetcher } from 'fetcher';
import {
  PermissionHierarchiesDocument,
  PermissionHierarchyDocument,
} from 'gql/graphql';

const permissionHierarchies: Partial<ResourceType> = {
  list: PermissionHierarchiesList,
  show: PermissionHierarchiesShow,
};

export default permissionHierarchies;

export const permissionHierarchiesFetcher: Partial<Fetcher> = {
  list: PermissionHierarchiesDocument,
  one: PermissionHierarchyDocument,
};
