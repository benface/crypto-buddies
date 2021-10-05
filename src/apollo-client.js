import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import fetch from 'isomorphic-fetch'

const link = createHttpLink({
  fetch,
  uri: 'https://eu1.prisma.sh/nevena-djaja/mocks/dev',
})

const cache = new InMemoryCache()

const client = new ApolloClient({
  link,
  cache,
})

export default client
