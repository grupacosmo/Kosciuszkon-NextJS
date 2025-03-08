import { type ReactElement } from 'react';
import { FaWpforms, FaFacebookF } from 'react-icons/fa';
import { Collapsible } from '@/app/utils';

import { HexagonLink } from './components/HexagonLink';
import { Countdown } from './components/Countdown';
import { calcEndTime } from './components/utils';
import { questionsData } from './data';

import styles from './Questions.module.scss';

const START_DATE = '2025-05-31T11:00:00';
const END_DATE = '2025-06-01T11:00:00';

export function Questions(): ReactElement {
  const disableCountdown = calcEndTime(END_DATE) < 0;

  return (
    <section key='2025' className={styles.section}>
      <Countdown
        startDate={START_DATE}
        endDate={END_DATE}
        disabled={disableCountdown}
      />

      <article className={styles.linksContainer}>
        <HexagonLink
          id='faq__form-label'
          label='Formularz rejestracyjny'
          arialLabel='faq__form-label'
          href='https://forms.office.com/pages/responsepage.aspx?id=8qzyXLSsHU-Adm7aPxge7fhxeA78Pb5Aq0eAlucyCmpUNlU1WDNEQkpOM1gwSVpSRUtKSE9TT1pIMy4u&route=shorturl'
          alt='Czarny sześciokąt z zielonym obramowaniem i ikoną formularza.'
          Icon={FaWpforms}
        />
        <HexagonLink
          id='faq__fb-evennt-label'
          label='Wydarzenie na Facebooku'
          arialLabel='faq__fb-evennt-label'
          href='https://www.facebook.com/kosciuszkon'
          alt="Czarny sześciokąt z zielonym obramowaniem i ikoną Facebooka'a."
          Icon={FaFacebookF}
        />
      </article>

      <article className={styles.faqContainer}>
        {questionsData.map(({ id, title, text }) => (
          <Collapsible
            key={id}
            label={title}
            buttonClassName={styles.faqCollapsibleButton}
          >
            <p>{text}</p>
          </Collapsible>
        ))}
      </article>
    </section>
  );
}
