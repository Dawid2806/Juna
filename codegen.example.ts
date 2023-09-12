
import type { CodegenConfig } from '@graphql-codegen/cli';


const config: CodegenConfig = {
  overwrite: true,
  schema: [{
    "localhost:3000": {
      headers:{
        "x-hasura-admin-secret" :  process.env.NEXT_PUBLIC_NHOST_ADMIN_SECRET!,
        'x-hasura-role': 'admin',
        'content-type': 'application/json'
      }
    }
  }],
   documents: "src/graphql/*.graphql",
  generates: {
    "src/gql/graphql.tsx": {
      plugins: [ 'typescript-operations', 'typescript-react-apollo','typescript-nhost'],
      config: {

      },
    }
    
  }
};

export default config;
