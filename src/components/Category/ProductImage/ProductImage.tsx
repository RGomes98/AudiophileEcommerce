import type { CategoryImage } from '@/lib/zod/schemas/product.schema';
import styles from './ProductImage.module.scss';
import Image from 'next/image';

type ProductImage = {
  width: number;
  height: number;
  image: CategoryImage;
};

export const ProductImage = ({ width, height, image }: ProductImage) => {
  return (
    <picture className={styles.imageWrapper}>
      <source media='(width <= 550px)' srcSet={image.mobile} />
      <source media='(width <= 1180px)' srcSet={image.tablet} />
      <Image
        className={styles.image}
        src={image.desktop}
        alt='product-image'
        quality={100}
        width={width}
        height={height}
      />
    </picture>
  );
};
