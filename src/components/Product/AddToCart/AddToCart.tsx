'use client';

import { useState } from 'react';
import styles from './AddToCart.module.scss';

export const AddToCart = () => {
  const [itemQuantity, setItemQuantity] = useState(1);
  const handleItemQuantity = (action: number) => setItemQuantity((prev) => prev + action);

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
      <button className={styles.addButton}>Add to Cart</button>
    </div>
  );
};
