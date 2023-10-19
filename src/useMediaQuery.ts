import { useState, useEffect } from 'react';

/**
 * React Hook to take a media query and update a state as that media query is updated.
 *
 * @param {string} initial initial media query to be passed in
 *
 * @example
 * const [matchesQuery, setQuery] = useMediaQuery('(max-width: 600px)');
 * useEffect(() => {
 *   if(matchesQuery) {
 *     console.log('Screen width is narrower than 600px');
 *   } else {
 *     console.log('Screen width is wider than 600px');
 *   }
 * }, [matchesQuery]);
 *
 * @returns {array} [match, setState]
 * - match: `Bool` — state updated when media query matches
 * - setState: `Function` — function to update query
 */
export default function useMediaQuery(
  initial: string,
  defaultState: boolean = false,
): [boolean, React.Dispatch<React.SetStateAction<string>>] {
  const [state, setState] = useState(initial);
  const [match, setMatch] = useState(defaultState);

  // set up media query with listener
  useEffect(() => {
    if (!state || !window?.matchMedia) {
      setMatch(defaultState);
      return;
    }

    const mediaQuery = window.matchMedia(state);
    const updateMatch = (e: MediaQueryListEvent) => setMatch(e.matches);
    setMatch(mediaQuery.matches);
    try {
      mediaQuery.addEventListener('change', updateMatch);
    } catch {
      mediaQuery.addListener(updateMatch);
    }

    return () => {
      try {
        mediaQuery.removeEventListener('change', updateMatch);
      } catch {
        mediaQuery.removeListener(updateMatch);
      }
    };
  }, [state]);

  return [match, setState];
}
