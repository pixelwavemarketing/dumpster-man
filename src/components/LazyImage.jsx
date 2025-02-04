import { useState, useEffect } from 'react'

function LazyImage({ src, alt, ...props }) {
  const [imageSrc, setImageSrc] = useState(null)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setImageSrc(src)
    }
  }, [src])

  return (
    <img 
      src={imageSrc || 'placeholder.jpg'} 
      alt={alt}
      loading="lazy"
      decoding="async"
      {...props}
    />
  )
}

export default LazyImage 