import { type ReactNode, Fragment } from 'react';
import styles from './Category.module.scss';

type Children = { children: ReactNode };

export const Category = ({ children }: Children) => <Fragment>{children}</Fragment>;
const Container = ({ children }: Children) => <section className={styles.container}>{children}</section>;
Category.Container = Container;
