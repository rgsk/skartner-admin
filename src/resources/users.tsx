import { ResourceType } from 'ResourceType';
import UsersList from 'components/Users/UsersList';
import { Fetcher } from 'fetcher';
import { UserDocument, UsersDocument } from 'gql/graphql';

const users: Partial<ResourceType> = {
  list: UsersList,
};
export default users;

export const usersFetcher: Partial<Fetcher> = {
  list: UsersDocument,
  one: UserDocument,
};
