import { PermissionQuery } from 'gql/graphql';
import { Edit, SimpleForm, TextInput, useRecordContext } from 'react-admin';

const PermissionsEdit = () => {
  return (
    <Edit title={<PermissionsTitle />}>
      <SimpleForm>
        <TextInput source="name" />
      </SimpleForm>
    </Edit>
  );
};

export default PermissionsEdit;

export const PermissionsTitle = () => {
  const permission = useRecordContext() as PermissionQuery['permission'];
  return <span>{permission?.name}</span>;
};
