//component
import ImageElement from '../ImageElement/ImageElement';

//hook
import useMediaQueryContext from '../../hooks/useMediaQueryContext';
import useHideElementTransition from '../../hooks/useHideElementTransition';

//image source
import goToTopIcon from './image/gototop.svg';

//styles
import styles from './GoToTopButton.module.css';

export default function GoToTopButton({
  buttontext = '',
  extraClass = undefined,
  leftPageTop = false,
}) {
  const {
    mediaQueryFinalState: { isSmallTablet, isLargeScreen },
  } = useMediaQueryContext();

  const { ref } = useHideElementTransition();

  // jsx template
  return (
    <div
      ref={ref}
      className={`${styles['go-to-top-button-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      } ${leftPageTop && styles['go-to-top-button-main__show-content']}`}
    >
      <button
        className={styles['go-to-top-button-main__button']}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo(0, 0);
        }}
      >
        <ImageElement
          extraClass={[styles['go-to-top-button-main__button__icon-image']]}
          imageSource={goToTopIcon}
        />
        {(isSmallTablet || isLargeScreen) && (
          <span className={styles['go-to-top-button-main__button__text']}>
            {buttontext}
          </span>
        )}
      </button>
    </div>
  );
}
