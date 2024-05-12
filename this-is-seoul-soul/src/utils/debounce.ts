/* eslint-disable @typescript-eslint/no-explicit-any */
let timeoutId: any;

export function debounce(fn: any, delay: number) {
  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
