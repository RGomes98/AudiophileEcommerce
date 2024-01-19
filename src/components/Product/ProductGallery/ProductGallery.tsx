import type { Gallery } from '@/lib/zod/schemas/product.schema';
import styles from './ProductGallery.module.scss';
import Image from 'next/image';

export const ProductGallery = ({ first, second, third }: Gallery) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <picture className={styles.picture}>
          <source media='(width <= 550px)' srcSet={first.mobile} />
          <source media='(width <= 1180px)' srcSet={first.tablet} />
          <Image
            className={styles.image}
            src={first.desktop}
            alt='gallery-image'
            quality={100}
            width={445}
            height={280}
          />
        </picture>
        <picture className={styles.picture}>
          <source media='(width <= 550px)' srcSet={second.mobile} />
          <source media='(width <= 1180px)' srcSet={second.tablet} />
          <Image
            className={styles.image}
            src={second.desktop}
            alt='gallery-image'
            quality={100}
            width={445}
            height={280}
          />
        </picture>
      </div>
      <picture className={styles.picture}>
        <source media='(width <= 550px)' srcSet={third.mobile} />
        <source media='(width <= 1180px)' srcSet={third.tablet} />
        <Image
          className={styles.image}
          src={third.desktop}
          alt='gallery-image'
          quality={100}
          width={635}
          height={592}
        />
      </picture>
    </div>
  );
};
