import Resources from 'Resources';
import { DocumentNode } from 'graphql';
import { greWordsFetcher } from 'resources/greWords';
import { permissionsFetcher } from 'resources/permissions';
import { relationsPermissionToRoleFetcher } from 'resources/relationsPermissionToRole';
import { relationsPermissionToUserFetcher } from 'resources/relationsPermissionToUser';
import { relationsRoleToUserFetcher } from 'resources/relationsRoleToUser';
import { rolesFetcher } from 'resources/roles';
import { userSessionsFetcher } from 'resources/userSessions';
import { usersFetcher } from 'resources/users';

export type Fetcher = {
  list: DocumentNode;
  one: DocumentNode;
  create: DocumentNode;
  update: DocumentNode;
  delete: DocumentNode;
  deleteMany: DocumentNode;
};

const fetcher: Record<string, Partial<Fetcher>> = {
  [Resources.relationsPermissionToUser]: relationsPermissionToUserFetcher,
  [Resources.relationsPermissionToRole]: relationsPermissionToRoleFetcher,
  [Resources.roles]: rolesFetcher,
  [Resources.permissions]: permissionsFetcher,
  [Resources.greWords]: greWordsFetcher,
  [Resources.users]: usersFetcher,
  [Resources.userSessions]: userSessionsFetcher,
  [Resources.relationsRoleToUser]: relationsRoleToUserFetcher,
};
export default fetcher;
