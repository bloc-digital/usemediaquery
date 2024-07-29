import { renderHook } from '@testing-library/react';

import useMediaQuery from './useMediaQuery';

describe('Hook should be able to return a bool', () => {
  it('by default false will be returned', () => {
    const { result } = renderHook(() => useMediaQuery('screen'));

    expect(result.current[0]).toBe(false);
  });

  it('default can be changed to true', () => {
    const { result } = renderHook(() => useMediaQuery('screen', true));

    expect(result.current[0]).toBe(true);
  });
});
