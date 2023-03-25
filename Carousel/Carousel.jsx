//components
import ImageElement from '../ImageElement/ImageElement';
import Zoom from '../Symbols/Zoom/Zoom';

//styles
import styles from './Carousel.module.css';

export default function Carousel({
  imageSourceDataArray = undefined,
  extraClass = undefined,
}) {
  return (
    <div
      className={`${styles['carousel-main']} 
      ${extraClass ? extraClass.join(' ') : 'default class'}
      `}
    >
      {imageSourceDataArray && (
        <div className={styles['carousel-main__scroll-container']}>
          {/* left and right directional buttons */}

          {imageSourceDataArray.map((singleImage) => {
            return (
              <div
                key={singleImage.id}
                className={
                  styles['carousel-main__scroll-container__scroll-item']
                }
              >
                {/* back image */}
                <div
                  className={
                    styles[
                      'carousel-main__scroll-container__scroll-item__back-image'
                    ]
                  }
                >
                  {/* front image inside the back image */}
                  <ImageElement
                    imageSource={singleImage.small}
                    alt={'full page screenshot of the website'}
                    extraClass={[
                      styles[
                        'carousel-main__scroll-container__scroll-item__front-image'
                      ],
                      'flex-row-center-all',
                    ]}
                  />

                  {/* button under the image that goes to the fullsize image */}
                  <Zoom
                    extraClass={[
                      styles[
                        'carousel-main__scroll-container__scroll-item__zoom'
                      ],
                    ]}
                    onClick={() => {
                      window.location.href = `${singleImage.expand}`;
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
