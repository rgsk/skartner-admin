import { ResourceType } from 'ResourceType';
import RelationsRoleToUserCreate from 'components/RelationsRoleToUser/RelationsRoleToUserCreate';
import RelationsRoleToUserEdit from 'components/RelationsRoleToUser/RelationsRoleToUserEdit';
import RelationsRoleToUserList from 'components/RelationsRoleToUser/RelationsRoleToUserList';
import RelationsRoleToUserShow from 'components/RelationsRoleToUser/RelationsRoleToUserShow';
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
  create: RelationsRoleToUserCreate,
  edit: RelationsRoleToUserEdit,
  show: RelationsRoleToUserShow,
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
