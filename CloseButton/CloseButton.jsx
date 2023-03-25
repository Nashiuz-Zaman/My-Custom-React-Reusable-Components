//component
import ImageElement from '../ImageElement/ImageElement';

//styles
import styles from './CloseButton.module.css';

//image source
import closeIcon from './image/closeicon.svg';

export default function CloseButton({
  handleClick = null,
  buttonText = undefined,
}) {
  return (
    <div className={styles['close-button__main']}>
      <button
        className={styles['close-button__main__button']}
        onClick={handleClick}
        aria-label={
          'a crossed button to close form or other elements that has a opened state'
        }
      >
        {buttonText && buttonText}
        <ImageElement
          extraClass={[styles['close-button__main__button__close-icon']]}
          imageSource={closeIcon}
        />
      </button>
    </div>
  );
}
