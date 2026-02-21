'use client';

import { useState, type ReactElement } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { BiMenu, BiX } from 'react-icons/bi';
import { MenuItem } from './components/MenuItem';
import { localLinks } from './data';
import styles from './Header.module.scss';
import style from './components/MenuItem.module.scss';

export function Header(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const mobileMenuClassNames = clsx(styles.mobileNav, {
    [styles.menuOpen]: isMenuOpen,
  });

  return (
    <header className={styles.section}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {localLinks.map((link) => (
            <MenuItem key={link.id} onClick={closeMenu} {...link} />
          ))}
          <div className={styles.dropdown}>
            <Link className={styles.link} href="">
              Historia Edycji
            </Link>
            <div className={styles.dropdownContent}>
              <Link className={styles.dropdownContentLink} href="/2023">
                {' '}
                I Edycja - 2023
              </Link>
              <Link className={styles.dropdownContentLink} href="/2024">
                {' '}
                II Edycja - 2024{' '}
              </Link>
              <Link className={styles.dropdownContentLink} href="/">
                {' '}
                III Edycja - 2025{' '}
              </Link>
            </div>
          </div>
        </ul>

        <button
          className={clsx(styles.navButton, {
            [styles.mobileNavButton]: isMenuOpen,
          })}
          onClick={() => {
            setIsMenuOpen((state) => !state);
          }}
        >
          {isMenuOpen ? (
            <BiX aria-label="Zamknij menu" color="white" />
          ) : (
            <BiMenu aria-label="Otwórz menu" color="white" />
          )}
        </button>
      </nav>

      <nav className={mobileMenuClassNames}>
        <ul className={styles.mobileNavList}>
          {localLinks.map((link) => (
            <MenuItem key={link.id} onClick={closeMenu} {...link} />
          ))}
          <Link className={styles.link} href="/2023">
            I Edycja - 2023
          </Link>
          <Link className={styles.link} href="/2024">
            II Edycja - 2024
          </Link>
          <Link className={styles.link} href="/">
            III Edycja - 2025
          </Link>
        </ul>
      </nav>
    </header>
  );
}
