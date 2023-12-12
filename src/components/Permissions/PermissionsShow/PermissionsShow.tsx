import { Box, Typography } from '@mui/material';
import Resources from 'Resources';
import { useLocation } from 'react-router-dom';

import CustomAutocomplete from 'components/Custom/CustomAutocomplete';
import {
  DeletePermissionDocument,
  DeleteRelationPermissionToRoleDocument,
  DeleteRelationPermissionToUserDocument,
  DeleteRelationsPermissionToRoleDocument,
  DeleteRelationsPermissionToUserDocument,
  PermissionDocument,
  PermissionQuery,
  RelationsPermissionToRoleDocument,
  RelationsPermissionToUserDocument,
  RolesDocument,
  UsersDocument,
  useCreateRelationPermissionToRoleMutation,
  useCreateRelationPermissionToUserMutation,
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
  Show,
  SimpleShowLayout,
  TextField,
  useGetList,
  useRecordContext,
  useRefresh,
} from 'react-admin';

interface IPermissionsShowProps {}
const PermissionsShow: React.FC<IPermissionsShowProps> = ({}) => {
  return (
    <Box>
      <Show queryOptions={{ meta: { query: PermissionDocument } }}>
        <SimpleShowLayout>
          <TextField source={'id'} />
          <TextField source={'name'} />
          <DeleteButton
            mutationOptions={{ meta: { mutation: DeletePermissionDocument } }}
          />
        </SimpleShowLayout>
        <Box sx={{ mt: 2 }}>
          <PermissionToUser />
        </Box>
        <Box sx={{ mt: 2 }}>
          <PermissionToRole />
        </Box>
      </Show>
    </Box>
  );
};

export default PermissionsShow;

interface IPermissionToUserProps {}
const PermissionToUser: React.FC<IPermissionToUserProps> = ({}) => {
  const permission = useRecordContext() as PermissionQuery['permission'];
  const { user } = useUser();
  const refresh = useRefresh();

  const [userEmailSearchInput, setUserEmailSearchInput] = useState('');

  const { data: relationsPermissionToUser } = useGetList(
    Resources.relationsPermissionToUser,
    {
      meta: {
        query: RelationsPermissionToUserDocument,
      },
      filter: {
        permissionId_equals: permission?.id,
      },
    },
  );

  const { data: users } = useGetList(Resources.users, {
    meta: { query: UsersDocument },
    filter: {
      email_contains: userEmailSearchInput,
    },
  });

  const locationObject = useLocation();

  const [
    createRelationPermissionToUserMutation,
    createRelationPermissionToUserMutationResult,
  ] = useCreateRelationPermissionToUserMutation();

  const onSelect = (email: string) => {
    if (permission && user) {
      const selectedUser = users?.find((u) => u.email === email);
      if (selectedUser) {
        createRelationPermissionToUserMutation({
          variables: {
            userId: selectedUser.id,
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
  const options = useMemo(() => {
    return (
      users
        ?.filter((u) => {
          return !relationsPermissionToUser?.some((r) => r?.userId === u.id);
        })
        ?.map((u) => u.email) ?? []
    );
  }, [relationsPermissionToUser, users]);
  return (
    <Box>
      <Typography>Relations Permission To User</Typography>
      <CustomAutocomplete
        label="email"
        options={options}
        onChange={(value) => {
          setUserEmailSearchInput(value);
        }}
        onSelect={(option) => {
          onSelect(option);
        }}
        loading={createRelationPermissionToUserMutationResult.loading}
      ></CustomAutocomplete>

      <List
        queryOptions={{
          meta: {
            query: RelationsPermissionToUserDocument,
          },
        }}
        resource={Resources.relationsPermissionToUser}
        filter={{ permissionId_equals: permission?.id }}
      >
        <Datagrid
          bulkActionButtons={
            <BulkDeleteButton
              mutationOptions={{
                meta: { mutation: DeleteRelationsPermissionToUserDocument },
              }}
            />
          }
        >
          <TextField source="user.email" sortable={false} />
          <TextField source="granter.email" sortable={false} />
          <BooleanField source="isAllowed" sortable={false} />
          <DateField source="grantedAt" />
          <DeleteButton
            mutationOptions={{
              meta: { mutation: DeleteRelationPermissionToUserDocument },
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

interface IPermissionToRoleProps {}
const PermissionToRole: React.FC<IPermissionToRoleProps> = ({}) => {
  const permission = useRecordContext() as PermissionQuery['permission'];
  const locationObject = useLocation();
  const [roleNameInput, setRoleNameInput] = useState('');
  const { user } = useUser();
  const refresh = useRefresh();

  const { data: relationsPermissionToRole } = useGetList(
    Resources.relationsPermissionToRole,
    {
      meta: {
        query: RelationsPermissionToRoleDocument,
      },
      filter: {
        permissionId_equals: permission?.id,
      },
    },
  );

  const { data: roles } = useGetList(Resources.roles, {
    meta: { query: RolesDocument },
    filter: {
      name_contains: roleNameInput,
    },
  });

  const [
    createRelationPermissionToRoleMutation,
    createRelationPermissionToRoleMutationResult,
  ] = useCreateRelationPermissionToRoleMutation();
  const options = useMemo(() => {
    return (
      roles
        ?.filter((role) => {
          return !relationsPermissionToRole?.some(
            (relation) => relation?.role.name === role.name,
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
