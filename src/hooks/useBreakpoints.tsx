import useMediaQuery from './useMediaQuery';

/**
 * Get a set of boolean representing which breakpoint is active
 * and which breakpoints are inactive.
 *
 * Inspired by: https://github.com/contra/react-responsive/issues/162#issuecomment-592082035
 */
export default function useBreakpoints() {
  const BREAKPOINTS = {
    isXs: useMediaQuery('(max-width: 640px)'),
    isSm: useMediaQuery('(min-width: 641px) and (max-width: 768px)'),
    isMd: useMediaQuery('(min-width: 769px) and (max-width: 1024px)'),
    isLg: useMediaQuery('(min-width: 1025px)'),
    active: 'xs'
  };
  if (BREAKPOINTS.isXs) BREAKPOINTS.active = 'xs';
  if (BREAKPOINTS.isSm) BREAKPOINTS.active = 'sm';
  if (BREAKPOINTS.isMd) BREAKPOINTS.active = 'md';
  if (BREAKPOINTS.isLg) BREAKPOINTS.active = 'lg';
  return BREAKPOINTS;
}
