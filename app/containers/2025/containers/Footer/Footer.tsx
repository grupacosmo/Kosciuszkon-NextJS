'use client';

import { type ReactElement, useState } from 'react';
import dynamic from 'next/dynamic';
import { FaLocationDot } from 'react-icons/fa6';
import { FooterContacts } from './components/FooterContact';
import { FooterLinks } from './components/FooterLinks';
import styles from './Footer.module.scss';

export type ContactItem = {
  id: string;
  href: string;
  label: string;
  iconName: string;
};

export type Contact = ContactItem[];

type VisitLinkItem = {
  id: string;
  href: string;
  alt: string;
  src: string;
};

type VisitLink = VisitLinkItem[];

type ExternalLinkItem = {
  id: string;
  href: string;
  label: string;
  iconName: string;
};

type ExternalLink = ExternalLinkItem[];

type FooterProps = {
  data: {
    visitUsTitle: string;
    externalLinksWithIconsTitle: string;
    contactsTitle: string;
    mapButton: string;
    copyright: string;
    visitUsLinks: VisitLink;
    externalLinksWithIcons: ExternalLink;
    contacts: Contact;
  };
};

const MapPortal = dynamic(() => import('@/app/containers/2025/containers/MapDialog/MapDialog'), {
  ssr: false,
});

export function Footer({data} : FooterProps): ReactElement {
  const [isMapOpen, setIsMapOpen] = useState<boolean>(false);
  return (
    <footer className={styles.footer} id="kontakt">
      <section className={styles.footerContainer}>
        <article className={styles.visit}>
          <h3>{data.visitUsTitle}</h3>
          <FooterLinks
            imageLinks={data.visitUsLinks}
            className={styles.visitItem}
            containerClassName={styles.visitList}
          />
        </article>

        <article className={styles.contact}>
          <h3>{data.contactsTitle}</h3>
          <FooterContacts
            contactArray={data.contacts}
            className={styles.contactItem}
            containerClassName={styles.contactList}
          />
          <button className={styles.contactButton} type="button" onClick={() => setIsMapOpen(true)}>
            <FaLocationDot color="white" /> <a style={{ color: 'white' }}>{data.mapButton}</a>
          </button>
        </article>

        <article className={styles.links}>
          <h3>{data.externalLinksWithIconsTitle}</h3>
          <div className={styles.linksContainer}>
            <FooterLinks iconLinks={data.externalLinksWithIcons} />
          </div>
        </article>

        <div className={styles.footerBackground} />
      </section>
      <section className={styles.copyright}>
        <p>{data.copyright}</p>
      </section>
      <MapPortal isOpen={isMapOpen} setIsOpen={setIsMapOpen} />
    </footer>
  );
}
