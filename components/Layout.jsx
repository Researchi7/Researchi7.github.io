import React, { useState } from 'react';
import Titlebar from '../components/Titlebar';
import Sidebar from '../components/Sidebar';
import Explorer from '../components/Explorer';
import Bottombar from '../components/Bottombar';
import Tabsbar from './Tabsbar';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: '100%' }}>
          <Tabsbar setLoading={setLoading} />
          {loading && <div className={styles.loader}></div>}
          <main className={styles.content}>{children}</main>
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default Layout;
