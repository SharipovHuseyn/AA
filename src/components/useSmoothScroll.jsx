import { useRef, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

export const useSmoothScroll = (hash, delay = 100) => {
  const targetRef = useRef(null);
  const location = useLocation();

  const scrollToTarget = useCallback(() => {
    if (targetRef.current) {
      const element = targetRef.current;
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
      
      window.scrollTo({
        top: middle,
        behavior: "smooth"
      });
    }
  }, []);

  useEffect(() => {
    if (window.location.hash === hash) {
      setTimeout(scrollToTarget, delay);
    }
  }, [hash, delay, scrollToTarget]);

  useEffect(() => {
    if (location.hash === hash) {
      setTimeout(scrollToTarget, delay);
    }
  }, [location, hash, delay, scrollToTarget]);

  return targetRef;
};
