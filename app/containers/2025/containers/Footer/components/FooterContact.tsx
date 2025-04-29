// FooterContacts.tsx
'use client';

import { type ReactElement } from 'react';
import { Contact } from '../Footer';
import { FaEnvelope, FaPhoneAlt, FaInstagram } from 'react-icons/fa';
import { BsDiscord } from 'react-icons/bs';
import { IconType } from 'react-icons';

type FooterContactsProps = {
  contactArray: Contact;
  containerClassName?: string;
  className?: string;
};

const iconMap: Record<string, IconType> = {
  BsDiscord,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
};

export function FooterContacts({
                                 contactArray,
                                 containerClassName,
                                 className,
                               }: FooterContactsProps): ReactElement {
  return (
      <ul className={containerClassName}>
        {contactArray.map(({ id, href, label, iconName }) => {
          const Icon = iconMap[iconName];
          return (
              <li key={id} className={className}>
                <a href={href}>
                  {Icon && <Icon />} {label}
                </a>
              </li>
          );
        })}
      </ul>
  );
}
