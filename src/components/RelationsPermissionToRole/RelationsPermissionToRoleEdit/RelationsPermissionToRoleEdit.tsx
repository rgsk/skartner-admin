import {
  RelationPermissionToRoleDocument,
  UpdateRelationPermissionToRoleDocument,
} from 'gql/graphql';
import { Edit } from 'react-admin';

import Resources from 'Resources';
import { PermissionsDocument, RolesDocument } from 'gql/graphql';
import useUser from 'hooks/useUser';
import {
  AutocompleteInput,
  NullableBooleanInput,
  ReferenceInput,
  SimpleForm,
} from 'react-admin';

const RelationsPermissionToRoleEdit = () => {
  return (
    <Edit
      queryOptions={{ meta: { query: RelationPermissionToRoleDocument } }}
      mutationOptions={{
        meta: { mutation: UpdateRelationPermissionToRoleDocument },
      }}
    >
      <RelationsPermissionToRoleForm />
    </Edit>
  );
};

export default RelationsPermissionToRoleEdit;

interface IRelationsPermissionToRoleFormProps {}
export const RelationsPermissionToRoleForm: React.FC<
  IRelationsPermissionToRoleFormProps
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
        />
      </ReferenceInput>
      <ReferenceInput
        source="roleId"
        reference={Resources.roles}
        queryOptions={{ meta: { query: RolesDocument } }}
      >
        <AutocompleteInput
          optionText="name"
          fullWidth
          filterToQuery={(searchText) => {
            return { name_contains: searchText };
          }}
        />
      </ReferenceInput>
      <NullableBooleanInput source="isAllowed"></NullableBooleanInput>
    </SimpleForm>
  );
};
