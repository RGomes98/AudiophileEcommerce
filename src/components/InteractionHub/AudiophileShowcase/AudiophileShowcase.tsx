import styles from './AudiophileShowcase.module.scss';
import Image from 'next/image';

export const AudiophileShowcase = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>
          Bringing you the <span className={styles.variant}>best</span> audio gear
        </h2>
        <p className={styles.text}>
          Located at the heart of New York City, Audiophile is the premier store for high end headphones,
          earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms
          available for you to browse and experience a wide range of our products. Stop by our store to meet
          some of the fantastic people who make Audiophile the best place to buy your portable audio
          equipment.
        </p>
      </div>
      <picture className={styles.imageWrapper}>
        <source media='(width <= 550px)' srcSet='/assets/images/mobile/image-best-gear.jpg' />
        <source media='(width <= 1180px)' srcSet='/assets/images/tablet/image-best-gear.jpg' />
        <Image
          className={styles.image}
          src='/assets/images/desktop/image-best-gear.jpg'
          alt='speaker'
          quality={100}
          width={540}
          height={588}
        />
      </picture>
    </div>
  );
};
