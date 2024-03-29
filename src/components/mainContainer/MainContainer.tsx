import styles from './MainContainer.module.scss';

type ChildrenType = { children: React.ReactNode };

export default function MainContainer({ children }: ChildrenType) {
    return <main className={styles.mainContainer}>{children}</main>;
}
