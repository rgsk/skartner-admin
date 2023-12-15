import { DeleteButton, Show, TabbedShowLayout, TextField } from 'react-admin';

import { Box, Typography } from '@mui/material';
import Resources from 'Resources';

import CustomAutocomplete from 'components/Custom/CustomAutocomplete';
import ShowEditDeleteButtonsCurrentPathRedirect from 'components/Custom/ShowEditDeleteButtonsCurrentPathRedirect';
import {
  RelationsRoleToUserQuery,
  RoleQuery,
  UsersDocument,
  UsersQuery,
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
      </TabbedShowLayout>
    </Show>
  );
};

export default RolesShow;

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
      meta: { query: UsersDocument },
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
