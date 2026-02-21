import {FaWpforms} from "react-icons/fa";
import {VscLaw} from "react-icons/vsc";

export const header = {
    localLinks: [
        { id: '1', label: 'About', href: '#About' },
        { id: '2', label: 'Enrollment', href: '#Enrollment' },
        { id: '4', label: 'Schedule', href: '#Schedule' },
        { id: '5', label: 'FAQ', href: '#FAQ' },
        { id: '6', label: 'Photos', href: '#Photos' },
        { id: '8', label: 'Contact', href: '#kontakt' },
    ],
    historyLinks: [
        { id: '2023', label: 'I Edition - 2023', href: '/2023' },
        { id: '2024', label: 'II Edition - 2024', href: '/2024' },
        { id: '2025', label: 'III Edition - 2025', href: '/' },
    ],
    labels: {
        history: 'Edition History',
    },
};

export const hero = {
    title: 'Kościuszkon III',
    description: `Welcome to the third edition of Kościuszkon! 
    Gather your team, strengthen your competitive spirit,
     and get ready for 24 hours of intense battles for amazing prizes. 
    This will be a true test of strength – who will come out on top?`,
};

export const enrollment = {
    links: [
        {
            label: 'Registration',
            arialLabel: 'Here you can find the Kościuszkon registration.',
            href: 'https://forms.office.com/pages/responsepage.aspx?id=8qzyXLSsHU-Adm7aPxge7fhxeA78Pb5Aq0eAlucyCmpUNlU1WDNEQkpOM1gwSVpSRUtKSE9TT1pIMy4u&route=shorturl',
            alt: 'A black hexagon with a green border and a form icon.',
            Icon: FaWpforms,
            disabled: true,
        },
        {
            label: 'Regulations',
            arialLabel: 'Here you can find the Kościuszkon regulations.',
            href: 'https://mckpk-my.sharepoint.com/:w:/g/personal/s_kosciuszkon_samorzad_pk_edu_pl/EYSFQ96h0ZFHrkUxSSNV9NUBvjPSZPMv0R9ZwrxfuHmBog?e=ghRocl',
            alt: 'A black hexagon with a green border and a scale icon.',
            Icon: VscLaw,
            disabled: false,
        },
    ],
};

export const footer = {
    visitUsTitle: 'Visit us',
    externalLinksWithIconsTitle: 'External links',
    contactsTitle: 'Contact',
    mapButton: 'Show map',
    copyright: 'Copyright © All rights reserved',
    visitUsLinks: [
        {
            id: '2025-visit-0',
            href: 'https://it.pk.edu.pl',
            alt: 'Faculty of Computer Science and Telecommunications',
            src: '/p2025/visit/wiit.png',
        },
        {
            id: '2025-visit-1',
            href: 'https://samorzad.pk.edu.pl',
            alt: 'Student Council of the Krakow University of Technology',
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
            alt: 'The Foundation of the Student Government of the Krakow University of Technology.',
            src: '/p2025/visit/fpk.png',
        },
        {
            id: '2025-visit-4',
            href: 'https://visgraph.pk.edu.pl',
            alt: 'Visgraph Science Club.',
            src: '/p2025/visit/visgraph.png',
        },
        {
            id: '2025-visit-6',
            href: 'https://www.facebook.com/cosmopk.kn',
            alt: 'Cosmo PK Science Club.',
            src: '/p2024/visit/cosmo.png',
        },
    ],

    externalLinksWithIcons: [
        {
            id: '2025-external-1',
            href: 'https://it.pk.edu.pl',
            label: 'Faculty of Computer Science and Telecommunications',
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
            label: 'Discord - Official channel',
            iconName: 'BsDiscord',
        },
        {
            id: '2025-contact-2',
            href: 'https://www.instagram.com/kosciuszkon_pk/',
            label: 'Our Instagram',
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
