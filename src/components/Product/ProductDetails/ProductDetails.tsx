import { ProductFeatures } from '../ProductFeatures/ProductFeatures';
import { ProductContent } from '../ProductContent/ProductContent';
import type { Product } from '@/lib/zod/schemas/product.schema';
import styles from './ProductDetails.module.scss';

type ProductDetails = { features: string; includes: Product['includes'] };

export const ProductDetails = ({ features, includes }: ProductDetails) => {
  return (
    <div className={styles.container}>
      <ProductFeatures features={features} />
      <ProductContent includes={includes} />
    </div>
  );
};
