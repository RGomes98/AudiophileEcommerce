import type { Product } from '@/lib/zod/schemas/product.schema';
import styles from './ProductContent.module.scss';

export const ProductContent = ({ includes }: { includes: Product['includes'] }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>In the Box</h3>
      <ul className={styles.contentList}>
        {includes.map(({ item, quantity }) => {
          return (
            <li className={styles.contentItem} key={item}>
              <span className={styles.quantity}>{quantity}x</span>
              <span className={styles.item}>{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
