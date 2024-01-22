import { Toast as ToastType } from '@/hooks/useToast';
import styles from './Toast.module.scss';
import Image from 'next/image';

export const Toast = ({ message, status, isVisible }: ToastType) => {
  return (
    <div className={`${styles.container} ${isVisible ? styles.showToast : styles.hideToast}`}>
      <Image className={styles.logo} src={`/assets/${status}.svg`} alt={status} width={36} height={36} />
      <span className={styles.message}>{message}</span>
    </div>
  );
};
