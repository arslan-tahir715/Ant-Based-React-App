import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = (baseUrl: string) => {
  const cache = new InMemoryCache({ typePolicies: {} });

  return new ApolloClient({
    uri: baseUrl ?? "/graphql",
    cache,
  });
};

export default createApolloClient;
