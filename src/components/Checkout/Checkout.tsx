import { type ReactNode, Fragment } from 'react';
import styles from './Checkout.module.scss';

type Children = { children: ReactNode };

export const Checkout = ({ children }: Children) => <Fragment>{children}</Fragment>;
const Container = ({ children }: Children) => <section className={styles.container}>{children}</section>;
Checkout.Container = Container;
