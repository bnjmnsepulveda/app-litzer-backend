import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from "type-graphql";
import { AlbumResolver } from './graphql/resolvers/AlbumResolver';
import Express from "express";
import { PlayerResolver } from './graphql/resolvers/PlayerResolver';

const PORT = process.env.PORT || 5000;

async function bootstrap() {
    // ... Building schema here
    const schema = await buildSchema({
        resolvers: [
            AlbumResolver,
            PlayerResolver
        ]
    });
    // Create the GraphQL server
    const server = new ApolloServer({
        schema,
        playground: true,
    });

    const app = Express();
    server.applyMiddleware({ app });
    app.listen({ port: PORT }, () => console.log(`🚀 Server ready and listening at ==> http://localhost:${PORT}${server.graphqlPath}`))

}


bootstrap();