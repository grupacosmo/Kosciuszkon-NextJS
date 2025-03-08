import { type ReactElement } from 'react';
import { FaWpforms, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { VscLaw } from "react-icons/vsc";
import { HexagonLink } from './components/HexagonLink';
import { Countdown } from './components/Countdown';
import { calcEndTime } from './components/utils';

import styles from './Enrolment.module.scss';

const START_DATE = '2025-05-31T11:00:00';
const END_DATE = '2025-06-01T11:00:00';

export function Enrolment(): ReactElement {
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
              id='faq__form-label'
              label='Regulamin'
              arialLabel='faq__form-label'
              href='https://mckpk-my.sharepoint.com/:w:/g/personal/s_kosciuszkon_samorzad_pk_edu_pl/EQ9kM2q0gxJAl_ruJXlgCl8BDw4ZoBsNjcJ7-QMiZboU3g?e=eaWVTw'
              alt='Czarny sześciokąt z zielonym obramowaniem i ikoną wagi.'
              Icon={VscLaw}
          />
          <HexagonLink
              id='faq__ig-evennt-label'
              label='Wydarzenie na Instagramie'
              arialLabel='faq__ig-evennt-label'
              href='https://www.instagram.com/kosciuszkon_pk/'
              alt="Czarny sześciokąt z zielonym obramowaniem i ikoną Instagrama."
              Icon={FaInstagram}
          />
          <HexagonLink
              id='faq__fb-evennt-label'
              label='Wydarzenie na Facebooku'
              arialLabel='faq__fb-evennt-label'
              href='https://www.facebook.com/kosciuszkon'
              alt="Czarny sześciokąt z zielonym obramowaniem i ikoną Facebooka."
              Icon={FaFacebookF}
          />
      </article>

    </section>
  );
}
