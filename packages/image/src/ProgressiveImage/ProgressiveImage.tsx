import React, { useState, createRef, useEffect } from 'react';
import { Image } from '../Image/Image';
import * as styles from './ProgressiveImage.style';

interface IProgressiveImageProps {
  image?: any,
  originalSource?: string | null,
  thumbnail?: string | null,
  height?: number,
  maxHeight?: number,
  color?: string,
}

export const ProgressiveImage = (props: IProgressiveImageProps) => {

  const {
    image,
    originalSource,
    thumbnail,
    height,
    maxHeight,
    color,
  } = props;

  //   if (!siteSettings) {
  //     return null;
  //   }
  // 
  const [isLoaded, setIsLoaded] = useState(false);

  const imageRef = createRef<HTMLImageElement>();

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      setIsLoaded(true);
    }
  }, [imageRef])

  return (
    <>
      {/* HANDLING IMAGES FROM UMBRACO */}
      {image ? (
        <styles.Picture
          className="c-progressive-image"
          style={{
            height: height ? `${height}px` : '100%',
            maxHeight: maxHeight ? `${maxHeight}px` : '100%',
            backgroundColor: color && color || ''
          }}
        >
          <styles.SmallImg
            loaded={isLoaded}
            src={`${image.sourceUrl}?&mode=max&quality=10&width=10`} alt="Loading..."
          />

          <Image
            node={imageRef}
            className="c-progressive-image__original"
            image={{ ...image }}
            // culture={siteSettings.culture}
            onLoad={() => setIsLoaded(true)}
          />
        </styles.Picture>
      ) : (
          <>
            {/* HANDLING OTHER IMAGES */}
            {(thumbnail && originalSource) &&
              <styles.Picture
                // TODO, pass in as props instead of overriding styles
                style={{
                  height: height ? `${height}px` : '100%',
                  maxHeight: maxHeight ? `${maxHeight}px` : '100%'
                }}
              >
                <styles.SmallImg
                  loaded={isLoaded}
                  src={thumbnail} alt="Loading..."
                />

                <styles.OrginalImg
                  src={originalSource}
                  onLoad={() => setIsLoaded(true)}
                />
              </styles.Picture>}
          </>
        )}
    </>
  );
};