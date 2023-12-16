import Resources from 'Resources';
import {
  AutocompleteInput,
  Create,
  ReferenceInput,
  SimpleForm,
} from 'react-admin';

const PermissionHierarchiesCreate = () => (
  <Create>
    <PermissionHierarchiesForm />
  </Create>
);

export default PermissionHierarchiesCreate;

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
