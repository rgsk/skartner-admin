import { ResourceType } from 'ResourceType';
import GreWordsShow from 'components/GreWords/GreWordShow/GreWordsShow';
import GreWordsList from 'components/GreWords/GreWordsList/GreWordsList';
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
