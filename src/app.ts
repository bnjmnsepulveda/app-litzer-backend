import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from "type-graphql";
import { Container } from "typedi";
import { AlbumResolver } from './graphql/resolvers/AlbumResolver';
import Express from "express";
import { PlayerResolver } from './graphql/resolvers/PlayerResolver';
import { createServer } from 'http';
import initGlobalContainer from './ioc-container';

const PORT = process.env.PORT || 5000;

async function bootstrap() {
    // init global containr with in memory data
    initGlobalContainer()
    //  Building schema here
    const schema = await buildSchema({
        resolvers: [
            AlbumResolver,
            PlayerResolver
        ],
        container: Container
    });
    // Create the GraphQL server
    const apolloServer = new ApolloServer({
        schema,
        playground: true
    });
    // Create Http Server
    const app = Express();
    const httpServer = createServer(app)
    apolloServer.applyMiddleware({ app });
    apolloServer.installSubscriptionHandlers(httpServer)

    httpServer.listen({ port: PORT }, () => console.log(`🚀 Server ready and listening at ==> http://localhost:${PORT}${apolloServer.graphqlPath}`))

}


bootstrap();