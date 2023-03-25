//components
import SectionTitle from '../../SectionTitle/SectionTitle';
import Form from '../../Form/Form';

//styles
import styles from './FormSection.module.css';

//component starts here
export default function FormSection({
  id = 'no id provided',
  title = '',
  extraClass = undefined,
  imageSource = '',
  descriptionHeading = undefined,
  description = undefined,
}) {
  // jsx template
  return (
    <section
      id={id}
      className={`${styles['section-form']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {title && <SectionTitle title={title} />}

      <Form
        imageSource={imageSource}
        descriptionHeading={descriptionHeading}
        description={description}
      />
    </section>
  );
}
