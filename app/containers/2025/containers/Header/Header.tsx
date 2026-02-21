'use client';

import { useState, type ReactElement} from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { BiMenu, BiX } from 'react-icons/bi';
import { MenuItem } from './components/MenuItem';
import styles from './Header.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import { CircleFlag } from 'react-circle-flags'

interface HeaderData {
  localLinks: { id: string; label: string; href: string }[];
  historyLinks: { id: string; label: string; href: string }[];
  labels: {
    history: string;
  };
}

export function Header({data} : { data: HeaderData }) : ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();


  const isPolish = !pathname.startsWith('/en');
  const currentLanguage = isPolish ? 'pl' : 'en';


  const languageIcon = currentLanguage === 'pl' ? <div className={styles.country}><CircleFlag countryCode="pl" height="18"  /><a> PL</a></div>
      : <><CircleFlag countryCode="gb" height="18" className={styles.country} /><a> EN</a></>;
  const nextLanguage = currentLanguage === 'pl' ? 'en' : 'pl';
  const nextLanguageIcon = nextLanguage === 'pl' ? <div className={styles.country}><CircleFlag countryCode="pl" height="18" className={styles.country}  /><a> PL</a></div>
      : <><CircleFlag countryCode="gb" height="18" className={styles.country} /><a> EN</a></>;

  const changeLanguage = () => {
    if (currentLanguage === 'pl') {
      router.push(`/en${pathname === '/' ? '' : pathname}`);
    } else {
      const newPath = pathname.replace(/^\/en/, '') || '/';
      router.push(newPath);
    }
  };


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
          {data.localLinks.map((link) => (
            <MenuItem key={link.id} onClick={closeMenu} {...link} />
          ))}
          <div className={styles.dropdown}>
            <Link className={styles.link} href="">
              {data.labels.history}
            </Link>
            <div className={styles.dropdownContent}>
              {data.historyLinks.map((link) => (
                  <Link key={link.id} className={styles.dropdownContentLink} href={link.href}>
                    {link.label}
                  </Link>
              ))}
            </div>
          </div>

          <div className={styles.dropdownLanguage}>
            <button className={styles.buttonLanguage}>
              {languageIcon}
            </button>
            <div className={styles.dropdownContentLanguage}>
              <button className={styles.dropdownContentButton} onClick={() => { changeLanguage(); closeMenu(); }}>
                {nextLanguageIcon}
              </button>
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
          {data.localLinks.map((link) => (
            <MenuItem key={link.id} onClick={closeMenu} {...link} />
          ))}
          {data.historyLinks.map((link) => (
              <Link key={link.id} className={styles.dropdownContentLink} href={link.href}>
                {link.label}
              </Link>
          ))}
          <li>
            <button className={styles.mobileButtonLanguage} onClick={() => { changeLanguage(); closeMenu(); }}>
              {nextLanguageIcon}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
