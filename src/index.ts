import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Step 4: Define your data set
const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

// Step 3: Define your GraphQL schema
const typeDefs = `

type Book {
    title: String
    author: String
}

 type Query {
    books: [Book]
 }


`;

// Step 5: Define a resolver
const resolvers = {
  Query: {
    books: () => books,
  },
};

// Step 6: Create an instance of ApolloServer
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🎉 Server ready at: ${url}`);
