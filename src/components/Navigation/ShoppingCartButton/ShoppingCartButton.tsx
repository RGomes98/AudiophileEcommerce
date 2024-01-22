'use client';

import { useAudiophileContext } from '@/hooks/useAudiophileContext';
import styles from './ShoppingCartButton.module.scss';
import Image from 'next/image';

export const ShoppingCartButton = () => {
  const { isDropdownActive, setIsCartMenuOpen, setIsDropdownActive } = useAudiophileContext();

  return (
    <button
      className={styles.cartButton}
      onClick={() => {
        setIsCartMenuOpen((prev) => !prev);
        if (isDropdownActive) setIsDropdownActive(false);
      }}
      aria-label='cart-button'
    >
      <Image
        className={styles.cartIcon}
        src='/assets/icons/icon-cart.svg'
        alt='cart-icon'
        width={24}
        height={20}
      />
    </button>
  );
};
