import { NavigationLinksButton } from './NavigationLinksButton/NavigationLinksButton';
import { ShoppingCartButton } from './ShoppingCartButton/ShoppingCartButton';
import { NavigationLinks } from './NavigationLinks/NavigationLinks';
import { DropdownMenu } from './DropdownMenu/DropdownMenu';
import { Logo } from './Logo/Logo';
import { Fragment } from 'react';
import styles from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <Fragment>
      <nav className={styles.navigation}>
        <div className={styles.mainWrapper}>
          <div className={styles.navigationWrapper}>
            <NavigationLinksButton />
            <Logo />
            <div className={styles.linkWrapper}>
              <NavigationLinks />
            </div>
          </div>
          <ShoppingCartButton />
        </div>
      </nav>
      <DropdownMenu />
    </Fragment>
  );
};
