import { type ReactElement } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaDiscord} from 'react-icons/fa';
import { HexagonLink } from './components/HexagonLink';

import styles from './SocialMedia.module.scss';

export function SocialMedia(): ReactElement {

  return (
    <section key='2025' className={styles.section}>
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
