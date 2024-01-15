import styles from './NavigationLinks.module.scss';
import Link from 'next/link';

export const NavigationLinks = () => {
  return (
    <ul className={styles.linkList}>
      <li className={styles.linkItem}>
        <Link className={styles.link} href='/'>
          Home
        </Link>
      </li>
      <li className={styles.linkItem}>
        <Link className={styles.link} href='/headphones'>
          Headphones
        </Link>
      </li>
      <li className={styles.linkItem}>
        <Link className={styles.link} href='/speakers'>
          Speakers
        </Link>
      </li>
      <li className={styles.linkItem}>
        <Link className={styles.link} href='/earphones'>
          Earphones
        </Link>
      </li>
    </ul>
  );
};
