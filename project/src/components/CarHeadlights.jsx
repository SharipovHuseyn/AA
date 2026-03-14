import React, { useState, useEffect } from "react";
import "../assets/style/headlights.css";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export const CarHeadlights = ({ src, alt = "car" }) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.15,
    rootMargin: "0px 0px -25% 0px",
  });

  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setPlay(true);
    }
  }, [isVisible]);

  return (
    <div className="headlights-container" ref={ref}>
      <img
        src={src}
        alt={alt}
        data-state={play ? "play" : "idle"}
        className="car"
      />

      <svg
        className="headlights-overlay"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="headlightGradient1" cx="35%" cy="35%">
            <stop offset="0%" stopColor="rgba(255, 0, 0, 0.95)" />
            <stop offset="35%" stopColor="rgba(255, 30, 30, 0.7)" />
            <stop offset="60%" stopColor="rgba(255, 100, 100, 0.4)" />
            <stop offset="80%" stopColor="rgba(255, 150, 150, 0.08)" />
            <stop offset="100%" stopColor="rgba(255, 0, 0, 0)" />
          </radialGradient>

          <radialGradient id="headlightGradient2" cx="65%" cy="35%">
            <stop offset="0%" stopColor="rgba(255, 0, 0, 0.95)" />
            <stop offset="35%" stopColor="rgba(255, 30, 30, 0.7)" />
            <stop offset="60%" stopColor="rgba(255, 100, 100, 0.4)" />
            <stop offset="80%" stopColor="rgba(255, 150, 150, 0.08)" />
            <stop offset="100%" stopColor="rgba(255, 0, 0, 0)" />
          </radialGradient>
        </defs>

       
      </svg>
    </div>
  );
};
