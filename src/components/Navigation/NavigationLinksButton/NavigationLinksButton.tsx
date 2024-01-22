'use client';

import { useAudiophileContext } from '@/hooks/useAudiophileContext';
import styles from './NavigationLinksButton.module.scss';
import Image from 'next/image';

export const NavigationLinksButton = () => {
  const { isCartMenuOpen, setIsDropdownActive, setIsCartMenuOpen } = useAudiophileContext();

  return (
    <button
      className={styles.button}
      onClick={() => {
        setIsDropdownActive((prev) => !prev);
        if (isCartMenuOpen) setIsCartMenuOpen(false);
      }}
      aria-label='categories'
    >
      <Image
        className={styles.icon}
        src='/assets/icons/icon-hamburger.svg'
        alt='hamburger-icon'
        width={16}
        height={16}
      />
    </button>
  );
};
