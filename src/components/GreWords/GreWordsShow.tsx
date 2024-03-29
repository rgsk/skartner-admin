import { Box, Typography } from '@mui/material';
import { GreWordQuery } from 'gql/graphql';
import {
  Show,
  SimpleShowLayout,
  TextField,
  useRecordContext,
} from 'react-admin';

type GreRecord = Exclude<GreWordQuery['greWord'], undefined | null>;

interface IGreWordShowProps {}
const GreWordsShow: React.FC<IGreWordShowProps> = ({}) => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source={'id'} />
        <TextField source={'cacheWord.text'} />
        <RenderPrompts />
      </SimpleShowLayout>
    </Show>
  );
};

export default GreWordsShow;

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
              <Typography>
                {gptPrompt.cacheResponse.cachePrompt.text}
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography>Edited Response: </Typography>
              <Typography
                sx={{
                  whiteSpace: 'pre',
                }}
              >
                {gptPrompt.editedResponse}
              </Typography>
              <Typography>Response: </Typography>
              <Typography
                sx={{
                  whiteSpace: 'pre',
                }}
              >
                {gptPrompt.cacheResponse.text}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
