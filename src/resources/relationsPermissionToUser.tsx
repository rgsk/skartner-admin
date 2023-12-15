import { ResourceType } from 'ResourceType';
import RelationsPermissionToUserCreate from 'components/RelationsPermissionToUser/RelationsPermissionToUserCreate';
import RelationsPermissionToUserEdit from 'components/RelationsPermissionToUser/RelationsPermissionToUserEdit';
import RelationsPermissionToUserList from 'components/RelationsPermissionToUser/RelationsPermissionToUserList';
import RelationsPermissionToUserShow from 'components/RelationsPermissionToUser/RelationsPermissionToUserShow';
import { Fetcher } from 'fetcher';
import {
  CreateRelationPermissionToUserDocument,
  DeleteRelationPermissionToUserDocument,
  DeleteRelationsPermissionToUserDocument,
  RelationPermissionToUserDocument,
  RelationsPermissionToUserDocument,
  UpdateRelationPermissionToUserDocument,
} from 'gql/graphql';

const relationsPermissionToUser: ResourceType = {
  list: RelationsPermissionToUserList,
  show: RelationsPermissionToUserShow,
  create: RelationsPermissionToUserCreate,
  edit: RelationsPermissionToUserEdit,
};
export default relationsPermissionToUser;

export const relationsPermissionToUserFetcher: Fetcher = {
  list: RelationsPermissionToUserDocument,
  one: RelationPermissionToUserDocument,
  create: CreateRelationPermissionToUserDocument,
  update: UpdateRelationPermissionToUserDocument,
  delete: DeleteRelationPermissionToUserDocument,
  deleteMany: DeleteRelationsPermissionToUserDocument,
};
