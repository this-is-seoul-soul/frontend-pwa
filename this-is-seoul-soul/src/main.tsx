import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage.tsx';
import { MapPage } from './pages/MapPage.tsx';
import { HeartPage } from './pages/HeartPage.tsx';
import { MyPage } from './pages/MyPage.tsx';
import { SignIn } from 'pages/Auth/SignIn/index.tsx';
import { CheckNickname } from 'pages/Auth/CheckNickname/index.tsx';
import { Landing } from 'pages/FestiTest/Landing/index.tsx';
import { Prosecutor } from 'pages/FestiTest/Prosecutor/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/map',
        element: <MapPage />,
      },
      {
        path: '/heart',
        element: <HeartPage />,
      },
      {
        path: '/my',
        element: <MyPage />,
      },
      {
        path: '/auth/signin',
        element: <SignIn />,
      },
      {
        path: '/auth/checknickname',
        element: <CheckNickname />,
      },
      {
        path: '/festiTest/landing',
        element: <Landing />,
      },
      {
        path: '/festiTest/prosecutor',
        element: <Prosecutor />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
