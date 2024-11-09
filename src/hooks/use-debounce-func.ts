import * as React from 'react';

type TFunc = (...args: any[]) => void;

/**
 * @todo thực hiện debounce 1 function
 * @param func 1 hàm cần debounce
 * @param delay thời gian cần debounce (mặc định là 500 ms)
 * @returns debounce function
 */
function useDebounceFunction<T extends TFunc>(func: TFunc, delay = 500) {
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const debouncedFn = React.useCallback(
    (...args: Parameters<T>) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        func(...args);
      }, delay);
    },
    [func, delay]
  );

  React.useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return debouncedFn;
}

export default useDebounceFunction;
