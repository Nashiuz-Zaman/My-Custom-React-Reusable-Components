//styles
import styles from './TertiaryHeading.module.css';

export default function TertiaryHeading({
  text = 'no text provided',
  extraClass = undefined,
}) {
  // jsx template
  return (
    <div
      className={`${styles['tertiary-heading-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <h3 className={styles['tertiary-heading-main__heading']}>{text}</h3>
    </div>
  );
}
