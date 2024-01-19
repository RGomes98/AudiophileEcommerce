import { ProductImage } from '@/components/Category/ProductImage/ProductImage';
import { ProductTitle } from '@/components/Category/ProductTitle/ProductTitle';
import { formatToCurrency } from '@/utils/formatToCurrency';
import { Product } from '@/lib/zod/schemas/product.schema';
import { BackButton } from '../BackButton/BackButton';
import { AddToCart } from '../AddToCart/AddToCart';
import styles from './ProductDescription.module.scss';

type ProductDescription = Pick<Product, 'image' | 'name' | 'description' | 'price' | 'id'> & {
  isProductNew: Product['new'];
};

export const ProductDescription = (props: ProductDescription) => {
  const { image, name, description, price, id, isProductNew } = props;

  return (
    <div className={styles.container}>
      <BackButton />
      <div className={styles.productWrapper}>
        <ProductImage categoryImage={image} />
        <div className={styles.headingWrapper}>
          <ProductTitle {...{ name, isProductNew }} />
          <p className={styles.description}>{description}</p>
          <span className={styles.price}>{formatToCurrency(price)}</span>
          <AddToCart />
        </div>
      </div>
    </div>
  );
};
