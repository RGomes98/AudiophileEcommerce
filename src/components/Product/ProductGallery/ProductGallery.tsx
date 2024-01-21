import { ProductImage } from '@/components/Category/ProductImage/ProductImage';
import type { Gallery } from '@/lib/zod/schemas/product.schema';
import styles from './ProductGallery.module.scss';

export const ProductGallery = ({ first, second, third }: Gallery) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <ProductImage width={445} height={280} image={first} />
        <ProductImage width={445} height={280} image={second} />
      </div>
      <ProductImage width={635} height={592} image={third} />
    </div>
  );
};
