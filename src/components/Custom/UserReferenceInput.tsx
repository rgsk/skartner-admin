import Resources from 'Resources';
import { UsersDocument } from 'gql/graphql';
import { AutocompleteInput, ReferenceInput } from 'react-admin';

interface IUserReferenceInputProps {
  source: string;
}
const UserReferenceInput: React.FC<IUserReferenceInputProps> = ({ source }) => {
  return (
    <ReferenceInput
      source={source}
      reference={Resources.users}
      queryOptions={{ meta: { query: UsersDocument } }}
    >
      <AutocompleteInput
        optionText="email"
        fullWidth
        filterToQuery={(searchText) => {
          return { email_contains: searchText };
        }}
      />
    </ReferenceInput>
  );
};
export default UserReferenceInput;
