import Resources from 'Resources';
import { relationsPermissionToUserGraphql } from 'resources/relationsPermissionToUser';

const fetcher: Record<string, any> = {
  [Resources.relationsPermissionToUser]: relationsPermissionToUserGraphql,
};
export default fetcher;
