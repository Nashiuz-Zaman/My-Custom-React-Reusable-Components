//components
import PlainDescription from '../PlainDescription/PlainDescription';

//styles
import styles from './MultipleParagraphs.module.css';

//component starts here
export default function MultipleParagraphs({
  paragraphDataArray = undefined,
  extraClass = undefined,
}) {
  // jsx template
  return (
    <div
      className={`${styles['multiple-paragraphs-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {paragraphDataArray.map(single => {
        return <PlainDescription key={single.id} description={single.text} />;
      })}
    </div>
  );
}
