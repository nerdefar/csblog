import Image from 'next/image'

interface IImageGalleryItem{
  src: string;
  alt: string;
  width: number;
  height: number;
}

function ImageGalleryItem({src, alt, width, height}:IImageGalleryItem) {
  return(
    <div className="image-gallery-track__item">
        <Image width={width} height={height} src={src} alt={alt} draggable={false} />
    </div>
  )
}

export default ImageGalleryItem