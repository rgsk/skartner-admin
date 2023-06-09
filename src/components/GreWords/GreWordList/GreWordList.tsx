import { GreWordListDocument } from "gql/graphql";
import { Datagrid, List, TextField } from "react-admin";

interface IGreWordListProps {}
const GreWordList: React.FC<IGreWordListProps> = ({}) => {
  return (
    <List
      queryOptions={{
        meta: {
          query: GreWordListDocument,
        },
      }}
    >
      <Datagrid rowClick="show">
        <TextField source="id"></TextField>
        <TextField source="spelling"></TextField>
      </Datagrid>
    </List>
  );
};
export default GreWordList;
