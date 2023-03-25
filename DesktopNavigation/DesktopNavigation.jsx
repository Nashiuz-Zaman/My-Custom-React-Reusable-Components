//components
import ListOfLinks from '../ListOfLinks/ListOfLinks';
import LinkButton from '../LinkButton/LinkButton';

//styles
import styles from './DesktopNavigation.module.css';

//component starts here
export default function DesktopNavigation({
  extraClass = undefined,
  navigationOptionsArray = undefined,
  ctaButtonData = {},
}) {
  // jsx template
  return (
    <nav
      className={`${styles['desktop-navigation-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {navigationOptionsArray && (
        <ListOfLinks
          linkDataArray={navigationOptionsArray}
          extraClass={[styles['desktop-navigation-main__list-of-links']]}
        />
      )}

      <LinkButton
        buttonText={ctaButtonData.buttonText}
        toUrl={ctaButtonData.toUrl}
        linkFor={ctaButtonData.linkFor}
        extraClass={[styles['desktop-navigation-main__cta-button']]}
      />
    </nav>
  );
}
