import React from 'react';

import {
  createBrowserRouter,
} from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../components/Pages/Home/Home';
import Menu from '../components/Pages/Menu/Menu/Menu';
import Order from '../components/Pages/Order/Order/Order';
import Login from '../components/Pages/Login/Login';
import Register from '../components/Pages/Register/Register';
import Contact from '../components/Pages/Shared/Contact/Contact';
import PrivateRoutes from './PrivateRoutes';
import Dashboard from '../Layout/Dashboard';
import Cart from '../components/Pages/Dashboard/Cart/Cart';
import AllUsers from '../components/Pages/Dashboard/AllUsers/AllUsers';
import AddItems from '../components/Pages/Dashboard/AddItems/AddItems';
import AdminRout from './AdminRout';
import ManageItems from '../components/Pages/Dashboard/ManageItems/ManageItems';
import UpdateItem from '../components/Pages/Dashboard/UpdateItem/UpdateItem';
import Payment from '../components/Pages/Dashboard/Payment/Payment';
import PaymentHistory from '../components/Pages/Dashboard/PaymentHistory/PaymentHistory';
import UserHome from '../components/Pages/Dashboard/UserHome/UserHome';
import AdminHome from '../components/Pages/Dashboard/AdminHome/AdminHome';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/order/:category',
        element: <Order />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/contact',
        element: <PrivateRoutes><Contact /></PrivateRoutes>
      },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
    children: [
      {
        path: 'userHome',
        element: <UserHome />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'reservation',
        element: <Payment />
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory />
      },

      // Admin Routes
      {
        path: 'adminHome',
        element: <AdminRout><AdminHome /></AdminRout>
      },
      {
        path: 'users',
        element: <AdminRout><AllUsers /></AdminRout>
      },
      {
        path: 'manageItems',
        element: <AdminRout><ManageItems /></AdminRout>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRout><UpdateItem /></AdminRout>,
        loader: ({params}) => fetch(`https://bistro-boss-server-weld-zeta.vercel.app/menu/${params.id}`)
      },
      {
        path: 'addItems',
        element: <AdminRout><AddItems /> </AdminRout>
      },
    ]
  }
]);

