import { ShoppingCartButton } from './ShoppingCartButton/ShoppingCartButton';
import { NavigationLinks } from './NavigationLinks/NavigationLinks';
import { LinksButton } from './LinksButton/LinksButton';
import { Logo } from './Logo/Logo';
import styles from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.mainWrapper}>
        <div className={styles.navigationWrapper}>
          <LinksButton />
          <Logo />
          <div className={styles.linkWrapper}>
            <NavigationLinks />
          </div>
        </div>
        <ShoppingCartButton />
      </div>
    </nav>
  );
};
