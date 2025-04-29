import { type ReactElement } from 'react';
import { Collapsible } from '@/app/utils';

import styles from './Questions.module.scss';

type QuestionsProps = {
    id: string;
    title: string;
    text: string;
}

type QuestionsData = QuestionsProps[];

export function Questions({questionsData} : {questionsData : QuestionsData}): ReactElement {
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
