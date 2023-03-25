//image source
import downcaret from './image/downcaret.svg';

//styles
import styles from './DownCaret.module.css';

export default function DownCaret({ rotate = false, extraClass = undefined }) {
  // jsx template
  return (
    <div
      className={`${styles['down-caret-main']} ${
        rotate ? 'rotate-180-rev' : ''
      } flex-row-center-all ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <img
        className={`${styles['down-caret-main__icon']} icon-default`}
        src={downcaret}
        alt={'downwards caret'}
      />
    </div>
  );
}
