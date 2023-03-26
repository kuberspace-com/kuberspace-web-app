import React from 'react';
import './homepage.scss';

function Home() {
  return (
    <div className="homepage">
      <h2 className="page-title">Periodic Table</h2>
      <div className="periodic-table-desktop" />
      <div className="periodic-table-mobile" />
    </div>
  );
}

export default Home;
