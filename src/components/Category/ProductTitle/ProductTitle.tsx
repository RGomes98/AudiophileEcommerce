import styles from './ProductTitle.module.scss';

export const ProductTitle = ({ name, isProductNew }: { name: string; isProductNew: boolean }) => {
  return (
    <div className={styles.headingWrapper}>
      {(isProductNew && <span className={styles.newProduct}>New product</span>) || null}
      <h2 className={styles.heading}>{name}</h2>
    </div>
  );
};
