import '../styles/globals.scss'
import { ApolloProvider } from '@apollo/client/react'
import { client } from '../lib/api'

const MyApp = ({ Component, pageProps }) => (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )

export default MyApp
