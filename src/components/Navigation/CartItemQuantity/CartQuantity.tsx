import { CartProduct } from '@/lib/zod/schemas/shoppingCart.schema';
import { useShoppingCart } from '@/hooks/useShoppingCart';
import styles from './CartQuantity.module.scss';

export const CartQuantity = ({ children, product }: { children: number; product: CartProduct }) => {
  const { incrementShoppingCartItem, decrementShoppingCartItem } = useShoppingCart();
  const productQuantity = children >= 100 ? 0 : 1;

  return (
    <div className={styles.container}>
      <button
        className={styles.quantityButton}
        onClick={() => decrementShoppingCartItem(product)}
        aria-label='decrement-button'
      >
        -
      </button>
      <span className={styles.quantity}>{children}</span>
      <button
        className={styles.quantityButton}
        onClick={() => incrementShoppingCartItem(product, productQuantity)}
        aria-label='increment-button'
      >
        +
      </button>
    </div>
  );
};
