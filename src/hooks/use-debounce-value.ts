import * as React from 'react';

/**
 * @todo debounce 1 giá trị
 * @param value giá trị cần debounce
 * @param delay thời gian cần debounce (mặc định là 300 ms)
 * @returns giá trị được debounce
 */
function useDebounceValue<T>(value: T, delay = 300) {
  const [debounceValue, setDebounceValue] = React.useState<T>(value);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debounceValue;
}

export default useDebounceValue;
