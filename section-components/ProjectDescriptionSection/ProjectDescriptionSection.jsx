//components
import MultipleParagraphs from '../../MultipleParagraphs/MultipleParagraphs';
import TertiaryHeading from '../../TertiaryHeading/TertiaryHeading';

//styles
import styles from './ProjectDescriptionSection.module.css';

export default function ProjectDescriptionSection({
  title,
  projectDescriptionData = undefined,
  extraClass = undefined,
}) {
  // jsx template
  return (
    <section
      className={`${styles['section-project-description-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <TertiaryHeading text={title} />

      <MultipleParagraphs paragraphDataArray={projectDescriptionData} />
    </section>
  );
}
