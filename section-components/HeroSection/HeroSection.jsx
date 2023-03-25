//react
import React from 'react';

//styles
import styles from './HeroSection.module.css';

function HeroSection(
  { hero = 'no hero component provided', extraClass = undefined },
  ref
) {
  return (
    <section
      ref={ref}
      className={`${styles['section-hero']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {hero}
    </section>
  );
}

export default React.forwardRef(HeroSection);
