import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main.jsx';
import Home from './Components/Home/Home.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Blog from './Components/Blog/Blog.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import ChefDetail from './Components/Home/ChefDetail/ChefDetail.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import SignIn from './Components/UserReg/SignIn/SignIn.jsx';
import SignUp from './Components/UserReg/SignUp/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/signin',
        element: <SignIn/>
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/chefDetail/:id',
        element: <PrivateRoute><ChefDetail /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-ten-server-fatemaafrinritu.vercel.app/chefDetail/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
