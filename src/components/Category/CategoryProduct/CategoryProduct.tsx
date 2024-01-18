import type { Product } from '@/lib/zod/schemas/product.schema';
import type { Category } from '@/utils/fetchData';
import styles from './CategoryProduct.module.scss';
import Image from 'next/image';
import Link from 'next/link';

type CategoryProduct = Pick<Product, 'categoryImage' | 'name' | 'description' | 'slug'> & {
  isProductNew: Product['new'];
  category: Category;
  index: number;
};

export const CategoryProduct = (props: CategoryProduct) => {
  const { index, isProductNew, name, description, categoryImage, slug, category } = props;
  const isEven = index % 2 === 0;

  return (
    <div className={`${styles.container} ${(isEven && styles.toggleGrid) || ''}`}>
      <picture className={`${styles.imageWrapper} ${(isEven && styles.toggleImage) || ''}`}>
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
      <div className={styles.detailsWrapper}>
        <div className={styles.headingWrapper}>
          {(isProductNew && <span className={styles.newProduct}>New product</span>) || null}
          <h2 className={styles.heading}>{name}</h2>
        </div>
        <p className={styles.text}>{description}</p>
        <Link className={styles.link} href={`/${category}/${slug}`}>
          See Product
        </Link>
      </div>
    </div>
  );
};
