import styles from './LinksButton.module.scss';
import Image from 'next/image';

export const LinksButton = () => {
  return (
    <button className={styles.button} aria-label='categories'>
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
