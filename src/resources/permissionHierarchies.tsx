import { ResourceType } from 'ResourceType';
import PermissionHierarchiesList from 'components/PermissionHierarchies/PermissionHierarchiesList';
import { Fetcher } from 'fetcher';
import { PermissionHierarchiesDocument } from 'gql/graphql';

const permissionHierarchies: Partial<ResourceType> = {
  list: PermissionHierarchiesList,
};

export default permissionHierarchies;

export const permissionHierarchiesFetcher: Partial<Fetcher> = {
  list: PermissionHierarchiesDocument,
};
