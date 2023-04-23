import { useIsDarkTheme } from '../../hooks/hooks';
import styles from './AppBackground.module.scss';

function AppBackground() {
    const isDarkTheme = useIsDarkTheme();
    if (isDarkTheme === null) return null;

    return (
        <div
            className={`${styles.appBackground} ${
                isDarkTheme ? '' : styles.lightTheme
            }`}
        />
    );
}

export default AppBackground;
