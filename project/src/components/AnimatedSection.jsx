import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export const AnimatedSection = ({
  children,
  delay = 0,
  className = "",
  immediate = false,
}) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.15,
  });

  const isShown = immediate || isVisible;

  return (
    <div
      ref={ref}
      className={`
        ${isShown ? "scroll-fade-visible" : "scroll-fade-hidden"}
        ${isShown && delay ? `animation-delay-${delay}` : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
