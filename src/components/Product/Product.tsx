import { type ReactNode, Fragment } from 'react';
import styles from './Product.module.scss';

type Children = { children: ReactNode };

export const Product = ({ children }: Children) => <Fragment>{children}</Fragment>;
const Container = ({ children }: Children) => <section className={styles.container}>{children}</section>;
Product.Container = Container;
