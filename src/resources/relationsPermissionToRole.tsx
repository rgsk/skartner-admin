import { ResourceType } from 'ResourceType';
import RelationsPermissionToRoleCreate from 'components/RelationsPermissionToRole/RelationsPermissionToRoleCreate/RelationsPermissionToRoleCreate';
import RelationsPermissionToRoleEdit from 'components/RelationsPermissionToRole/RelationsPermissionToRoleEdit/RelationsPermissionToRoleEdit';
import RelationsPermissionToRoleList from 'components/RelationsPermissionToRole/RelationsPermissionToRoleList/RelationsPermissionToRoleList';
import RelationsPermissionToRoleShow from 'components/RelationsPermissionToRole/RelationsPermissionToRoleShow/RelationsPermissionToRoleShow';
import { Fetcher } from 'fetcher';
import {
  CreateRelationPermissionToRoleDocument,
  DeleteRelationPermissionToRoleDocument,
  DeleteRelationsPermissionToRoleDocument,
  RelationPermissionToRoleDocument,
  RelationsPermissionToRoleDocument,
  UpdateRelationPermissionToRoleDocument,
} from 'gql/graphql';

const relationsPermissionToRole: ResourceType = {
  list: RelationsPermissionToRoleList,
  create: RelationsPermissionToRoleCreate,
  show: RelationsPermissionToRoleShow,
  edit: RelationsPermissionToRoleEdit,
};
export default relationsPermissionToRole;

export const relationsPermissionToRoleFetcher: Fetcher = {
  list: RelationsPermissionToRoleDocument,
  one: RelationPermissionToRoleDocument,
  create: CreateRelationPermissionToRoleDocument,
  update: UpdateRelationPermissionToRoleDocument,
  delete: DeleteRelationPermissionToRoleDocument,
  deleteMany: DeleteRelationsPermissionToRoleDocument,
};
