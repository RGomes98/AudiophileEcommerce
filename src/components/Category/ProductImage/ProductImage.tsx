import type { CategoryImage } from '@/lib/zod/schemas/product.schema';
import styles from './ProductImage.module.scss';
import Image from 'next/image';

export const ProductImage = ({ categoryImage }: { categoryImage: CategoryImage }) => {
  return (
    <picture className={styles.imageWrapper}>
      <source media='(width <= 550px)' srcSet={categoryImage.mobile} />
      <source media='(width <= 1180px)' srcSet={categoryImage.tablet} />
      <Image
        className={styles.image}
        src={categoryImage.desktop}
        alt='product-image'
        quality={100}
        width={540}
        height={560}
      />
    </picture>
  );
};
