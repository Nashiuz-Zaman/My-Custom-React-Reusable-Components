//image source
import zoom from './image/zoom.svg';

//styles
import styles from './Zoom.module.css';

export default function Zoom({ onClick = null, extraClass = undefined }) {
  return (
    <div
      className={`${styles['zoom-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <button
        className={styles['zoom-main__button']}
        onClick={onClick}
        style={{ background: `url(${zoom})` }}
        aria-label={'button to the left direction'}
      >
        &nbsp;
      </button>
    </div>
  );
}
