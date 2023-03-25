//component
import HeadingDescBtn from '../HeadingDescBtn/HeadingDescBtn';
import LinkButton from '../LinkButton/LinkButton';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
import CopyrightInfo from '../CopyrightInfo/CopyrightInfo';

//styles
import styles from './MobileFooter.module.css';

export default function MobileFooter({
  heading,
  developer = '',
  contactButtonInfo = [],
  socialMediaButtonsData = undefined,
  logoButtonsHeading = 'no text provided',
  extraClass = undefined,
}) {
  return (
    <footer
      className={`${styles['mobile-footer']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <div className={styles['mobile-footer__top-bottom-container']}>
        <div className={styles['mobile-footer__top-bottom-container__top']}>
          <HeadingDescBtn
            extraClass={[
              styles[
                'mobile-footer__top-bottom-container__top__heading-desc-btn-textbox'
              ],
            ]}
            heading={heading}
            group={true}
            button={<LinkButton />}
            buttonInfoArray={contactButtonInfo}
          />
        </div>

        <div className={styles['mobile-footer__top-bottom-container__bottom']}>
          <SocialMediaLinks
            extraClass={[
              styles[
                'mobile-footer__top-bottom-container__bottom__social-media-links'
              ],
            ]}
            heading={logoButtonsHeading}
            logoButtonsArray={socialMediaButtonsData}
          />
        </div>
      </div>

      <CopyrightInfo
        extraClass={[styles['mobile-footer__copyright-info']]}
        developer={developer}
      />
    </footer>
  );
}
