//image source
import leftcaret from './image/leftcaret.svg';

//styles
import styles from './LeftCaret.module.css';

export default function LeftCaret({ onClick = null, extraClass = undefined }) {
  return (
    <div
      className={`${styles['leftcaret-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <button
        className={styles['leftcaret-main__button']}
        onClick={onClick}
        style={{ background: `url(${leftcaret})` }}
        aria-label={'button to the left direction'}
      >
        &nbsp;
      </button>
    </div>
  );
}
