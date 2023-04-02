/* eslint-disable no-undef */
import React from 'react';

const USE_VIEWPORT = ()=> {
  const [VIEWPORT_WIDTH, SET_WIDTH] = React.useState(window.innerWidth);
  React.useEffect(()=> {
    var handleWindowResize = ()=> SET_WIDTH(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return ()=> window.removeEventListener('resize', handleWindowResize);
  }, []);
  return { VIEWPORT_WIDTH };
};
export default USE_VIEWPORT;
