// import { FeaturedProducts } from './FeaturedProducts/FeaturedProducts';
import { CategoryPanel } from './CategoryPanel/CategoryPanel';
import styles from './InteractionHub.module.scss';

export const InteractionHub = () => {
  return (
    <section className={styles.container}>
      <CategoryPanel />
      {/* <FeaturedProducts /> */}
    </section>
  );
};
