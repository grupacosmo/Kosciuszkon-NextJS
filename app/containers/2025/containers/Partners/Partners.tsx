import { type ReactElement } from 'react';
import clsx from 'clsx';
import { PartnersGrid } from './components/PartnersGrid';
import styles from './Partners.module.scss';
import './Partners.scss';

type Partner = {
    id: string;
    img: string;
    link: string;
    partnerName: string;
    customClass: string;
};

type PartnersProps = {
    sectionTitles: {
        mainSponsorTitle: string;
        majorPartnerTitle: string;
        eventPartnersTitle: string;
        mediaPartnersTitle: string;
    };
    mainSponsor: Partner[];
    majorPartnerData: Partner[];
    eventPartnersData: Partner[];
    mediaPartnersData: Partner[];
};

export function Partners({
                             sectionTitles,
                             mainSponsor,
                             majorPartnerData,
                             eventPartnersData,
                             mediaPartnersData,
                         }: PartnersProps): ReactElement {
    return (
        <section className={styles.container}>
            <PartnersGrid
                partnerArray={mainSponsor}
                categoryName={sectionTitles.mainSponsorTitle}
                containerClassName={clsx(styles.grid, styles.mainSponsor)}
            />

            <PartnersGrid
                partnerArray={majorPartnerData}
                categoryName={sectionTitles.majorPartnerTitle}
                containerClassName={clsx(styles.grid, styles.majorPartnersGrid)}
            />

            <PartnersGrid
                partnerArray={eventPartnersData}
                categoryName={sectionTitles.eventPartnersTitle}
                containerClassName={clsx(styles.grid, styles.eventPartnersGrid)}
            />

            <PartnersGrid
                partnerArray={mediaPartnersData}
                categoryName={sectionTitles.mediaPartnersTitle}
                containerClassName={clsx(styles.grid, styles.mediaPartnersGrid)}
            />
        </section>
    );
}