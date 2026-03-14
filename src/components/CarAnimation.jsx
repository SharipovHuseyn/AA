import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const CarAnimation = ({ src, alt }) => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div ref={ref} className="scene">
      <img 
        src={src} 
        alt={alt} 
        className={`car ${isVisible ? 'animate' : ''}`}
      />
    </div>
  );
};
