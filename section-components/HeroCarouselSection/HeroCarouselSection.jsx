//react
import React from 'react';

//components
import Carousel from '../../Carousel/Carousel';
import TertiaryHeading from '../../TertiaryHeading/TertiaryHeading';

//styles
import styles from './HeroCarouselSection.module.css';

//component starts here
export default function HeroCarouselSection({
  imageSourceDataArray = [],
  extraClass = undefined,
  title,
}) {
  // jsx template
  return (
    <section
      className={`${styles['section-hero-carousel-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <TertiaryHeading text={title} />

      <Carousel
        title={title && title}
        imageSourceDataArray={imageSourceDataArray}
      />
    </section>
  );
}
