import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  priority = false,
  sizes = '100vw',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y1ZjVmNSIvPjwvc3ZnPg==',
  asImg = false // New prop to render as direct img element
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01
      }
    );

    const imgElement = document.querySelector(`[data-src="${src}"]`);
    if (imgElement) {
      observer.observe(imgElement);
    }

    return () => observer.disconnect();
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
  };

  // If asImg is true, render as direct img element for CSS compatibility
  if (asImg) {
    return (
      <img
        src={src}
        alt={alt}
        className={`optimized-image ${className} ${isLoaded ? 'loaded' : ''}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
        loading={priority ? 'eager' : 'lazy'}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        data-src={src}
      />
    );
  }

  return (
    <div 
      className={`optimized-image-container ${className}`}
      style={{ 
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Placeholder */}
      {!isLoaded && (
        <img
          src={placeholder}
          alt=""
          className="image-placeholder"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            backgroundColor: '#f5f5f5'
          }}
        />
      )}
      
      {/* Main Image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`optimized-image ${isLoaded ? 'loaded' : ''}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
          loading={priority ? 'eager' : 'lazy'}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          data-src={src}
        />
      )}
    </div>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  priority: PropTypes.bool,
  sizes: PropTypes.string,
  placeholder: PropTypes.string,
  asImg: PropTypes.bool
};

export default OptimizedImage; 