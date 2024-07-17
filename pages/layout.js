import React from 'react';
import Link from 'next/link';
import styles from '../styles/layout.module.css';
import Navbar from '/components/navbar.js';
import Footer from '/components/footer.js';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
}

export default Layout;