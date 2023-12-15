import { Edit } from 'react-admin';

import Resources from 'Resources';
import useUser from 'hooks/useUser';
import {
  AutocompleteInput,
  NullableBooleanInput,
  ReferenceInput,
  SimpleForm,
} from 'react-admin';

const RelationsPermissionToRoleEdit = () => {
  return (
    <Edit>
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
      <ReferenceInput source="permissionId" reference={Resources.permissions}>
        <AutocompleteInput
          optionText="name"
          fullWidth
          filterToQuery={(searchText) => {
            return { name_contains: searchText };
          }}
          isRequired
        />
      </ReferenceInput>
      <ReferenceInput source="roleId" reference={Resources.roles}>
        <AutocompleteInput
          optionText="name"
          fullWidth
          filterToQuery={(searchText) => {
            return { name_contains: searchText };
          }}
          isRequired
        />
      </ReferenceInput>
      <NullableBooleanInput source="isAllowed"></NullableBooleanInput>
    </SimpleForm>
  );
};
