import type { Product } from '@/lib/zod/schemas/product.schema';
import { ProductImage } from '../ProductImage/ProductImage';
import { ProductTitle } from '../ProductTitle/ProductTitle';
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
        <ProductTitle {...{ name, isProductNew }} />
        <p className={styles.text}>{description}</p>
        <Link className={styles.link} href={`/${category}/${slug}`}>
          See Product
        </Link>
      </div>
    </div>
  );
};
