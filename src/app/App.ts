import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import config from '../config';
import logger from '../logger';

import { mergedGQLSchema } from "../schema";
import { resolvers } from "../resolver";

const port = config.port

const server = new ApolloServer({
    typeDefs : mergedGQLSchema,
    resolvers : resolvers,
    introspection : true
  });


class API {
  static async init() {
    startStandaloneServer(server, { listen: { port} });
    logger.info(`Server is listening on port ${port}`);
  }
}

export default API;
