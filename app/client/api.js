import ApolloClient, { createBatchingNetworkInterface } from 'apollo-client'

const batchingNetworkInterface = createBatchingNetworkInterface({
  uri: '/graphql',
  batchInterval: 10,
  opts: {
    credentials: 'same-origin'
  }
})

const apolloClient = new ApolloClient({
  networkInterface: batchingNetworkInterface,
  queryDeduplication: true
})

export default apolloClient
