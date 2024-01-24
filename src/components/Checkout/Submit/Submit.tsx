import { useFormStatus } from 'react-dom';
import styles from './Submit.module.scss';
import Image from 'next/image';

export const Submit = ({ itemCount }: { itemCount: number }) => {
  const { pending } = useFormStatus();
  const isCartFilled = itemCount > 0;

  return (
    <button
      className={`${styles.button} ${(pending && styles.disabled) || ''} ${
        (!isCartFilled && styles.emptyCart) || ''
      }`}
      disabled={isCartFilled ? pending : false}
      type='submit'
    >
      <div className={styles.wrapper}>
        <span className={styles.text}>{pending ? 'Processing' : 'Continue & Pay'}</span>
        <Image
          className={`${styles.image} ${styles[pending ? 'fadeIn' : 'fadeOut']}`}
          src='/assets/90-ring-with-bg.svg'
          alt='loder'
          width={28}
          height={28}
        />
      </div>
    </button>
  );
};
