import { type ReactElement } from 'react';
import clsx from 'clsx';
import { PartnersGrid } from './components/PartnersGrid';
import styles from './Partners.module.scss';
import './Partners.scss';

import { honoraryPartnersData, eventPartnersData, majorPartnerData, mediaPartnersData, mainSponsor } from './data';

export function Partners(): ReactElement {
  return (
    <section className={styles.container}>
      <PartnersGrid
        partnerArray={mainSponsor}
        categoryName="Sponsor główny wydarzenia"
        containerClassName={clsx(styles.grid, styles.mainSponsor)}
      />

      <PartnersGrid
        partnerArray={majorPartnerData}
        categoryName="Partnerzy główni"
        containerClassName={clsx(styles.grid, styles.majorPartnersGrid)}
      />

      <PartnersGrid
        partnerArray={eventPartnersData}
        categoryName="Partnerzy wydarzenia"
        containerClassName={clsx(styles.grid, styles.eventPartnersGrid)}
      />

      <PartnersGrid
         partnerArray={mediaPartnersData}
         categoryName="Partnerzy medialni"
         containerClassName={clsx(styles.grid, styles.mediaPartnersGrid)}
      />

      <PartnersGrid
        partnerArray={honoraryPartnersData}
        categoryName="Patroni honorowi"
        containerClassName={clsx(styles.grid, styles.honoraryPartnersGrid)}
      />
    </section>
  );
}
