'use client';

import { type ReactElement, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import clsx from 'clsx';

import hex from '../../../assets/svg/hex-timer.svg';
import { calcEndTime, calcProps, calcStartTime } from './utils';

import styles from './Countdown.module.scss';
import { start } from 'node:repl';

const Timer = dynamic(() => import('@/app/utils/Timer/Timer'), { ssr: false });

type CountdownProps = {
  startDate: string;
  endDate: string;
  disabled?: boolean;
};

export function Countdown({ startDate, endDate, disabled = false }: CountdownProps): ReactElement {
  const [startTime, setStartTime] = useState<number>(calcStartTime(startDate));
  const [endTime, setEndTime] = useState<number>(calcEndTime(endDate));

  useEffect(() => {
    if (!disabled) {
      const interval = setInterval(() => {
        setStartTime((state) => state - 1);
        setEndTime((state) => state - 1);
      }, 990);

      return () => clearInterval(interval);
    }
    return () => {};
  }, [disabled]);

  const { time, header } = calcProps(startTime, endTime);

  return (
    <article className={clsx(styles.container, { [styles.disabled]: disabled })}>
      <div className={styles.textWrapper}>
        <h3>{header}</h3>
        <h4>
          ( {new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        }).format(new Date(startDate))})
        </h4>
      </div>
      <div className={styles.countdown}>
        <Timer time={time} className={styles.timer} />
        <Image
          className={styles.timerBackground}
          src={hex}
          alt="Czarny sześcian z zielonym obramowaniem."
        />
      </div>
    </article>
  );
}
