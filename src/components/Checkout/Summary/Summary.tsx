import { formatProductName } from '@/utils/formatProductName';
import { formatToCurrency } from '@/utils/formatToCurrency';
import { useShoppingCart } from '@/hooks/useShoppingCart';
import { useMounted } from '@/hooks/useMounted';
import { Submit } from '../Submit/Submit';
import styles from './Summary.module.scss';
import Image from 'next/image';

export const Summary = () => {
  const { validShoppingCart } = useShoppingCart();
  const { isMounted } = useMounted();

  const isCartFilled = validShoppingCart?.productsList.length;

  return isMounted ? (
    <div className={styles.container}>
      <h6 className={styles.heading}>Summary</h6>
      {!isCartFilled ? (
        <div className={styles.emptyWrapper}>
          <span className={styles.emptyText}>Empty Cart.</span>
        </div>
      ) : (
        <ul className={styles.cartList}>
          {validShoppingCart?.productsList.map(({ image, name, category, quantity, price }) => {
            return (
              <li className={styles.cartItem} key={name}>
                <Image className={styles.image} src={image.cart} alt={name} width={64} height={64} />
                <div className={styles.nameWrapper}>
                  <span className={styles.name}>{formatProductName(name, category)}</span>
                  <span className={styles.price}>{formatToCurrency(price)}</span>
                </div>
                <span className={styles.quantity}>x{quantity}</span>
              </li>
            );
          })}
        </ul>
      )}
      <ul className={styles.priceList}>
        <li className={styles.priceItem}>
          <span className={styles.priceHeading}>Total</span>
          <span className={styles.priceValue}>
            {formatToCurrency(validShoppingCart?.subtotalAmount || 0)}
          </span>
        </li>
        <li className={styles.priceItem}>
          <span className={styles.priceHeading}>Shipping</span>
          <span className={styles.priceValue}>
            {formatToCurrency(validShoppingCart?.shippingTaxAmount || 0)}
          </span>
        </li>
        <li className={styles.priceItem}>
          <span className={styles.priceHeading}>VAT (Included)</span>
          <span className={styles.priceValue}>
            {formatToCurrency(validShoppingCart?.valueTaxAddedAmount || 0)}
          </span>
        </li>
        <li className={styles.priceItem}>
          <span className={styles.priceHeading}>Grand Total</span>
          <span className={styles.priceValue}>{formatToCurrency(validShoppingCart?.totalAmount || 0)}</span>
        </li>
      </ul>
      <Submit itemCount={validShoppingCart?.itemCount || 0} />
    </div>
  ) : null;
};
