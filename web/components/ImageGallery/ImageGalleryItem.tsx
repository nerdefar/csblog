import Image from 'next/image'
import { useRef, useEffect } from 'react';

interface IImageGalleryItem{
  src: string;
  alt: string; 
  width: number;
  height: number;
  mouseMovePercentage: number;
}

function ImageGalleryItem({src, alt, width, height, mouseMovePercentage}:IImageGalleryItem) {
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect( () => {
    {imgRef?.current && 
      imgRef.current.animate({
            objectPosition: `${100 + Math.max(mouseMovePercentage, -100)}% center`
          }, { duration: 1200, fill: "forwards" });
    }},
    [mouseMovePercentage]);

  return(
    <div className="image-gallery-track__item">
        <Image ref={imgRef} width={width} height={height} src={src} alt={alt} draggable={false} />
    </div>
  )
}

export default ImageGalleryItem