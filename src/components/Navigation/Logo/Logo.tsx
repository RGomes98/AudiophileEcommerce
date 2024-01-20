'use client';

import { useAudiophileContext } from '@/hooks/useAudiophileContext';
import styles from './Logo.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  const { setIsDropdownActive } = useAudiophileContext();

  return (
    <Link className={styles.link} onClick={() => setIsDropdownActive(false)} href='/'>
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
