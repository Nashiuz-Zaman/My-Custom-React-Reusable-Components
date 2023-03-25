//components
import LinkElement from '../LinkElement/LinkElement';
import ImageElement from '../ImageElement/ImageElement';

//image source
import externalIcon from './image/external-link.svg';

//styles
import styles from './ExternalLinkButton.module.css';

export default function ExternalLinkButton({
  buttonText = '',
  toUrl = '',
  extraClass = undefined,
}) {
  return (
    <div
      className={`${styles['external-link-button-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <LinkElement text={buttonText} toUrl={toUrl} linkFor={'external'} />
      <ImageElement imageSource={externalIcon} />
    </div>
  );
}
