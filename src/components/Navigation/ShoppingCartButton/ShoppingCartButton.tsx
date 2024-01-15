import styles from './ShoppingCartButton.module.scss';
import Image from 'next/image';

export const ShoppingCartButton = () => {
  return (
    <button className={styles.cartButton} aria-label='cart-button'>
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
