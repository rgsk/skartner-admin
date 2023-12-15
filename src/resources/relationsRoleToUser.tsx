import { ResourceType } from 'ResourceType';
import RelationsRoleToUserList from 'components/RelationsRoleToUser/RelationsRoleToUserList';
import { Fetcher } from 'fetcher';
import {
  CreateRelationRoleToUserDocument,
  DeleteRelationRoleToUserDocument,
  DeleteRelationsRoleToUserDocument,
  RelationRoleToUserDocument,
  RelationsRoleToUserDocument,
  UpdateRelationRoleToUserDocument,
} from 'gql/graphql';

const relationsRoleToUser: Partial<ResourceType> = {
  list: RelationsRoleToUserList,
};
export default relationsRoleToUser;

export const relationsRoleToUserFetcher: Fetcher = {
  create: CreateRelationRoleToUserDocument,
  update: UpdateRelationRoleToUserDocument,
  list: RelationsRoleToUserDocument,
  one: RelationRoleToUserDocument,
  delete: DeleteRelationRoleToUserDocument,
  deleteMany: DeleteRelationsRoleToUserDocument,
};
