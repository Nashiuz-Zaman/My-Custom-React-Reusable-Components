//components
import TertiaryHeading from '../../TertiaryHeading/TertiaryHeading';
import ListOfText from '../../ListOfText/ListOfText';

//styles
import styles from './ProjectTechnologiesSection.module.css';

export default function ProjectTechnologiesSection({
  title,
  technologiesData = undefined,
  extraClass = undefined,
}) {
  // jsx template
  return (
    <section
      className={`${styles['section-project-technologies-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <TertiaryHeading text={title} />
      <ListOfText list={technologiesData} />
    </section>
  );
}
