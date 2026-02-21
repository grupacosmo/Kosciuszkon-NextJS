'use client';

import { ReactElement } from 'react';
import { Slider } from '@/app/utils';
import { SlideContent } from './components/SlideContent';
import styles from './Informations.module.scss';

type Image = {
    src: string;
    alt: string;
    imageClass: string;
};

type Content = {
    title: string;
    text: string;
}

type Slide = {
    id: string;
    image: Image;
    content: Content;
};

type InformationsProps = {
    sliderContent: Slide[];
};

export function Informations({ sliderContent }: InformationsProps): ReactElement {
  return (
    <section className={styles.section}>
      <Slider
        render={SlideContent}
        slides={sliderContent}
        hasGrayscale
        containerClassName={styles.container}
        nextButtonClassName={styles.nextSlideButton}
        prevButtonClassName={styles.prevSlideButton}
        dotsClassName={styles.sliderDots}
      />
    </section>
  );
}
