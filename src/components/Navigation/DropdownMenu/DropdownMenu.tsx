'use client';

import { CategoryPanel } from '@/components/InteractionHub/CategoryPanel/CategoryPanel';
import { useAudiophileContext } from '@/hooks/useAudiophileContext';
import { Fragment } from 'react';
import styles from './DropdownMenu.module.scss';

export const DropdownMenu = () => {
  const { isDropdownActive, setIsDropdownActive } = useAudiophileContext();

  return (
    <Fragment>
      <div className={`${styles.dropdown} ${(isDropdownActive && styles.showDropdown) || ''}`}>
        <CategoryPanel />
      </div>
      <div className={`${styles.overlay} ${(isDropdownActive && styles.showOverlay) || ''}`}></div>
    </Fragment>
  );
};
