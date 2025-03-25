import { ReactElement } from 'react';
import styles from './Hero.module.scss';

export function Hero(): ReactElement {
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h1>Kościuszkon III</h1>
        <p>
            Witaj na trzeciej edycji Kościuszkonu! Zbierz ekipę, wzmocnij ducha rywalizacji i
            przygotuj się na 24 godziny pełne intensywnej walki o mega nagrody.
            To będzie prawdziwa próba sił – kto wyjdzie na prowadzenie?
        </p>
        <div className={styles.titleBackground} />
      </div>

      <div className={styles.videoContainer}>
        <video autoPlay muted loop>
          <source src='/p2025/video.webm' type='video/webm' />
          <source src='/p2025/video.mp4' type='video/mp4' />
        </video>
      </div>
      <div className={styles.gradient}></div>
    </section>
  );
}
