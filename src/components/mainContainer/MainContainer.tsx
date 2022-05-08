import * as React from "react";
import styles from "./MainContainer.module.scss";

type ChildrenType = { children: React.ReactNode };

export default function MainContainer({ children }: ChildrenType) {
	return <div className={styles.MainContainer}>{children}</div>;
}