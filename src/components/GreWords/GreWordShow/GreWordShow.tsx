import { Box, Typography } from "@mui/material";
import { GreWordShowDocument, GreWordShowQuery } from "gql/graphql";
import {
  Show,
  SimpleShowLayout,
  TextField,
  useRecordContext,
} from "react-admin";

type GreRecord = Exclude<GreWordShowQuery["greWord"], undefined | null>;

const getSource = (v: keyof GreRecord) => {
  return v;
};

interface IGreWordShowProps {}
const GreWordShow: React.FC<IGreWordShowProps> = ({}) => {
  return (
    <Show queryOptions={{ meta: { query: GreWordShowDocument } }}>
      <SimpleShowLayout>
        <TextField source={getSource("id")} />
        <TextField source={getSource("spelling")} />
        <RenderPrompts />
      </SimpleShowLayout>
    </Show>
  );
};

export default GreWordShow;

interface IRenderPromptsProps {}
const RenderPrompts: React.FC<IRenderPromptsProps> = ({}) => {
  const greWord = useRecordContext<GreRecord>();

  return (
    <Box>
      <Typography>Gpt Prompts</Typography>
      {greWord.gptPrompts.map((gptPrompt) => {
        return (
          <Box key={gptPrompt.id} sx={{ mt: 2 }}>
            <Box>
              <Typography>Input: </Typography>
              <Typography>{gptPrompt.input}</Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography>Response: </Typography>
              <Typography
                sx={{
                  whiteSpace: "pre",
                }}
              >
                {gptPrompt.editedResponse}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
