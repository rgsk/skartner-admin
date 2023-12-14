import {
  RelationPermissionToUserDocument,
  UpdateRelationPermissionToUserDocument,
} from 'gql/graphql';
import { Edit } from 'react-admin';

import Resources from 'Resources';
import { PermissionsDocument, UsersDocument } from 'gql/graphql';
import useUser from 'hooks/useUser';
import {
  AutocompleteInput,
  NullableBooleanInput,
  ReferenceInput,
  SimpleForm,
} from 'react-admin';

const RelationsPermissionToUserEdit = () => {
  return (
    <Edit
      queryOptions={{ meta: { query: RelationPermissionToUserDocument } }}
      mutationOptions={{
        meta: { mutation: UpdateRelationPermissionToUserDocument },
      }}
    >
      <RelationsPermissionToUserForm />
    </Edit>
  );
};

export default RelationsPermissionToUserEdit;

interface IRelationsPermissionToUserFormProps {}
export const RelationsPermissionToUserForm: React.FC<
  IRelationsPermissionToUserFormProps
> = ({}) => {
  const { user } = useUser();
  if (!user) {
    return null;
  }
  return (
    <SimpleForm defaultValues={{ granterId: user.id }}>
      <ReferenceInput
        source="permissionId"
        reference={Resources.permissions}
        queryOptions={{ meta: { query: PermissionsDocument } }}
      >
        <AutocompleteInput
          optionText="name"
          fullWidth
          filterToQuery={(searchText) => {
            return { name_contains: searchText };
          }}
          isRequired
        />
      </ReferenceInput>
      <ReferenceInput
        source="userId"
        reference={Resources.users}
        queryOptions={{ meta: { query: UsersDocument } }}
      >
        <AutocompleteInput
          optionText="email"
          fullWidth
          filterToQuery={(searchText) => {
            return { email_contains: searchText };
          }}
          isRequired
        />
      </ReferenceInput>
      <NullableBooleanInput source="isAllowed"></NullableBooleanInput>
    </SimpleForm>
  );
};
