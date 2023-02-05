import React from 'react';
import Departments from './Departments';
import './homepage.scss';

function Home() {
  return (
    <div className="homepage">
      <Departments />
      <div
        className="background-image"
        style={{
          backgroundImage: 'url(/images/homePageBackground.jpg)',
          backgroundAttachment: 'fixed',
          position: 'absolute',
          height: '100vh',
          width: '100vw',
          top: '0px',
          backgroundSize: 'cover',
          zIndex: '-1'
        }}
      />
      <div
        className="background-image"
        style={{
          backgroundImage: 'url(/images/homePageBackground.jpg)',
          backgroundAttachment: 'fixed',
          position: 'absolute',
          height: '100vh',
          width: '100vw',
          top: '100vh',
          backgroundSize: 'cover',
          zIndex: '-1'
        }}
      />
    </div>
  );
}

export default Home;
