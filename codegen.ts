import type { CodegenConfig } from '@graphql-codegen/cli';
import { config as loadEnv } from 'dotenv';
loadEnv();

// above is required if variable is defined in local .env
// docker env is provisioned without this package too

// console.log(
//   'process.env.VITE_SKARTNER_SERVER',
//   process.env.VITE_SKARTNER_SERVER,
// );

const config: CodegenConfig = {
  overwrite: true,
  schema: `${process.env.VITE_SKARTNER_SERVER}/graphql`,
  documents: 'src/**/*.{graphql,gql}',
  generates: {
    'src/gql/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
};

export default config;
