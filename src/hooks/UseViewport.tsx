/* eslint-disable no-undef */
import React from 'react';

const USE_VIEWPORT = ()=> {
  const [VIEWPORT_WIDTH, SET_WIDTH] = React.useState(window.innerWidth);
  React.useEffect(()=> {
    const HANDLE_WINDOW_RESIZE = ()=> SET_WIDTH(window.innerWidth);
    window.addEventListener('resize', HANDLE_WINDOW_RESIZE);
    return ()=> window.removeEventListener('resize', HANDLE_WINDOW_RESIZE);
  }, [SET_WIDTH]);
  return { VIEWPORT_WIDTH };
};
export default USE_VIEWPORT;
