//component
import SectionTitle from '../../SectionTitle/SectionTitle';
import MultipleParagraphs from '../../MultipleParagraphs/MultipleParagraphs';
import ImageElement from '../../ImageElement/ImageElement';

//hooks
import useMediaQueryContext from '../../../hooks/useMediaQueryContext';
import useAlterComponentState from '../../../hooks/useAlterComponentState';

//styles
import styles from './AboutMeSection.module.css';

export default function AboutMeSection({
  id = '',
  title = '',
  descriptionData = '',
  extraClass = undefined,
  imageSource = '',
}) {
  const { mediaQueryFinalState } = useMediaQueryContext();
  const { alternativeState, ref } = useAlterComponentState(0.5);

  return (
    <section
      ref={ref}
      id={id}
      className={`${styles['section-about-me']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <SectionTitle
        extraClass={[
          styles['section-about-me__section-title'],
          alternativeState ? 'show-content' : 'hide-right',
        ]}
        title={title}
      />
      {(mediaQueryFinalState.isMobile ||
        mediaQueryFinalState.isSmallTablet) && (
        <MultipleParagraphs
          extraClass={[
            styles['section-about-me__description'],
            alternativeState ? 'show-content' : 'hide-left',
          ]}
          paragraphDataArray={descriptionData}
        />
      )}

      {(mediaQueryFinalState.isLargeTablet ||
        mediaQueryFinalState.isDesktop) && (
        <div
          className={
            styles['section-about-me__description-and-image-container']
          }
        >
          <div
            className={`${
              styles[
                'section-about-me__description-and-image-container__description-container'
              ]
            } ${alternativeState ? 'show-content' : 'hide-left'}`}
          >
            <MultipleParagraphs
              extraClass={[
                styles[
                  'section-about-me__description-and-image-container__description-container__description'
                ],
              ]}
              paragraphDataArray={descriptionData}
            />
          </div>
          <ImageElement
            extraClass={[
              styles[
                'section-about-me__description-and-image-container__image'
              ],
              alternativeState ? 'show-content' : 'hide-right',
            ]}
            imageSource={imageSource}
          />
        </div>
      )}
    </section>
  );
}
