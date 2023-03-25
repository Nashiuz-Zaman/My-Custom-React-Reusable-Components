//styles
import styles from './SuccessPopup.module.css';

//component
import SuccessIcon from '../SuccessIcon/SuccessIcon';
import Button from '../Button/Button';

export default function SuccessPopup({
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
  return (
    <div
      className={`${styles['success-popup-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {/* render icon if there should be any */}
      {hasIcon && (
        <SuccessIcon
          extraClass={[styles['success-popup-main__checkbox']]}
          imageSource={iconImageSource}
        />
      )}

      {/* main top message e.g. thank you */}
      <p className={styles['success-popup-main__heading']}>{heading}</p>

      {/* detailed message about the successful action */}
      <p className={styles['success-popup-main__message']}>{message}</p>

      {/* render button if there is any */}
      {hasButton && (
        <Button
          extraClass={[styles['success-popup-main__button']]}
          onClick={onClick}
          buttonText={buttonText}
          iconImageSource={buttonImageSource}
        />
      )}
    </div>
  );
}
