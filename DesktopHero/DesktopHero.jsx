//styles
import styles from './DesktopHero.module.css';

//component
import RotatingImages from '../RotatingImages/RotatingImages';

//components
import HeadingDescBtn from '../HeadingDescBtn/HeadingDescBtn';

//component starts here
export default function DesktopHero({
  imageSourceArray = undefined,
  buttonInfoArray = [],
  button = undefined,
  group = false,
  heading = '',
  subheading = '',
  shortIntroduction = '',
  extraClass = undefined,
  description = '',
  heroBackgroundImageSource = '',
}) {
  return (
    <div
      className={`${styles['desktop-hero-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <div className={styles['desktop-hero-main__both-sides']}>
        <div
          style={{ background: `url(${heroBackgroundImageSource})` }}
          className={styles['desktop-hero-main__both-sides__left']}
        >
          <HeadingDescBtn
            heading={heading}
            subheading={subheading}
            shortIntroduction={shortIntroduction}
            description={description}
            extraClass={[
              styles['desktop-hero-main__both-sides__left__text-part'],
            ]}
            group={group}
            button={button}
            buttonInfoArray={buttonInfoArray}
          />
        </div>
        <div className={styles['desktop-hero-main__both-sides__right']}>
          {imageSourceArray && (
            <RotatingImages
              imageSourceArray={imageSourceArray}
              extraClass={[
                styles['desktop-hero-main__both-sides__right__rotating-images'],
              ]}
            />
          )}
        </div>
      </div>
    </div>
  );
}
