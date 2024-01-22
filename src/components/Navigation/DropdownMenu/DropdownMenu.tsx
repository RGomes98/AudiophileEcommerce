'use client';

import { CategoryPanel } from '@/components/InteractionHub/CategoryPanel/CategoryPanel';
import { ShoppingCartMenu } from '../ShoppingCartMenu/ShoppingCartMenu';
import { useAudiophileContext } from '@/hooks/useAudiophileContext';
import { Fragment } from 'react';
import styles from './DropdownMenu.module.scss';

export const DropdownMenu = () => {
  const { isDropdownActive, isCartMenuOpen } = useAudiophileContext();

  return (
    <Fragment>
      <div className={`${styles.dropdown} ${(isDropdownActive && styles.showDropdown) || ''}`}>
        <CategoryPanel />
      </div>
      <div className={`${styles.cartMenu} ${(isCartMenuOpen && styles.showCartMenu) || ''}`}>
        <ShoppingCartMenu />
      </div>
      <div
        className={`${styles.overlay} ${((isDropdownActive || isCartMenuOpen) && styles.showOverlay) || ''}`}
      ></div>
    </Fragment>
  );
};
