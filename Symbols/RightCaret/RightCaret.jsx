//image source
import rightcaret from './image/rightcaret.svg';

//styles
import styles from './RightCaret.module.css';

export default function RightCaret({ onClick = null, extraClass = undefined }) {
  return (
    <div
      className={`${styles['rightcaret-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <button
        className={styles['rightcaret-main__button']}
        onClick={onClick}
        style={{ background: `url(${rightcaret})` }}
        aria-label={'button to the right direction'}
      >
        &nbsp;
      </button>
    </div>
  );
}
