import { useAppContextDispatch, useIsDarkTheme } from '../../hooks/hooks';
import styles from './Header.module.scss';

function Header() {
    const dispatch = useAppContextDispatch();
    const isDarkTheme = useIsDarkTheme();
    if (dispatch === null || isDarkTheme === null) return null;

    const buttonClasses = isDarkTheme ? '' : styles.light;

    return (
        <header className={styles.header}>
            <h1>TODO</h1>
            <button
                className={buttonClasses}
                type='button'
                onClick={() => dispatch({ type: 'toggle theme' })}
            />
        </header>
    );
}

export default Header;
