import { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AboutUs from './pages/AboutUs';
import PageNotFound from './pages/PageNotFound';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      children: [
        { index: true, Component: LandingPage },
        { path: "about", Component: AboutUs }
      ]
    },
    {
      path: "*",
      Component: PageNotFound
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
