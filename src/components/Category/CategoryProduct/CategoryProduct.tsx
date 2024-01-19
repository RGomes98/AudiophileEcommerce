import type { Product } from '@/lib/zod/schemas/product.schema';
import { ProductImage } from '../ProductImage/ProductImage';
import styles from './CategoryProduct.module.scss';
import Link from 'next/link';

type CategoryProduct = Pick<Product, 'categoryImage' | 'name' | 'description' | 'slug'> & {
  isProductNew: Product['new'];
  category: Product['category'];
};

export const CategoryProduct = (props: CategoryProduct) => {
  const { isProductNew, name, description, categoryImage, slug, category } = props;

  return (
    <div className={styles.container}>
      <ProductImage {...{ category, categoryImage }} />
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
