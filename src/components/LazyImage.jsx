import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function LazyImage({ src, alt, ...props }) {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
    };
  }, [src]);

  return (
    <img 
      src={imageSrc || 'placeholder.jpg'} 
      alt={alt}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
}

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default LazyImage; 