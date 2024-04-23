import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from "./pages/HomePage.tsx";
import { MapPage } from "./pages/MapPage.tsx";
import { HeartPage } from "./pages/HeartPage.tsx";
import { MyPage } from "./pages/MyPage.tsx";

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
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
