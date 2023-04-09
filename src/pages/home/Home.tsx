import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftDrawer from './LeftDrawer';
import './homepage.scss';

function Home() {
  return (
    <div className="homepage">
      <LeftDrawer>
        <Outlet />
      </LeftDrawer>
    </div>
  );
}

export default Home;
