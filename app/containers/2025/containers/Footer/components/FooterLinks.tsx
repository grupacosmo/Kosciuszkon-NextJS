import { type ReactElement } from 'react';
import { type IconType } from 'react-icons';
import {FaFacebookF, FaGlobe, FaInstagram} from "react-icons/fa";

type BaseLink = {
  id: string;
  href: string;
  label: string;
};

type IconLink = {
  id: string;
  href: string;
  label: string;
  iconName: string;
};

type ImageLink = {
  id: string;
  href: string;
  alt: string;
  src: string;
};

type FooterLinksProps = {
  baseLinks?: BaseLink[];
  iconLinks?: IconLink[];
  imageLinks?: ImageLink[];
  containerClassName?: string;
  className?: string;
};

const iconMapping: Record<string, IconType> = {
  FaFacebookF,
  FaInstagram,
  FaGlobe,
};

export function FooterLinks({
  baseLinks,
  imageLinks,
  iconLinks,
  className,
  containerClassName,
}: FooterLinksProps): ReactElement {
  return (
    <ul className={containerClassName}>
      {baseLinks &&
        baseLinks.map(({ id, href, label }) => (
          <li key={id} className={className}>
            <a href={href} target="_blank" rel="noreferrer">
              {label}
            </a>
          </li>
        ))}


      {iconLinks?.map(({ id, href, label, iconName }) => {
        const Icon = iconMapping[iconName]; // Get the icon from the mapping
        return (
            <li key={id} className={className}>
              <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                {Icon && <Icon className="h-5 w-5" />}
                {label}
              </a>
            </li>
        );
      })}

      {imageLinks &&
        imageLinks.map(({ id, href, alt, src }) => (
          <li key={id} className={className}>
            <a key={id} href={href} target="_blank" rel="noreferrer">
              <img src={src} alt={alt} />
            </a>
          </li>
        ))}
    </ul>
  );
}
