import { type ReactElement } from 'react';
import { Collapsible } from '@/app/utils';
import { questionsData } from './data';

import styles from './Questions.module.scss';

export function Questions(): ReactElement {
  return (
    <section key="2025" className={styles.section}>
      <article className={styles.faqContainer}>
        {questionsData.map(({ id, title, text }) => (
          <Collapsible key={id} label={title} buttonClassName={styles.faqCollapsibleButton}>
            <p>{text}</p>
          </Collapsible>
        ))}
      </article>
    </section>
  );
}
