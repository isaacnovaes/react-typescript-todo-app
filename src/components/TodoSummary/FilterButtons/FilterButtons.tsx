import {
    useAppContextDispatch,
    useFilter,
    useIsDarkTheme,
} from '../../../hooks/hooks';
import styles from './FilterButtons.module.scss';

export const FilterButtons = ({ type }: { type: 'big' | 'small' }) => {
    const isDarkTheme = useIsDarkTheme();
    const filter = useFilter();
    const dispatch = useAppContextDispatch();

    if (isDarkTheme === null || filter === null || dispatch === null)
        return null;

    return (
        <div
            className={`${styles.filterButtons} ${
                isDarkTheme ? '' : styles.light
            } ${styles[type]}`}
        >
            <button
                type='button'
                onClick={() => dispatch({ type: 'filter', filter: 'all' })}
                className={`${filter.type === 'all' ? styles.active : ''}`}
            >
                All
            </button>
            <button
                type='button'
                onClick={() => dispatch({ type: 'filter', filter: 'active' })}
                className={`${filter.type === 'active' ? styles.active : ''}`}
            >
                Active
            </button>
            <button
                type='button'
                onClick={() =>
                    dispatch({ type: 'filter', filter: 'completed' })
                }
                className={`${
                    filter.type === 'completed' ? styles.active : ''
                }`}
            >
                Completed
            </button>
        </div>
    );
};
