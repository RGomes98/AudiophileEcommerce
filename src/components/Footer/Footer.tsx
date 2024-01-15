import { NavigationLinks } from '../Navigation/NavigationLinks/NavigationLinks';
import { Logo } from '../Navigation/Logo/Logo';
import { Socials } from './Socials/Socials';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.navigation}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <NavigationLinks />
      </div>
      <div className={styles.socials}>
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>
            Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music
            lovers and sound specialists who are devoted to helping you get the most out of personal audio.
            Come and visit our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <Socials />
        <span className={styles.copyright}>Copyright {new Date().getFullYear()}. All Rights Reserved</span>
      </div>
    </footer>
  );
};
