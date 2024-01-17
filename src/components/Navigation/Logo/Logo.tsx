import styles from './Logo.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link className={styles.link} href='/'>
      <Image
        className={styles.logo}
        src='/assets/logo.svg'
        alt='logo'
        width={145}
        height={25}
        quality={100}
      />
    </Link>
  );
};
