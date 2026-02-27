import { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AboutUs from './pages/AboutUs';
import PageNotFound from './pages/PageNotFound';
import Order from './pages/Order';
import Menu from './pages/Menu';
import Product from './pages/Product';
import menuData from "./assets/data/menu.json";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      children: [
        { index: true, Component: LandingPage },
        { path: "about", Component: AboutUs },
        { path: "order", Component: Order },
        { path: "menu", Component: Menu },
        { 
          path: "menu/:itemSlug", 
          loader: async ({ params }) => {
            const menuItem = menuData.filter(item => item.slug === params.itemSlug)[0];
            return menuItem ?? null;
          },
          Component: Product 
        }
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
