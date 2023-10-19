import kwadrat from '@/public/2023/kwadrat.webp';
import wrss from '@/public/2023/wrss.webp';
import fundacja from '@/public/2023/fundacja.webp';
import cosmo from '@/public/2023/cosmo.png';

import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export const visitUsLinks = [
  {
    id: 1,
    href: 'https://samorzad.pk.edu.pl',
    alt: 'Samorząd Studencki Politechniki Krakowskiej.',
    src: wrss,
  },
  {
    id: 2,
    href: 'https://klubkwadrat.pl/pl',
    alt: 'Klub Kwadrat.',
    src: kwadrat,
  },
  {
    id: 3,
    href: 'https://fundacjapk.com/',
    alt: 'Fundacja Samorządu Studentów Politechniki Krakowskiej.',
    src: fundacja,
  },
  {
    id: 4,
    href: 'https://www.facebook.com/cosmopk.kn',
    alt: 'Koło Naukowe Cosmo PK.',
    src: cosmo,
  },
];

export const externalLinks = [
  {
    id: 1,
    href: 'https://drive.google.com/file/d/1GKs2Gf_lKRk_lYXAfLcviRvcbeVVuq57/view?usp=sharing',
    label: 'Regulamin',
  },
  {
    id: 2,
    href: 'https://www.facebook.com/samorzad.wiitpk',
    label: 'Organizatorzy',
  },
];

export const externalLinksWithIcons = [
  {
    id: 1,
    href: 'https://www.facebook.com/samorzad.wiitpk',
    label: ' WRSS WIiT',
    Icon: FaFacebookF,
  },
  {
    id: 2,
    href: 'https://www.facebook.com/cosmopk.kn',
    label: 'Cosmo PK',
    Icon: FaFacebookF,
  },
  {
    id: 3,
    href: 'https://www.instagram.com/wrss_wiit_pk/',
    label: 'WRSS WIiT',
    Icon: FaInstagram,
  },
  {
    id: 4,
    href: 'https://www.instagram.com/cosmopk_kn/',
    label: 'Cosmo PK',
    Icon: FaInstagram,
  },
];
