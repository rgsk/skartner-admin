import RelationsPermissionToUserCreate from 'components/RelationsPermissionToUser/RelationsPermissionToUserCreate/RelationsPermissionToUserCreate';
import RelationsPermissionToUserEdit from 'components/RelationsPermissionToUser/RelationsPermissionToUserEdit/RelationsPermissionToUserEdit';
import RelationsPermissionToUserList from 'components/RelationsPermissionToUser/RelationsPermissionToUserList/RelationsPermissionToUserList';
import RelationsPermissionToUserShow from 'components/RelationsPermissionToUser/RelationsPermissionToUserShow/RelationsPermissionToUserShow';
import {
  CreateRelationPermissionToUserDocument,
  RelationPermissionToUserDocument,
  RelationsPermissionToUserDocument,
  UpdateRelationPermissionToUserDocument,
} from 'gql/graphql';

const relationsPermissionToUser = {
  list: RelationsPermissionToUserList,
  show: RelationsPermissionToUserShow,
  create: RelationsPermissionToUserCreate,
  edit: RelationsPermissionToUserEdit,
};
export default relationsPermissionToUser;

export const relationsPermissionToUserGraphql = {
  list: RelationsPermissionToUserDocument,
  show: RelationPermissionToUserDocument,
  create: CreateRelationPermissionToUserDocument,
  edit: UpdateRelationPermissionToUserDocument,
};
