//styles
import styles from './RotatingImages.module.css';

export default function RotatingImages({
  imageSourceArray = undefined,
  extraClass = undefined,
}) {
  // jsx template
  return (
    <div
      className={`${styles['rotating-images-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <div className={styles['rotating-images-main__images']}>
        <div className={styles['rotating-images-main__text-part']}>
          <span>Latest </span>
          <span>Projects</span>
        </div>

        {imageSourceArray.map((single) => {
          return (
            <div
              className={`${
                styles['rotating-images-main__images__single-image']
              } ${
                styles[
                  `rotating-images-main__images__single-image--image-${
                    single.id + 1
                  }`
                ]
              }`}
              aria-label={single.ariaLabel}
              key={single.id}
              style={{ background: `url(${single.src})` }}
            >
              &nbsp;
            </div>
          );
        })}
      </div>
    </div>
  );
}
