import { useLayoutEffect, useState } from "react";

/**
 * Get the real browser window size, dynamically updated when the window is resized
 */
export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  /* istanbul ignore next */
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};
