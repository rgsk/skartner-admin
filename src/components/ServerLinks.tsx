import { Box } from "@mui/material";
import useToken from "hooks/useToken";
import environmentVars from "lib/environmentVars";

interface IServerLinksProps {}
const ServerLinks: React.FC<IServerLinksProps> = ({}) => {
  const { token } = useToken();

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <a
        href={`${environmentVars.SKARTNER_SERVER}/graphql?token=${token}`}
        target="_blank"
      >
        Graphql Playground
      </a>
      <a
        href={`${environmentVars.SKARTNER_SERVER}/queues?token=${token}`}
        target="_blank"
      >
        Bull Monitor
      </a>
    </Box>
  );
};
export default ServerLinks;
