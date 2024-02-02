import { formatProductName } from '@/utils/formatProductName';
import { formatToCurrency } from '@/utils/formatToCurrency';
import { type RefObject, Fragment, useState } from 'react';
import { useShoppingCart } from '@/hooks/useShoppingCart';
import { useMounted } from '@/hooks/useMounted';
import styles from './Modal.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const Modal = ({ modalRef }: { modalRef: RefObject<HTMLDialogElement> }) => {
  const { shoppingCart, removeAllShoppingCartItems } = useShoppingCart();
  const { isMounted } = useMounted();

  const { name, category, price, quantity, image } = shoppingCart.productsList[0] || [];
  const [isHiddenMenuActive, setIsHiddenMenuActive] = useState(false);

  const cartItemCount = shoppingCart.itemCount;
  const itemMinusCurrent = cartItemCount - 1;
  const itemMessage = (itemMinusCurrent > 1 && '(s)') || '';

  return isMounted && cartItemCount > 0 ? (
    <dialog className={styles.container} ref={modalRef}>
      <div className={styles.wrapper}>
        <Image
          className={styles.icon}
          src='/assets/icons/icon-order-confirmation.svg'
          alt='icon-confirmation'
          width={64}
          height={64}
        />
        <div className={styles.headingWrapper}>
          <h3 className={styles.heading}>Thank You For Your Order</h3>
          <p className={styles.text}>You will receive an email confirmation shortly.</p>
        </div>
        <ul className={styles.detailList}>
          <li className={`${styles.detailItem} ${(cartItemCount === 1 && styles.disableHiddenMenu) || ''}`}>
            <div className={styles.itemWrapper}>
              <Image className={styles.itemImage} src={image.cart} alt={name} width={50} height={50} />
              <div className={styles.priceWrapper}>
                <span className={styles.name}>{formatProductName(name, category)}</span>
                <span className={styles.price}>{formatToCurrency(price)}</span>
              </div>
              <span className={styles.itemQuantity}>x{quantity}</span>
            </div>
            {cartItemCount > 1 ? (
              <div
                className={`${styles.hiddenWrapper} ${(isHiddenMenuActive && styles.showHiddenMenu) || ''}`}
              >
                <ul className={styles.otherList}>
                  {shoppingCart.productsList.slice(1).map(({ name, category, price, quantity, image }) => {
                    return (
                      <li key={name} className={styles.otherItem}>
                        <Image
                          className={styles.itemImage}
                          src={image.cart}
                          alt={name}
                          width={50}
                          height={50}
                        />
                        <div className={styles.priceWrapper}>
                          <span className={styles.name}>{formatProductName(name, category)}</span>
                          <span className={styles.price}>{formatToCurrency(price)}</span>
                        </div>
                        <span className={styles.itemQuantity}>x{quantity}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
            {cartItemCount > 1 ? (
              <Fragment>
                <span className={styles.bar} />
                <button
                  className={styles.cartQuantity}
                  onClick={() => setIsHiddenMenuActive((prev) => !prev)}
                >
                  {isHiddenMenuActive ? 'View less' : `and ${itemMinusCurrent} other item${itemMessage}`}
                </button>
              </Fragment>
            ) : null}
          </li>
          <li className={styles.detailItem}>
            <span className={`${styles.expand} ${(isHiddenMenuActive && styles.expandActive) || ''}`} />
            <span className={styles.totalHeading}>Grand Total</span>
            <span className={styles.totalPrice}>{formatToCurrency(shoppingCart.totalAmount)}</span>
          </li>
        </ul>
        <Link className={styles.button} onClick={removeAllShoppingCartItems} href='/'>
          Back to Home
        </Link>
      </div>
    </dialog>
  ) : null;
};
