import { type ReactElement } from 'react';
import clsx from 'clsx';
import { PartnersGrid } from './components/PartnersGrid';
import styles from './Partners.module.scss';
import './Partners.scss';

import {
  honoraryPartnersData,
  eventPartnersData,
  mainPartnerData,
} from './data';

export function Partners(): ReactElement {
  return (
    <section className={styles.container}>

      <PartnersGrid
          partnerArray={mainPartnerData}
          categoryName='Partnerzy główni'
          containerClassName={clsx(styles.grid, styles.mainPartnersGrid)}
      />

      <PartnersGrid
        partnerArray={eventPartnersData}
        categoryName='Partnerzy wydarzenia'
        containerClassName={clsx(styles.grid, styles.eventPartnersGrid)}
      />

      <PartnersGrid
          partnerArray={honoraryPartnersData}
          categoryName='Patroni honorowi'
          containerClassName={clsx(styles.grid, styles.honoraryPartnersGrid)}
      />

    </section>
  );
}
