import { Box, Typography } from '@mui/material';
import Resources from 'Resources';
import { useLocation } from 'react-router-dom';

import CustomAutocomplete from 'components/Custom/CustomAutocomplete';
import {
  DeleteRelationPermissionToRoleDocument,
  DeleteRelationsPermissionToRoleDocument,
  PermissionQuery,
  RelationsPermissionToRoleDocument,
  RelationsPermissionToRoleQuery,
  RolesDocument,
  RolesQuery,
  useCreateRelationPermissionToRoleMutation,
} from 'gql/graphql';
import useUser from 'hooks/useUser';
import { useMemo, useState } from 'react';
import {
  BooleanField,
  BulkDeleteButton,
  Datagrid,
  DateField,
  DeleteButton,
  List,
  TextField,
  useGetList,
  useRecordContext,
  useRefresh,
} from 'react-admin';

interface IPermissionToRoleProps {}
const PermissionToRole: React.FC<IPermissionToRoleProps> = ({}) => {
  const permission = useRecordContext() as PermissionQuery['permission'];
  const locationObject = useLocation();
  const [roleNameInput, setRoleNameInput] = useState('');
  const { user } = useUser();
  const refresh = useRefresh();

  const { data: relationsPermissionToRole } = useGetList<
    RelationsPermissionToRoleQuery['relationsPermissionToRole'][number]
  >(Resources.relationsPermissionToRole, {
    meta: {
      query: RelationsPermissionToRoleDocument,
    },
    filter: {
      permissionId_equals: permission?.id,
    },
  });

  const { data: roles } = useGetList<RolesQuery['roles'][number]>(
    Resources.roles,
    {
      meta: { query: RolesDocument },
      filter: {
        name_contains: roleNameInput,
      },
    },
  );

  const [
    createRelationPermissionToRoleMutation,
    createRelationPermissionToRoleMutationResult,
  ] = useCreateRelationPermissionToRoleMutation();
  const options = useMemo(() => {
    return (
      roles
        ?.filter((role) => {
          return !relationsPermissionToRole?.some(
            (relation) => relation.role?.name === role.name,
          );
        })
        ?.map((role) => role.name) ?? []
    );
  }, [relationsPermissionToRole, roles]);

  const onSelect = (roleName: string) => {
    if (permission && user) {
      const selectedRole = roles?.find((role) => role.name === roleName);
      if (selectedRole) {
        createRelationPermissionToRoleMutation({
          variables: {
            roleId: selectedRole.id,
            permissionId: permission.id,
            granterId: user.id,
            isAllowed: true,
          },
          onCompleted: () => {
            refresh();
          },
        });
      }
    }
  };

  return (
    <Box>
      <Typography>Relations Permission To Role</Typography>

      <CustomAutocomplete
        label="role name"
        options={options}
        onChange={(value) => {
          setRoleNameInput(value);
        }}
        onSelect={(option) => {
          onSelect(option);
        }}
        loading={createRelationPermissionToRoleMutationResult.loading}
      ></CustomAutocomplete>

      <List
        queryOptions={{
          meta: {
            query: RelationsPermissionToRoleDocument,
          },
        }}
        resource="relationsPermissionToRole"
        filter={{ permissionId_equals: permission?.id }}
      >
        <Datagrid
          bulkActionButtons={
            <BulkDeleteButton
              mutationOptions={{
                meta: { mutation: DeleteRelationsPermissionToRoleDocument },
              }}
            />
          }
        >
          <TextField source="role.name" sortable={false} />
          <TextField source="granter.email" sortable={false} />
          <BooleanField source="isAllowed" sortable={false} />
          <DateField source="grantedAt" />
          <DeleteButton
            mutationOptions={{
              meta: { mutation: DeleteRelationPermissionToRoleDocument },
            }}
            redirect={() => {
              return locationObject.pathname.slice(1);
            }}
          />
        </Datagrid>
      </List>
    </Box>
  );
};

export default PermissionToRole;
