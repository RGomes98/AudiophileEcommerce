import { ShoppingCartButton } from './ShoppingCartButton/ShoppingCartButton';
import { NavigationLinks } from './NavigationLinks/NavigationLinks';
import { Logo } from './Logo/Logo';
import styles from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.mainWrapper}>
        <div className={styles.navigationWrapper}>
          <Logo />
          <NavigationLinks />
        </div>
        <ShoppingCartButton />
      </div>
    </nav>
  );
};
