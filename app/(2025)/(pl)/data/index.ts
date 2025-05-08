import {FaWpforms} from "react-icons/fa";
import { VscLaw } from 'react-icons/vsc';

export const header = {
    localLinks: [
        { id: '1', label: 'O wydarzeniu', href: '#o wydarzeniu' },
        { id: '2', label: 'Zapisy', href: '#zapisy' },
        { id: '4', label: 'Harmonogram', href: '#harmonogram' },
        { id: '5', label: 'FAQ', href: '#faq' },
        { id: '8', label: 'Kontakt', href: '#kontakt' },
    ],
    historyLinks: [
        { id: '2023', label: 'I Edycja - 2023', href: '/2023' },
        { id: '2024', label: 'II Edycja - 2024', href: '/2024' },
        { id: '2025', label: 'III Edycja - 2025', href: '/' },
    ],
    labels: {
        history: 'Historia Edycji',
    },
};

export const hero = {
    title: 'Kościuszkon III',
    description: `Witaj na trzeciej edycji Kościuszkonu! Zbierz ekipę, wzmocnij ducha rywalizacji i
  przygotuj się na 24 godziny pełne intensywnej walki o mega nagrody. To będzie prawdziwa
  próba sił – kto wyjdzie na prowadzenie?`,
};

export const enrollment = {
    links: [
        {
            label: 'Rejestracja',
            arialLabel: 'Tu znajdziesz link do rejestracji uczestnika.',
            href: 'https://forms.office.com/pages/responsepage.aspx?id=8qzyXLSsHU-Adm7aPxge7fhxeA78Pb5Aq0eAlucyCmpUNlU1WDNEQkpOM1gwSVpSRUtKSE9TT1pIMy4u&route=shorturl',
            alt: 'Czarny sześciokąt z zielonym obramowaniem i ikoną formularza.',
            Icon: FaWpforms,
            disabled: true,
        },
        {
            label: 'Regulamin',
            arialLabel: 'Tu znajdziesz link do regulaminu Kościuszkonu.',
            href: 'https://mckpk-my.sharepoint.com/:w:/g/personal/s_kosciuszkon_samorzad_pk_edu_pl/EQ9kM2q0gxJAl_ruJXlgCl8BDw4ZoBsNjcJ7-QMiZboU3g?e=eaWVTw',
            alt: 'Czarny sześciokąt z zielonym obramowaniem i ikoną wagi.',
            Icon: VscLaw,
            disabled: false,
        },
    ],
};

export const footer = {
    visitUsTitle: 'Odwiedź nas',
    externalLinksWithIconsTitle: 'Linki zewnętrzne',
    contactsTitle: 'Kontakt',
    mapButton: 'Pokaż mapę',
    copyright: 'Copyright © Wszelkie prawa zastrzeżone',
    visitUsLinks: [
        {
            id: '2025-visit-0',
            href: 'https://it.pk.edu.pl',
            alt: 'Wydział Informatyki i Telekomunikacji Politechniki Krakowskiej',
            src: '/p2025/visit/wiit.png',
        },
        {
            id: '2025-visit-1',
            href: 'https://samorzad.pk.edu.pl',
            alt: 'Samorząd Studencki Politechniki Krakowskiej.',
            src: '/p2025/visit/wrss.png',
        },
        {
            id: '2025-visit-2',
            href: 'https://klubkwadrat.pl/pl',
            alt: 'Klub Kwadrat.',
            src: '/p2025/visit/kwadrat.png',
        },
        {
            id: '2025-visit-3',
            href: 'https://fundacjapk.com/',
            alt: 'Fundacja Samorządu Studentów Politechniki Krakowskiej.',
            src: '/p2025/visit/fpk.png',
        },
        {
            id: '2025-visit-4',
            href: 'https://visgraph.pk.edu.pl',
            alt: 'Koło Naukowe Visgraph.',
            src: '/p2025/visit/visgraph.png',
        },
        {
            id: '2025-visit-6',
            href: 'https://www.facebook.com/cosmopk.kn',
            alt: 'Koło Naukowe Cosmo PK.',
            src: '/p2024/visit/cosmo.png',
        },
    ],

    externalLinksWithIcons: [
        {
            id: '2025-external-1',
            href: 'https://it.pk.edu.pl',
            label: 'Wydział Informatyki i Telekomunikacji',
            iconName: 'FaGlobe',
        },
        {
            id: '2025-external-2',
            href: 'https://www.facebook.com/samorzad.wiitpk',
            label: 'WRSS WIiT',
            iconName: 'FaFacebookF',
        },
        {
            id: '2025-external-3',
            href: 'https://www.facebook.com/wrsswieik',
            label: 'WRSS WIEiK',
            iconName: 'FaFacebookF',
        },
        {
            id: '2025-external-4',
            href: 'https://www.facebook.com/visgraph',
            label: 'Visgraph',
            iconName: 'FaFacebookF',
        },
        {
            id: '2025-external-5',
            href: 'https://www.facebook.com/cosmopk.kn',
            label: 'Cosmo PK',
            iconName: 'FaFacebookF',
        },
        {
            id: '2025-external-6',
            href: 'https://www.instagram.com/wrss_wiit_pk/',
            label: 'WRSS WIiT',
            iconName: 'FaInstagram',
        },
        {
            id: '2025-external-7',
            href: 'https://www.instagram.com/vis.graph/',
            label: 'Visgraph',
            iconName: 'FaInstagram',
        },
        {
            id: '2025-external-8',
            href: 'https://www.instagram.com/cosmopk_kn/',
            label: 'Cosmo PK',
            iconName: 'FaInstagram',
        },
    ],
    contacts: [
        {
            id: '2023-contacts-1',
            href: 'https://discord.gg/Ek57YxvpT5',
            label: 'Discord - Oficjalny kanał',
            iconName: 'BsDiscord',
        },
        {
            id: '2025-contact-2',
            href: 'https://www.instagram.com/kosciuszkon_pk/',
            label: 'Nasz Instagram',
            iconName: 'FaInstagram',
        },
        {
            id: '2025-contact-3',
            href: 'mailto:kosciuszkon@samorzad.pk.edu.pl',
            label: 'kosciuszkon@samorzad.pk.edu.pl',
            iconName: 'FaEnvelope',
        },
        {
            id: '2025-contact-4',
            href: 'tel: +48 789-123-125',
            label: '+48 789-123-125',
            iconName: 'FaPhoneAlt',
        },
        {
            id: '2025-contact-5',
            href: 'tel: +48 882-955-844',
            label: '+48 882-955-844',
            iconName: 'FaPhoneAlt',
        },
    ],
};
