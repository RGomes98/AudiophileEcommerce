import type { Product, CategoryImage } from '@/lib/zod/schemas/product.schema';
import styles from './ProductImage.module.scss';
import Image from 'next/image';

type ProductImage = { category: Product['category']; categoryImage: CategoryImage };

export const ProductImage = ({ category, categoryImage }: ProductImage) => {
  return (
    <picture className={styles.imageWrapper}>
      <source media='(width <= 550px)' srcSet={categoryImage.mobile} />
      <source media='(width <= 1180px)' srcSet={categoryImage.tablet} />
      <Image
        className={styles.image}
        src={categoryImage.desktop}
        alt={category}
        quality={100}
        width={540}
        height={560}
      />
    </picture>
  );
};
