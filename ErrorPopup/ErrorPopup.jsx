//components
import ErrorIcon from '../ErrorIcon/ErrorIcon';
import Button from '../Button/Button';

//styles
import styles from './ErrorPopup.module.css';

export default function ErrorPopup({
  hasIcon = true,
  iconImageSource = undefined,
  heading = '',
  message = '',
  hasButton = true,
  onClick = null,
  buttonText = 'no text provided',
  extraClass = undefined,
  buttonImageSource = undefined,
}) {
  // jsx template
  return (
    <div
      className={`${styles['error-popup-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {/* render icon if there should be any */}
      {hasIcon && (
        <ErrorIcon
          extraClass={[styles['error-popup-main__checkbox']]}
          imageSource={iconImageSource}
        />
      )}

      {/* main top message e.g. thank you */}
      <p className={styles['error-popup-main__heading']}>{heading}</p>

      {/* detailed message about the error  */}
      <p className={styles['error-popup-main__message']}>{message}</p>

      {/* render button if there is any */}
      {hasButton && (
        <Button
          extraClass={[styles['error-popup-main__button']]}
          onClick={onClick}
          buttonText={buttonText}
          iconImageSource={buttonImageSource}
        />
      )}
    </div>
  );
}
