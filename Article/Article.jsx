//hooks
import useMediaQueryContext from '../../hooks/useMediaQueryContext';

//styles
import styles from './Article.module.css';

export default function Article({
  name = 'no name provided',
  functionalElements = undefined,
  imageSource = 'no-image-provided',
  extraClass = undefined,
}) {
  const { mediaQueryFinalState } = useMediaQueryContext();

  return (
    <article
      className={`${styles['article-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <h3 className={styles['article-main__article-name']}>
        {`Project | ${name}`}
      </h3>
      <div className={styles['article-main__article-image-box__box']}>
        <div
          className={styles['article-main__article-image-box__box__image']}
          style={{ background: `url(${imageSource})` }}
        >
          {/* if device is desktop then generate here */}
          {mediaQueryFinalState.isDesktop && (
            <div
              className={
                styles[
                  'article-main__article-related-functionality-container--desktop-version'
                ]
              }
            >
              {functionalElements && functionalElements}
            </div>
          )}
        </div>
      </div>

      {!mediaQueryFinalState.isDesktop && (
        <div
          className={
            styles[
              'article-main__article-related-functionality-container--non-desktop-version'
            ]
          }
        >
          {functionalElements && functionalElements}
        </div>
      )}

      {/* <p className={styles["article-main__article-name"]}>{name}</p> */}

      {/* if device is not desktop then generate here */}
    </article>
  );
}
