import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

type Props = {}

const MainLayout = (props: Props) => {
  return (
    <>
      <Header />
      <main id="content" className="pt-16 lg:pt-18">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;