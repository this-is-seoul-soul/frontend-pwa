import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SignIn } from 'pages/Auth/SignIn/index.tsx';
import { CheckNickname } from 'pages/Auth/CheckNickname/index.tsx';
import { Landing } from 'pages/FestiTest/Landing/index.tsx';
import { Prosecutor } from 'pages/FestiTest/Prosecutor/index.tsx';
import { HomePage } from 'pages/Home/index.tsx';
import { MapPage } from 'pages/Map/index.tsx';
import { HeartPage } from 'pages/Heart/index.tsx';
import { MyPage } from 'pages/My/index.tsx';
import { FestDetailPage } from "pages/Home/FestDetail/index.tsx";
import { ReviewCreatePage } from "pages/Home/FestDetail/ReviewCreate/index.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
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
        path: '/festdetail',
        element: <FestDetailPage />,
      },
      {
        path: '/festdetail/review',
        element: <ReviewCreatePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
