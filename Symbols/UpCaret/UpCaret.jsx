//image source
import upcaret from './image/upcaret.svg';

//styles
import styles from './UpCaret.module.css';

export default function UpCaret({ rotate = false, extraClass = undefined }) {
  // jsx template
  return (
    <div
      className={`${styles['up-caret-main']} ${
        rotate ? 'rotate-180' : ''
      } flex-row-center-all ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <img
        className={`${styles['up-caret-main__icon']} icon-default`}
        src={upcaret}
        alt={'upwards caret'}
      />
    </div>
  );
}
