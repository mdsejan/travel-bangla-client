import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the window to the top on route change
  }, [pathname]); // Re-runs the effect when the pathname changes

  return null;
};

export default ScrollToTopOnRouteChange;
