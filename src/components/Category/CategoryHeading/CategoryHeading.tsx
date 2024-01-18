import type { Category } from '@/utils/fetchData';
import styles from './CategoryHeading.module.scss';

export const CategoryHeading = ({ heading }: { heading: Category }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{heading}</h1>
    </div>
  );
};
