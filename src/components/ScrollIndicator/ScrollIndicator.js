import React, { useState, useEffect } from "react";
import ArrowDown from "../../icons/ArrowDown";

const ScrollIndicator = ({ appRef }) => {
  const [isBottomReached, setBottomReached] = useState(false);

  const isBottom = (el) => {
    if (el && el.current) {
      return el.current.getBoundingClientRect().bottom - 1 < window.innerHeight;
    }
  };

  useEffect(() => {
    const trackScrolling = () => {
      if (isBottom(appRef)) {
        setBottomReached(true);
      } else {
        setBottomReached(false);
      }
    };
    document.addEventListener("scroll", trackScrolling);
    return () => {
      document.removeEventListener("scroll", trackScrolling);
    };
  }, [appRef]);
  
  if (!isBottomReached) {
    return <ArrowDown id="mobile-arrow-down" />;
  } else return null;
};

export default ScrollIndicator;
