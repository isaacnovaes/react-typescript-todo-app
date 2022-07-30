import * as React from "react";
import styles from "./Header.module.scss";
import { Context } from "../../context/ContextProvider";
import useTheme from "../../hooks/themeHook";

function Header() {
    const { dispatch } = React.useContext(Context);
    const isDarkTheme = useTheme();
    const buttonClasses = isDarkTheme ? "" : styles.light;

    return (
        <header className={styles.header}>
            <h1>TODO</h1>
            <button
                className={buttonClasses}
                type="button"
                onClick={() => dispatch({ type: "toggle theme" })}
            />
        </header>
    );
}

export default Header;
