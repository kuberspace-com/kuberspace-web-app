import { useEffect, useState } from 'react';

/**
 * Custom hook that tells you whether a given media query is active.
 *
 * Inspired by https://usehooks.com/useMedia/
 * https://gist.github.com/gragland/ed8cac563f5df71d78f4a1fefa8c5633
 */
export default function useMediaQuery(query) {
  const [MATCHES, SET_MATCHES] = useState(false);
  useEffect(
    ()=> {
      const MEDIA_QUERY = window.matchMedia(query);
      SET_MATCHES(MEDIA_QUERY.matches);
      const HANDLER = (event)=> SET_MATCHES(event.matches);
      MEDIA_QUERY.addEventListener('change', HANDLER);
      return ()=> MEDIA_QUERY.removeEventListener('change', HANDLER);
    },
    [] // Empty array ensures effect is only run on mount and unmount
  );
  return MATCHES;
}
