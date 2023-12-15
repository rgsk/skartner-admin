import { ResourceType } from 'ResourceType';
import GreWordsList from 'components/GreWords/GreWordsList';
import GreWordsShow from 'components/GreWords/GreWordsShow';
import { Fetcher } from 'fetcher';
import { GreWordDocument, GreWordsDocument } from 'gql/graphql';

const greWords: Partial<ResourceType> = {
  list: GreWordsList,
  show: GreWordsShow,
};
export default greWords;

export const greWordsFetcher: Partial<Fetcher> = {
  list: GreWordsDocument,
  one: GreWordDocument,
};
