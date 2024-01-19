import styles from './FeaturedProducts.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const FeaturedProducts = () => {
  return (
    <ul className={styles.featuredList}>
      <li className={styles.featuredItem}>
        <picture className={styles.imageWrapper}>
          <source media='(width <= 525px)' srcSet='/assets/images/mobile/image-speaker-zx9.png' />
          <source media='(width <= 1180px)' srcSet='/assets/images/tablet/image-speaker-zx9.png' />
          <Image
            className={styles.mainImage}
            src='/assets/images/desktop/image-speaker-zx9.png'
            alt='speaker'
            width={410}
            height={495}
            quality={100}
          />
        </picture>
        <div className={styles.mainWrapper}>
          <span className={styles.mainHeading}>ZX9 Speaker</span>
          <p className={styles.mainDescription}>
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </p>
          <Link href='/speakers/zx9-speaker' className={styles.link}>
            See Product
          </Link>
        </div>
      </li>
      <li className={styles.featuredItem}>
        <div className={styles.secondaryWrapper}>
          <span className={styles.heading}>ZX7 Speaker</span>
          <Link href='/speakers/zx7-speaker' className={styles.link}>
            See Product
          </Link>
        </div>
      </li>

      <li className={styles.featuredItem}>
        <div className={styles.emptyBackground}></div>
        <div className={styles.secondaryWrapper}>
          <span className={styles.heading}>YX1 Earphones</span>
          <Link href='/earphones/yx1-earphones' className={styles.link}>
            See Product
          </Link>
        </div>
      </li>
    </ul>
  );
};
