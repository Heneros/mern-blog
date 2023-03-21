import { Route, Routes } from 'react-router-dom';

import GlobalStyles from './components/styles/Globalstyles';
import HomePage from './pages/Homepage';


import SinglePost from './pages/SinglePost';
import Registration from './pages/Registration';
import { Login } from './pages/Login.js';
import NotFound from './pages/NotFound';
import { createContext } from 'react';
import CreatePost from './pages/CreatePost';


export const ThemeContext = createContext('light');

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeContext.Provider value='dark' >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/posts/:id" element={<SinglePost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

