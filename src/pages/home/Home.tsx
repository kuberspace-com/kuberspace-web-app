import React, { useEffect } from 'react';
import $ from 'jquery';
import './homepage.scss';
import Departments from './Departments';

function Home() {
  useEffect(()=> {
    setTimeout(()=> {
      $('.homepage-background-image').each((index: number, el: HTMLDivElement)=> {
        const IMGURL: string = $(el).css('background-image');
        $(el).css({ 'background-image': IMGURL.replace('-small', '-large') });
      });
    }, 3000);
  }, []);
  // call background image desert-background
  return (
    <div className="homepage">
      <Departments />
      <div
        className="background-image homepage-background-image"
        style={{
          backgroundImage: 'url(/images/homePageBackground-small.webp)',
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
        className="background-image  homepage-background-image"
        style={{
          backgroundImage: 'url(/images/homePageBackground-small.webp)',
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
