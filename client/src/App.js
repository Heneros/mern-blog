import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.css';


const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <HomePage />
      </ApolloProvider>
    </>
  );
}

export default App;
