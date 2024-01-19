import styles from './Featured.module.scss';
import Link from 'next/link';

export const Featured = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.text}>New product</span>
        <h1 className={styles.name}>XX99 Mark II Headphones</h1>
        <p className={styles.description}>
          Experience natural, lifelike audio and exceptional build quality made for the passionate music
          enthusiast.
        </p>
        <Link className={styles.link} href='/headphones/xx99-mark-two-headphones'>
          See Product
        </Link>
      </div>
    </section>
  );
};
