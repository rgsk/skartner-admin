import { ResourceType } from 'ResourceType';
import UserSessionsList from 'components/UserSessions/UserSessionsList';
import { Fetcher } from 'fetcher';
import { UserSessionsDocument } from 'gql/graphql';

const userSessions: Partial<ResourceType> = {
  list: UserSessionsList,
};
export default userSessions;

export const userSessionsFetcher: Partial<Fetcher> = {
  list: UserSessionsDocument,
};
