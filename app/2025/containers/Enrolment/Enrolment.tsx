import { type ReactElement } from 'react';
import { FaWpforms, FaFacebookF, FaInstagram, FaLinkedin, FaDiscord} from 'react-icons/fa';
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

        <article className={styles.importantLinksContainer}>
            <HexagonLink
                id='faq__form-label'
                label='Rejestracja'
                arialLabel='faq__form-label'
                href='https://forms.office.com/pages/responsepage.aspx?id=8qzyXLSsHU-Adm7aPxge7fhxeA78Pb5Aq0eAlucyCmpUNlU1WDNEQkpOM1gwSVpSRUtKSE9TT1pIMy4u&route=shorturl'
                alt='Czarny sześciokąt z zielonym obramowaniem i ikoną formularza.'
                Icon={FaWpforms}
                className={styles.importantLink}
            />
            <HexagonLink
                id='faq__form-label'
                label='Regulamin'
                arialLabel='faq__form-label'
                href='https://mckpk-my.sharepoint.com/:w:/g/personal/s_kosciuszkon_samorzad_pk_edu_pl/EQ9kM2q0gxJAl_ruJXlgCl8BDw4ZoBsNjcJ7-QMiZboU3g?e=eaWVTw'
                alt='Czarny sześciokąt z zielonym obramowaniem i ikoną wagi.'
                Icon={VscLaw}
                className={styles.importantLink}
            />

        </article>
      <article className={styles.linksContainer}>
          <HexagonLink
              id='faq__fb-evennt-label'
              label='Facebook'
              arialLabel='faq__fb-evennt-label'
              href='https://www.facebook.com/kosciuszkon'
              alt="Czarny sześciokąt z zielonym obramowaniem i ikoną Facebooka."
              Icon={FaFacebookF}
          />
          <HexagonLink
              id='faq__ig-evennt-label'
              label='Instagram'
              arialLabel='faq__ig-evennt-label'
              href='https://www.instagram.com/kosciuszkon_pk/'
              alt="Czarny sześciokąt z zielonym obramowaniem i ikoną Instagrama."
              Icon={FaInstagram}
          />
          <HexagonLink
              id='faq__linkedin-evennt-label'
              label='Linkedin'
              arialLabel='faq__linkedin-evennt-label'
              href='https://www.linkedin.com/company/kosciuszkon/'
              alt="Czarny sześciokąt z zielonym obramowaniem i ikoną Linkedin."
              Icon={FaLinkedin}
          />
          <HexagonLink
              id='faq__dc-evennt-label'
              label='Discord'
              arialLabel='faq__dc-evennt-label'
              href='https://discord.gg/Ek57YxvpT5'
              alt="Czarny sześciokąt z zielonym obramowaniem i ikoną Discorda."
              Icon={FaDiscord}
          />
      </article>

    </section>
  );
}
