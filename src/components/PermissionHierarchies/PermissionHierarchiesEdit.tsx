import { Edit } from 'react-admin';

import Resources from 'Resources';
import { AutocompleteInput, ReferenceInput, SimpleForm } from 'react-admin';

const PermissionHierarchiesEdit = () => {
  return (
    <Edit>
      <PermissionHierarchiesForm />
    </Edit>
  );
};

export default PermissionHierarchiesEdit;

interface IPermissionHierarchiesFormProps {}
export const PermissionHierarchiesForm: React.FC<
  IPermissionHierarchiesFormProps
> = ({}) => {
  return (
    <SimpleForm>
      <ReferenceInput
        source="parentPermissionId"
        reference={Resources.permissions}
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
        source="childPermissionId"
        reference={Resources.permissions}
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
    </SimpleForm>
  );
};
