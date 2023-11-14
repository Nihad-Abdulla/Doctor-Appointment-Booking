// Layout.jsx
import React from 'react';
import Header from '../components/Header/Header';  // Remove curly braces around Header
import Footer from '../components/Footer/Footer';
import Routers from '../routes/Routers';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
