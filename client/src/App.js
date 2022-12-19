import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Route, Routes } from 'react-router-dom';

import GlobalStyles from './components/styles/Globalstyles';
import HomePage from './pages/Homepage';

// import 'bootstrap/dist/css/bootstrap.min.css';
import SinglePost from './pages/SinglePost';
import NotFound from './pages/NotFound';


const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<SinglePost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ApolloProvider>
    </>
  );
}

export default App;
