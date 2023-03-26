import React, { useEffect } from 'react';
import $ from 'jquery';
import './homepage.scss';

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
      <h2 className="page-title">Periodic Table</h2>
      <div className="periodic-table-desktop" />
      <div className="periodic-table-mobile" />
    </div>
  );
}

export default Home;
