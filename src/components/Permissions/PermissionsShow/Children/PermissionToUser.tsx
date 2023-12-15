import { Box, Typography } from '@mui/material';
import Resources from 'Resources';

import CustomAutocomplete from 'components/Custom/CustomAutocomplete';
import {
  PermissionQuery,
  RelationsPermissionToUserDocument,
  RelationsPermissionToUserQuery,
  UsersDocument,
  UsersQuery,
  useCreateRelationPermissionToUserMutation,
} from 'gql/graphql';
import useUser from 'hooks/useUser';
import { useMemo, useState } from 'react';
import {
  BooleanField,
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  ReferenceManyField,
  ShowButton,
  TextField,
  useGetList,
  useRecordContext,
  useRefresh,
} from 'react-admin';

interface IPermissionToUserProps {}
const PermissionToUser: React.FC<IPermissionToUserProps> = ({}) => {
  const permission = useRecordContext() as PermissionQuery['permission'];
  const { user } = useUser();
  const refresh = useRefresh();

  const [userEmailSearchInput, setUserEmailSearchInput] = useState('');

  const { data: relationsPermissionToUser } = useGetList<
    RelationsPermissionToUserQuery['relationsPermissionToUser'][number]
  >(Resources.relationsPermissionToUser, {
    meta: {
      query: RelationsPermissionToUserDocument,
    },
    filter: {
      permissionId_equals: permission?.id,
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
          return !relationsPermissionToUser?.some((r) => r.userId === u.id);
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

      <ReferenceManyField
        reference={Resources.relationsPermissionToUser}
        target="permissionId"
      >
        <Datagrid>
          <TextField source="id" sortable={false} />
          <TextField source="user.email" sortable={false} />
          <TextField source="granter.email" sortable={false} />
          <BooleanField source="isAllowed" sortable={false} />
          <DateField source="grantedAt" />
          <ShowButton />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      </ReferenceManyField>
    </Box>
  );
};
export default PermissionToUser;
