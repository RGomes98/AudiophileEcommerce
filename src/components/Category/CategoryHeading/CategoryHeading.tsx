import type { Product } from '@/lib/zod/schemas/product.schema';
import styles from './CategoryHeading.module.scss';

export const CategoryHeading = ({ heading }: { heading: Product['category'] }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{heading}</h1>
    </div>
  );
};
