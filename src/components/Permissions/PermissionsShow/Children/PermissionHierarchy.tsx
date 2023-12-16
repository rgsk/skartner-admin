import {
  PermissionQuery,
  usePermissionChildHierarchyQuery,
  usePermissionParentHierarchyQuery,
} from 'gql/graphql';
import { useRecordContext } from 'react-admin';

interface IPermissionHierarchyProps {}
const PermissionHierarchy: React.FC<IPermissionHierarchyProps> = ({}) => {
  const permission = useRecordContext() as PermissionQuery['permission'];

  const { data: { permissionParentHierarchy } = {} } =
    usePermissionParentHierarchyQuery({
      variables: { where: { id: { equals: permission?.id } } },
      skip: !permission,
    });
  const { data: { permissionChildHierarchy } = {} } =
    usePermissionChildHierarchyQuery({
      variables: { where: { id: { equals: permission?.id } } },
      skip: !permission,
    });
  if (permissionParentHierarchy && permissionChildHierarchy && permission) {
    return (
      <div>
        <p>permissionParentHierarchy</p>
        <RenderJsonString
          objStr={permissionParentHierarchy}
          permissionName={permission.name}
        />
        <p>permissionChildHierarchy</p>
        <RenderJsonString
          objStr={permissionChildHierarchy}
          permissionName={permission.name}
        />
      </div>
    );
  }
  return null;
};
export default PermissionHierarchy;

interface IRenderJsonStringProps {
  objStr: string;
  permissionName: string;
}
const RenderJsonString: React.FC<IRenderJsonStringProps> = ({
  objStr,
  permissionName,
}) => {
  return (
    <pre>
      {JSON.stringify({ [permissionName]: JSON.parse(objStr) }, null, 4)}
    </pre>
  );
};
