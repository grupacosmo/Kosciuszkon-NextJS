import { type ReactElement } from 'react';
import styles from './ScheduleElement.module.scss';

type ScheduleElementProps = {
  title: string;
  time: string;
};

export function ScheduleElement({ title, time }: ScheduleElementProps): ReactElement {
  return (
    <li className={styles.element}>
      <p>{title}</p>
      <p>{time}</p>
    </li>
  );
}
