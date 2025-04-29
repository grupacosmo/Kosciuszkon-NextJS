import { type ReactElement } from 'react';
import { HexagonLink } from '@/app/utils/Hexagon/HexagonLink';
import { Countdown } from './components/Countdown';
import { calcEndTime } from './components/utils';

import styles from './Enrolment.module.scss';
import {IconType} from "react-icons";

const START_DATE = '2025-05-31T10:30:00';
const END_DATE = '2025-06-01T17:30:00';

type EnrollmentLink = {
    label: string;
    arialLabel: string;
    href: string;
    alt: string;
    Icon: IconType;
}

type Enrollment = {
    links: EnrollmentLink[];
}

export function Enrolment({ data }: { data: Enrollment }): ReactElement {
    const disableCountdown = calcEndTime(END_DATE) < 0;

    return (
        <section key="2025" className={styles.section}>
            <Countdown startDate={START_DATE} endDate={END_DATE} disabled={disableCountdown} />

            <article className={styles.linksContainer}>
                {data.links.map((link, index) => (
                    <HexagonLink
                        key={index}
                        id={`faq__link-${index}`}
                        label={link.label}
                        arialLabel={link.arialLabel}
                        href={link.href}
                        alt={link.alt}
                        Icon={link.Icon}
                    />
                ))}
            </article>
        </section>
    );
}
