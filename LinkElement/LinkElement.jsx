//react
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

//component
import ImageElement from '../ImageElement/ImageElement';

//image source
import goBackIcon from './images/leftcaret.svg';

//styles
import styles from './LinkElement.module.css';

export default function LinkElement({
  linkFor = 'samesite',
  toUrl = '',
  text = 'no text provided',
  extraClass = undefined,
  customStyle = {},
  ariaLabel = '',
  isText = true,
  iconImagesource = null,
  goBackLink = false,
}) {
  return (
    <>
      {/* external websites */}
      {linkFor === 'external' && (
        <a
          aria-label={ariaLabel}
          style={customStyle}
          className={`${styles['link-element-main']} ${
            extraClass ? extraClass.join(' ') : 'no-extra-class'
          }`}
          href={toUrl}
        >
          {goBackLink && (
            <ImageElement
              extraClass={[styles['link-element-main__image-main']]}
              imageSource={goBackIcon}
            />
          )}
          {isText && text}
          {!goBackLink && iconImagesource && (
            <ImageElement
              extraClass={[styles['link-element-main__image-main']]}
              imageSource={iconImagesource}
            />
          )}
        </a>
      )}

      {/* hashtag id in the same page */}
      {linkFor === 'hashed' && (
        <HashLink
          aria-label={ariaLabel}
          style={customStyle}
          className={`${styles['link-element-main']} ${
            extraClass ? extraClass.join(' ') : 'no-extra-class'
          }`}
          to={`/${toUrl}`}
        >
          {goBackLink && (
            <ImageElement
              extraClass={[styles['link-element-main__image-main']]}
              imageSource={goBackIcon}
            />
          )}
          {isText && text}
          {!goBackLink && iconImagesource && (
            <ImageElement
              extraClass={[styles['link-element-main__image-main']]}
              imageSource={iconImagesource}
            />
          )}
        </HashLink>
      )}

      {/* routing to another page on the same website */}
      {linkFor === 'samesite' && (
        <Link
          aria-label={ariaLabel}
          style={customStyle}
          className={`${styles['link-element-main']} ${
            extraClass ? extraClass.join(' ') : 'no-extra-class'
          }`}
          to={`/${toUrl}`}
        >
          {goBackLink && (
            <ImageElement
              extraClass={[styles['link-element-main__image-main']]}
              imageSource={goBackIcon}
            />
          )}
          {isText && text}
          {!goBackLink && iconImagesource && (
            <ImageElement
              extraClass={[styles['link-element-main__image-main']]}
              imageSource={iconImagesource}
            />
          )}
        </Link>
      )}
    </>
  );
}
