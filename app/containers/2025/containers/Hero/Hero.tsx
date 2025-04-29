import { ReactElement } from 'react';
import styles from './Hero.module.scss';

interface HeroProps {
    title: string;
    description: string;
}

export function Hero({data} : {data :HeroProps}): ReactElement {
  return (
      <section className={styles.section}>
          <div className={styles.title}>
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <div className={styles.titleBackground} />
          </div>

          <div className={styles.videoContainer}>
              <video autoPlay muted loop playsInline>
                  <source src="/p2025/video.webm" type="video/webm" />
                  <source src="/p2025/video.mp4" type="video/mp4" />
              </video>
          </div>
          <div className={styles.gradient}></div>
      </section>
  );
}
