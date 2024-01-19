import { Other } from '@/lib/zod/schemas/product.schema';
import styles from './RecommendedProducts.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const RecommendedProducts = ({ recommendedProducts }: { recommendedProducts: Other[] }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>You May Also Like</h3>
      <ul className={styles.productList}>
        {recommendedProducts.map(({ name, image, category, slug }) => {
          return (
            <li key={slug} className={styles.productItem}>
              <picture className={styles.imageWrapper}>
                <source media='(width <= 550px)' srcSet={image.mobile} />
                <source media='(width <= 1180px)' srcSet={image.tablet} />
                <Image
                  className={styles.image}
                  src={image.desktop}
                  alt={name}
                  quality={100}
                  width={350}
                  height={318}
                />
              </picture>
              <h5 className={styles.name}>{name}</h5>
              <Link className={styles.link} href={`/${category}/${slug}`}>
                See Product
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
