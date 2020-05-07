import React from 'react';

interface TempImage {
    sourceUrl: string,
    altText: string
}

interface IImageProps {
  image: TempImage,
  height?: number,
  width?: number,
  className?: string,
  onLoad?: any,
  node?: any,
}

export const Image = (props: IImageProps) => {
  const {
    width,
    height,
    image,
    className,
    onLoad,
    node,
  } = props;

  const {
    sourceUrl,
    altText,
  } = image;

  return (
    <img
      ref={node} itemProp="image"
      className={`c-image ${className && className || ''}`}
      src={`${sourceUrl}?&mode=max&quality=90&width=${width && width || ''}`}
      width={width && `${width}px`} height={height && `${height}px`}
      alt={altText}
      onLoad={onLoad && onLoad}
    />
  );
};