import { useContext } from "react";
import { Context } from "../../context/ContextProvider";
import styles from "./AppBackground.module.scss";

function AppBackground() {
    const {
        state: { theme },
    } = useContext(Context);
    return (
        <div
            className={`${styles.appBackground} ${theme === "light" ? styles.lightTheme : ""}`}
        ></div>
    );
}

export default AppBackground;
