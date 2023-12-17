import { ResourceType } from 'ResourceType';
import UsersList from 'components/Users/UsersList';
import UsersShow from 'components/Users/UsersShow';
import { Fetcher } from 'fetcher';
import { UserDocument, UsersDocument } from 'gql/graphql';

const users: Partial<ResourceType> = {
  list: UsersList,
  show: UsersShow,
};
export default users;

export const usersFetcher: Partial<Fetcher> = {
  list: UsersDocument,
  one: UserDocument,
};
