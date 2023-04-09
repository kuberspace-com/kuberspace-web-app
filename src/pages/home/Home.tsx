import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import LeftDrawer from './LeftDrawer';
import './homepage.scss';

function Home(props) {
  return (
    <div className="homepage">
      <LeftDrawer>
        <Outlet />
      </LeftDrawer>
    </div>
  );
}

export default Home;
