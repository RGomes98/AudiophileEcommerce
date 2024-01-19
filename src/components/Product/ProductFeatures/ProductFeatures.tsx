import styles from './ProductFeatures.module.scss';

export const ProductFeatures = ({ features }: { features: string }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Features</h3>
      <p className={styles.text}>{features}</p>
    </div>
  );
};
