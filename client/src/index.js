import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './pages/Homepage';
import NotFound from './pages/NotFound';


import SinglePost from './pages/SinglePost';
import Registration from './pages/Registration';
import { Login } from './pages/Login.js';
import CreatePost from './pages/CreatePost';
import { BlogPosts } from './components/BlogPosts';
import { BlogPost } from './components/BlogPost';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'create-post',
        element: <CreatePost />,
      },
      // {
      //   path: 'single-post',
      //   element: <SinglePost />,
      // },
      {
        path: '/',
        element: <BlogPosts />,
      },
      {
        path: 'posts/:id',
        element: <SinglePost />,
      },
      {
        path: 'registration',
        element: <Registration />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}  >
    <RouterProvider router={router} />
  </Provider>
);
