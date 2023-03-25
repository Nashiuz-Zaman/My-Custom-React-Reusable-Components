// styles
import styles from './ErrorIcon.module.css';

//image source
import sadface from './image/sadface.svg';

export default function ErrorIcon({
  imageSource = undefined,
  extraClass = undefined,
}) {
  return (
    <div
      className={`${styles['error-icon-container']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {/* if custom imagesource present then that is the src or else the default image */}
      <img src={imageSource ?? sadface} alt={'error'} />
    </div>
  );
}
