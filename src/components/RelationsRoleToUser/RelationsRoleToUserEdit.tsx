import { Edit } from 'react-admin';

import Resources from 'Resources';
import useUser from 'hooks/useUser';
import { AutocompleteInput, ReferenceInput, SimpleForm } from 'react-admin';

const RelationsRoleToUserEdit = () => {
  return (
    <Edit>
      <RelationsRoleToUserForm />
    </Edit>
  );
};

export default RelationsRoleToUserEdit;

interface IRelationsRoleToUserFormProps {}
export const RelationsRoleToUserForm: React.FC<
  IRelationsRoleToUserFormProps
> = ({}) => {
  const { user } = useUser();
  if (!user) {
    return null;
  }
  return (
    <SimpleForm defaultValues={{ assignerId: user.id }}>
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
      <ReferenceInput source="userId" reference={Resources.users}>
        <AutocompleteInput
          optionText="email"
          fullWidth
          filterToQuery={(searchText) => {
            return { name_contains: searchText };
          }}
          isRequired
        />
      </ReferenceInput>
    </SimpleForm>
  );
};
