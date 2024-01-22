'use client';

import { useToast } from '@/hooks/useToast';
import { Toast } from './Toast/Toast';
import styles from './ToastContainer.module.scss';

export const ToastContainer = () => {
  const { toasts } = useToast();

  return (
    <div className={styles.container}>
      {toasts.map(({ id, message, status, isVisible }) => (
        <Toast key={id} {...{ id, message, status, isVisible }} />
      ))}
    </div>
  );
};
