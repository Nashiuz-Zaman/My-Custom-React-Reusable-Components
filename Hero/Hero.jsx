//styles
import styles from './Hero.module.css';

//components
import HeadingDescBtn from '../HeadingDescBtn/HeadingDescBtn';
import PlainDescription from '../PlainDescription/PlainDescription';

//component starts here
export default function Hero({
  imageSource = '',
  imageAlt = '',
  buttonInfoArray = [],
  buttonText = '',
  button = undefined,
  group = false,
  heading = '',
  subheading = '',
  shortIntroduction = '',
  extraClass = undefined,
  description = '',
  name = '',
  occupation = '',
}) {
  return (
    <div
      className={`${styles['hero-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <div className={styles['hero-main__top-part']}>
        <HeadingDescBtn
          extraClass={[styles['hero-main__top-part__heading-desc-btn-textbox']]}
          shortIntroduction={shortIntroduction}
          heading={heading}
          subheading={subheading}
          group={group}
          button={button}
          buttonText={buttonText}
          buttonInfoArray={buttonInfoArray}
        />
      </div>
      <div className={styles['hero-main__bottom-part']}>
        {/* first part  */}
        <div className={styles['hero-main__bottom-part__text']}>
          <PlainDescription description={description} />
        </div>

        {/* second part */}
        <div
          className={styles['hero-main__bottom-part__decoration-with-image']}
        >
          <div
            className={
              styles[
                'hero-main__bottom-part__decoration-with-image__image-information'
              ]
            }
          >
            <p
              className={
                styles[
                  'hero-main__bottom-part__decoration-with-image__image-information__name'
                ]
              }
            >
              {name}
            </p>
            <p
              className={
                styles[
                  'hero-main__bottom-part__decoration-with-image__image-information__occupation'
                ]
              }
            >
              {occupation}
            </p>
          </div>

          <img
            className={
              styles['hero-main__bottom-part__decoration-with-image__image']
            }
            src={imageSource}
            alt={imageAlt}
          />
        </div>
      </div>
    </div>
  );
}
