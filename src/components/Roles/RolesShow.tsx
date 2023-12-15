import {
  BooleanField,
  DateField,
  DeleteButton,
  Show,
  TabbedShowLayout,
  TextField,
} from 'react-admin';

import { Box, Typography } from '@mui/material';
import Resources from 'Resources';

import CustomAutocomplete from 'components/Custom/CustomAutocomplete';
import ShowEditDeleteButtonsCurrentPathRedirect from 'components/Custom/ShowEditDeleteButtonsCurrentPathRedirect';
import {
  PermissionsQuery,
  RelationsPermissionToRoleQuery,
  RelationsRoleToUserQuery,
  RoleQuery,
  UsersQuery,
  useCreateRelationPermissionToRoleMutation,
  useCreateRelationRoleToUserMutation,
} from 'gql/graphql';
import useUser from 'hooks/useUser';
import { useMemo, useState } from 'react';
import {
  Datagrid,
  ReferenceManyField,
  useGetList,
  useRecordContext,
  useRefresh,
} from 'react-admin';

interface IRolesShowProps {}
const RolesShow: React.FC<IRolesShowProps> = ({}) => {
  return (
    <Show>
      <TabbedShowLayout>
        <TabbedShowLayout.Tab label="summary">
          <TextField source={'id'} />
          <TextField source={'name'} />
          <DeleteButton />
        </TabbedShowLayout.Tab>
        <TabbedShowLayout.Tab label="users" path="users">
          <RoleToUser />
        </TabbedShowLayout.Tab>
        <TabbedShowLayout.Tab label="permissions" path="permissions">
          <PermissionToRole />
        </TabbedShowLayout.Tab>
      </TabbedShowLayout>
    </Show>
  );
};

export default RolesShow;

interface IPermissionToRoleProps {}
const PermissionToRole: React.FC<IPermissionToRoleProps> = ({}) => {
  const role = useRecordContext() as RoleQuery['role'];
  const [permissionNameInput, setPermissionNameInput] = useState('');
  const { user } = useUser();
  const refresh = useRefresh();
  const { data: relationsPermissionToRole } = useGetList<
    RelationsPermissionToRoleQuery['relationsPermissionToRole'][number]
  >(Resources.relationsPermissionToRole, {
    filter: {
      roleId_equals: role?.id,
    },
  });

  const { data: permissions } = useGetList<
    PermissionsQuery['permissions'][number]
  >(Resources.permissions, {
    filter: {
      name: {
        contains: permissionNameInput,
      },
    },
  });

  const [
    createreateRelationPermissionToRoleMutation,
    createreateRelationPermissionToRoleMutationResult,
  ] = useCreateRelationPermissionToRoleMutation();

  const options = useMemo(() => {
    return (
      permissions
        ?.filter((p) => {
          return !relationsPermissionToRole?.some(
            (r) => r.permissionId === p.id,
          );
        })
        ?.map((p) => p.name) ?? []
    );
  }, [permissions, relationsPermissionToRole]);

  const onSelect = (permissionName: string) => {
    if (role && user) {
      const selectedPermission = permissions?.find(
        (p) => p.name === permissionName,
      );
      if (selectedPermission) {
        createreateRelationPermissionToRoleMutation({
          variables: {
            roleId: role.id,
            permissionId: selectedPermission.id,
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
        label="permission name"
        options={options}
        onChange={(value) => {
          setPermissionNameInput(value);
        }}
        onSelect={(option) => {
          onSelect(option);
        }}
        loading={createreateRelationPermissionToRoleMutationResult.loading}
      ></CustomAutocomplete>

      <ReferenceManyField
        reference={Resources.relationsPermissionToRole}
        target="roleId"
      >
        <Datagrid>
          <TextField source="permission.name" sortable={false} />
          <TextField source="granter.email" sortable={false} />
          <BooleanField source="isAllowed" sortable={false} />
          <DateField source="grantedAt" />
          <ShowEditDeleteButtonsCurrentPathRedirect />
        </Datagrid>
      </ReferenceManyField>
    </Box>
  );
};

interface IRoleToUserProps {}
const RoleToUser: React.FC<IRoleToUserProps> = ({}) => {
  const role = useRecordContext() as RoleQuery['role'];
  const { user } = useUser();
  const refresh = useRefresh();

  const [userEmailSearchInput, setUserEmailSearchInput] = useState('');

  const { data: relationsRoleToUser } = useGetList<
    RelationsRoleToUserQuery['relationsRoleToUser'][number]
  >(Resources.relationsRoleToUser, {
    filter: {
      roleId_equals: role?.id,
    },
  });

  const { data: users } = useGetList<UsersQuery['users'][number]>(
    Resources.users,
    {
      filter: {
        email_contains: userEmailSearchInput,
      },
    },
  );

  const [
    createRelationRoleToUserMutation,
    createRelationRoleToUserMutationResult,
  ] = useCreateRelationRoleToUserMutation();

  const onSelect = (email: string) => {
    if (role && user) {
      const selectedUser = users?.find((u) => u.email === email);
      if (selectedUser) {
        createRelationRoleToUserMutation({
          variables: {
            userId: selectedUser.id,
            assignerId: user.id,
            roleId: role.id,
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
          return !relationsRoleToUser?.some((r) => r.userId === u.id);
        })
        ?.map((u) => u.email) ?? []
    );
  }, [relationsRoleToUser, users]);
  return (
    <Box>
      <Typography>Relations Role To User</Typography>
      <CustomAutocomplete
        label="email"
        options={options}
        onChange={(value) => {
          setUserEmailSearchInput(value);
        }}
        onSelect={(option) => {
          onSelect(option);
        }}
        loading={createRelationRoleToUserMutationResult.loading}
      ></CustomAutocomplete>

      <ReferenceManyField
        reference={Resources.relationsRoleToUser}
        target="roleId"
      >
        <Datagrid>
          <TextField source="user.email" sortable={false} />
          <TextField source="assigner.email" sortable={false} />
          <TextField source="assignedAt" sortable={false} />
          <ShowEditDeleteButtonsCurrentPathRedirect />
        </Datagrid>
      </ReferenceManyField>
    </Box>
  );
};
