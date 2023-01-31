import { Route, Routes } from 'react-router-dom';

import GlobalStyles from './components/styles/Globalstyles';
import HomePage from './pages/Homepage';


import SinglePost from './pages/SinglePost';
import NotFound from './pages/NotFound';


function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

