'use client';

import type { Product } from '@/lib/zod/schemas/product.schema';
import { useShoppingCart } from '@/hooks/useShoppingCart';
import { useState } from 'react';
import styles from './AddToCart.module.scss';

export const AddToCart = ({ product }: { product: Product }) => {
  const handleItemQuantity = (action: number) => setItemQuantity((prev) => prev + action);
  const { incrementShoppingCartItem } = useShoppingCart();
  const [itemQuantity, setItemQuantity] = useState(1);

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
      <button className={styles.addButton} onClick={() => incrementShoppingCartItem?.(product, itemQuantity)}>
        Add to Cart
      </button>
    </div>
  );
};
