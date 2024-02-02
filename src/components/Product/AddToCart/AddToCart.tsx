'use client';

import type { Product } from '@/lib/zod/schemas/product.schema';
import { formatProductName } from '@/utils/formatProductName';
import { useShoppingCart } from '@/hooks/useShoppingCart';
import { useToast } from '@/hooks/useToast';
import { useState } from 'react';
import styles from './AddToCart.module.scss';

export const AddToCart = ({ product }: { product: Product }) => {
  const { isMaxActiveToastsReached, createToast } = useToast();
  const { incrementShoppingCartItem } = useShoppingCart();
  const [itemQuantity, setItemQuantity] = useState(1);

  const productName = formatProductName(product.name, product.category);
  const itemAmount = itemQuantity === 1 ? 'Item' : 'Items';
  const toastMessage = `${itemQuantity} ${itemAmount} of ${productName} added to the cart.`;

  const handleItemQuantity = (action: number) => setItemQuantity((prev) => prev + action);

  const handleAddToCart = () => {
    if (isMaxActiveToastsReached) return;

    createToast('success', toastMessage, 3000);
    incrementShoppingCartItem(product, itemQuantity);
  };

  return (
    <div className={styles.container}>
      <div className={styles.quantityWrapper}>
        <button
          className={styles.quantityButton}
          onClick={() => handleItemQuantity((itemQuantity > 1 && -1) || 0)}
          aria-label='decrement-button'
        >
          -
        </button>
        <span className={styles.quantity}>{itemQuantity}</span>
        <button
          className={styles.quantityButton}
          onClick={() => handleItemQuantity((itemQuantity < 100 && 1) || 0)}
          aria-label='increment-button'
        >
          +
        </button>
      </div>
      <button className={styles.addButton} onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};
