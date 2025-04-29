'use client';

import type { ReactElement } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ScheduleTable } from './components/ScheduleTable';
import styles from './Schedule.module.scss';

export type ScheduleItem = {
    id: string;
    title: string;
    time: string;
    description: string;
};

type ScheduleData = {
    firstDayTitle: string,
    secondDayTitle: string,
    hackathon: {
        saturday: ScheduleItem[];
        sunday: ScheduleItem[];
    };
};

export function Schedule({scheduleData} : {scheduleData : ScheduleData}): ReactElement {
  return (
    <section className={styles.schedule}>
      <div className={styles.controls}>
        <h3>Hackathon</h3>
      </div>
      <AnimatePresence>
        <ScheduleTable
          firstTitle={scheduleData.firstDayTitle}
          firstArray={scheduleData.hackathon.saturday}
          secondTitle={scheduleData.secondDayTitle}
          secondArray={scheduleData.hackathon.sunday}
        />
      </AnimatePresence>
    </section>
  );
}
