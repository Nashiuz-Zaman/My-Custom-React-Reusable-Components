//react
import { useEffect, useRef } from 'react';

//components
import BrandName from '../BrandName/BrandName';
import MobileNavigation from '../MobileNavbar/MobileNavigation/MobileNavigation';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import DesktopNavigation from '../DesktopNavigation/DesktopNavigation';

//hooks
import useMediaQueryContext from '../../hooks/useMediaQueryContext';
import useMobileNavigationContext from '../../hooks/useMobileNavigationContext';
import useBackdropContext from '../../hooks/useBackdropContext';
import useHeaderThemeContext from '../../hooks/useHeaderThemeContext';

//styles
import styles from './Header.module.css';

export default function Header({
  changeTheme = false,
  brandName = undefined,
  navigationOptionsArray = undefined,
  socialmediaButtonsHeading = undefined,
  socialmediaButtonsData = undefined,
  desktopNavigationOptionsArray = [],
  ctaButtonData = {},
  heroBackgroundImageSource = '',
}) {
  const { mediaQueryFinalState } = useMediaQueryContext();
  const { handleOpenMobileNavigation } = useMobileNavigationContext();
  const { openBackdrop } = useBackdropContext();
  const { setHeaderRef } = useHeaderThemeContext();
  const headerRef = useRef();

  useEffect(() => {
    setHeaderRef(headerRef);
  }, [headerRef, setHeaderRef]);

  return (
    <>
      {/* check if hero section is FULL visible or not and update header's
      current state based on that */}
      <header
        ref={headerRef}
        className={`${styles['header-main']} ${
          changeTheme
            ? styles['header-main-alternative']
            : 'no-alternative-theme'
        }`}
      >
        <BrandName title={brandName} changeTheme={changeTheme} />
        {!mediaQueryFinalState.isDesktop && (
          <HamburgerMenu
            onClick={() => {
              openBackdrop();
              handleOpenMobileNavigation();
            }}
          />
        )}

        {mediaQueryFinalState.isDesktop && (
          <DesktopNavigation
            ctaButtonData={ctaButtonData}
            navigationOptionsArray={desktopNavigationOptionsArray}
          />
        )}
      </header>

      {!mediaQueryFinalState.isDesktop && (
        <MobileNavigation
          socialmediaButtonsHeading={socialmediaButtonsHeading}
          socialmediaButtonsData={socialmediaButtonsData}
          navigationOptionsArray={navigationOptionsArray}
        />
      )}
    </>
  );
}
