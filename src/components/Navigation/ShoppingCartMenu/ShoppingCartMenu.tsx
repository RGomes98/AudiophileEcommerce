import { useAudiophileContext } from '@/hooks/useAudiophileContext';
import { CartQuantity } from '../CartItemQuantity/CartQuantity';
import { formatProductName } from '@/utils/formatProductName';
import { formatToCurrency } from '@/utils/formatToCurrency';
import { useShoppingCart } from '@/hooks/useShoppingCart';
import { useMounted } from '@/hooks/useMounted';
import { useToast } from '@/hooks/useToast';
import { Fragment } from 'react';
import styles from './ShoppingCartMenu.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const ShoppingCartMenu = () => {
  const { shoppingCart, removeAllShoppingCartItems } = useShoppingCart();
  const { setIsCartMenuOpen } = useAudiophileContext();
  const { createToast } = useToast();
  const { isMounted } = useMounted();

  const isCartFilled = shoppingCart.productsList.length;

  const handleRemoveAll = () => {
    if (!isCartFilled) return;
    removeAllShoppingCartItems();
    createToast('success', 'Shopping Cart cleared successfully.', 3000);
  };

  return (
    <Fragment>
      {isMounted ? (
        <div className={styles.container}>
          <div className={styles.headingWrapper}>
            <h6 className={styles.heading}>Cart({shoppingCart.itemCount})</h6>
            <button className={styles.removeAllButton} onClick={handleRemoveAll}>
              Remove all
            </button>
          </div>
          {!isCartFilled ? (
            <div className={styles.emptyWrapper}>
              <span className={styles.emptyText}>Empty Cart.</span>
            </div>
          ) : (
            <ul className={styles.cartList}>
              {shoppingCart.productsList.map((product) => {
                const { id, image, name, category, price, quantity } = product;

                return (
                  <li className={styles.cartItem} key={id}>
                    <Image className={styles.image} src={image.cart} alt={name} width={64} height={64} />
                    <div className={styles.priceWrapper}>
                      <span className={styles.name}>{formatProductName(name, category)}</span>
                      <span className={styles.price}>{formatToCurrency(price)}</span>
                    </div>
                    <CartQuantity product={product}>{quantity}</CartQuantity>
                  </li>
                );
              })}
            </ul>
          )}
          <div className={styles.checkoutWrapper}>
            <div className={styles.totalWrapper}>
              <span className={styles.totalHeading}>Total</span>
              <span className={styles.totalPrice}>{formatToCurrency(shoppingCart.subtotalAmount)}</span>
            </div>
            <Link className={styles.checkoutButton} onClick={() => setIsCartMenuOpen(false)} href='/checkout'>
              Checkout
            </Link>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};
