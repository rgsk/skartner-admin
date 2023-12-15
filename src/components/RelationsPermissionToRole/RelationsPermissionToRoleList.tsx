import Resources from 'Resources';

import {
  BooleanField,
  Datagrid,
  DateField,
  EditButton,
  FilterPayload,
  List,
  ShowButton,
  TextField,
} from 'react-admin';

interface IRelationsPermissionToRoleListProps {
  filter?: FilterPayload;
}
const RelationsPermissionToRoleList: React.FC<
  IRelationsPermissionToRoleListProps
> = ({ filter }) => {
  return (
    <List filter={filter} resource={Resources.relationsPermissionToRole}>
      <Datagrid>
        <TextField source="permission.name" sortable={false} />
        <TextField source="role.name" sortable={false} />
        <TextField source="granter.email" sortable={false} />
        <BooleanField source="isAllowed" sortable={false} />
        <DateField source="grantedAt" />
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default RelationsPermissionToRoleList;
