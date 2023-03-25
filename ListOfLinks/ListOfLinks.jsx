//components
import LinkElement from '../LinkElement/LinkElement';

//styles
import styles from './ListOfLinks.module.css';

export default function ListOfLinks({
  linkDataArray = undefined,
  extraClass = undefined,
}) {
  return (
    <div
      className={`${styles['list-of-links-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {linkDataArray.map((single) => {
        return (
          <LinkElement
            key={single.id}
            linkFor={single.linkFor}
            toUrl={single.toUrl}
            text={single.text}
            ariaLabel={single.ariaLabel && single.ariaLabel}
          />
        );
      })}
    </div>
  );
}
