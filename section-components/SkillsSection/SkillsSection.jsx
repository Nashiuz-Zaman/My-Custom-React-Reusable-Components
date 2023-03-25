//components
import SectionTitle from '../../SectionTitle/SectionTitle';
import ImageGallery from '../../ImageGallery/ImageGallery';

//hooks
import useAlterComponentState from '../../../hooks/useAlterComponentState';

//styles
import styles from './SkillsSection.module.css';

export default function SkillsSection({
  id = 'no-id-provided',
  skillsInfoArray = undefined,
  title = '',
  extraClass = undefined,
}) {
  const { alternativeState, ref } = useAlterComponentState(0.3);

  return (
    <section
      ref={ref}
      id={id}
      className={`${styles['section-skills']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <SectionTitle
        extraClass={[alternativeState ? 'show-content' : 'hide-right']}
        title={title}
      />
      <ImageGallery
        extraClass={[
          styles['section-skills__image-gallery'],
          alternativeState ? 'show-content' : 'hide-left',
        ]}
        imageDataArray={skillsInfoArray}
      />
    </section>
  );
}
