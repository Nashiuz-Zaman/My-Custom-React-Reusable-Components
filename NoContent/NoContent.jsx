//components
import LinkButton from '../LinkButton/LinkButton';

//hooks
import useDocumentTitle from '../../hooks/useDocumentTitle';

//styles
import styles from './NoContent.module.css';

export default function NoContent({
  extraClass = undefined,
  heading = '',
  height = '20rem',
  width = '100%',
  marginTop = '0',
}) {
  useDocumentTitle('No Content Found');

  // jsx template
  return (
    <div
      className={`${styles['no-content-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
      style={{ width: width, height: height, marginTop: marginTop }}
    >
      <h1 className={styles['no-content-main__heading']}>{heading}</h1>
      <LinkButton
        className={styles['no-content-main__link-button-main']}
        buttonText={'Back To Homepage'}
        linkFor={'samesite'}
        toUrl={''}
      />
    </div>
  );
}
