import React from 'react'
import { ApolloProvider } from '@apollo/client'
import client from './src/apollo-client'
import 'focus-visible'

const wrapRootElement = ({ element }) => {
  return <ApolloProvider client={client}>{element}</ApolloProvider>
}

export { wrapRootElement }
