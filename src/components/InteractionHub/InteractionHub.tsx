import { CategoryPanel } from './CategoryPanel/CategoryPanel';
import { FeaturedProducts } from './FeaturedProducts/FeaturedProducts';
import styles from './InteractionHub.module.scss';

export const InteractionHub = () => {
  return (
    <section className={styles.container}>
      <CategoryPanel />
    </section>
  );
};
