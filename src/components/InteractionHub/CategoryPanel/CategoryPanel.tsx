import styles from './CategoryPanel.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const CategoryPanel = () => {
  return (
    <ul className={styles.categoryList}>
      <li className={styles.categoryItem}>
        <Link href='#' className={styles.categoryLink}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              src='/assets/images/image-category-thumbnail-headphones.png'
              alt='headphones'
              width={180}
              height={200}
              quality={100}
            />
          </div>
          <div className={styles.categoryWrapper}>
            <span className={styles.categoryName}>Headphones</span>
            <span className={styles.categoryShop}>Shop</span>
          </div>
        </Link>
      </li>
      <li className={styles.categoryItem}>
        <Link href='#' className={styles.categoryLink}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              src='/assets/images/image-category-thumbnail-speakers.png'
              alt='speakers'
              width={180}
              height={200}
              quality={100}
            />
          </div>
          <div className={styles.categoryWrapper}>
            <span className={styles.categoryName}>Speakers</span>
            <span className={styles.categoryShop}>Shop</span>
          </div>
        </Link>
      </li>
      <li className={styles.categoryItem}>
        <Link href='#' className={styles.categoryLink}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              src='/assets/images/image-category-thumbnail-earphones.png'
              alt='earphones'
              width={180}
              height={200}
              quality={100}
            />
          </div>
          <div className={styles.categoryWrapper}>
            <span className={styles.categoryName}>Earphones</span>
            <span className={styles.categoryShop}>Shop</span>
          </div>
        </Link>
      </li>
    </ul>
  );
};
