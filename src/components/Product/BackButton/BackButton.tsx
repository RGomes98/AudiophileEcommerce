'use client';

import { useRouter } from 'next/navigation';
import styles from './BackButton.module.scss';

export const BackButton = () => {
  const { back } = useRouter();

  return (
    <button className={styles.button} onClick={back}>
      Go Back
    </button>
  );
};
