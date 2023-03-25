//component
import HeadingDescriptionGroup from '../../HeadingDescriptionGroup/HeadingDescriptionGroup';
import HeadingWithCollapsedDescription from '../../HeadingWithCollapsedDescription/HeadingWithCollapsedDescription';

//hook
import useAlterComponentState from '../../../hooks/useAlterComponentState';

//styles
import SectionTitle from '../../SectionTitle/SectionTitle';
import styles from './ReasonsSection.module.css';

export default function ReasonsSection({
  id = 'no id provided',
  title = 'no title provided',
  reasonsData = undefined,
  extraClass = undefined,
}) {
  const { alternativeState, ref } = useAlterComponentState(0.5);

  return (
    <section
      ref={ref}
      id={id}
      className={`${styles['section-reasons']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <div className={styles['section-reasons__section-title-container']}>
        <SectionTitle
          extraClass={[
            styles['section-reasons__section-title-container__section-title'],
            alternativeState ? 'show-content' : 'hide-left',
          ]}
          title={title}
        />
      </div>

      <div
        className={`${styles['section-reasons__reasons']} ${
          alternativeState ? 'show-content' : 'hide-right'
        }`}
      >
        <HeadingDescriptionGroup
          extraClass={[
            styles[
              'section-reasons__reasons__heading-with-collapsed-description-group'
            ],
          ]}
          headingDescriptionDataArray={reasonsData}
          element={
            <HeadingWithCollapsedDescription
              extraClass={[
                styles[
                  'section-reasons__reasons__heading-with-collapsed-description-group__heading-with-collapsed-description-main'
                ],
              ]}
            />
          }
        />
      </div>
    </section>
  );
}
