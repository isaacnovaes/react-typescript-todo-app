import {
    useAppContextDispatch,
    useFilter,
    useIsDarkTheme,
} from '../../hooks/hooks';
import { type TodoInterface } from '../TodoListContainer/TodoListContainer';
import { FilterButtons } from './FilterButtons/FilterButtons';
import styles from './TodoSummary.module.scss';

const TodoSummary = ({ todos }: { todos: TodoInterface[] }) => {
    const isDark = useIsDarkTheme();
    const filter = useFilter();
    const dispatch = useAppContextDispatch();

    if (isDark === null || filter === null || dispatch === null) return null;

    const leftTodos = todos.reduce((acc, todo) => {
        if (!todo.complete) acc++;
        return acc;
    }, 0);

    let summaryMessage;

    if (leftTodos >= 1) {
        summaryMessage = `${leftTodos} ${
            leftTodos > 1 ? 'items' : 'item'
        } left`;
    } else {
        summaryMessage = 'No item left';
    }

    return (
        <>
            <div
                className={`${styles.todoSummary} ${
                    isDark ? '' : styles.todoSummaryLight
                }`}
            >
                <span className={styles.itemsLeft}>{summaryMessage}</span>
                <FilterButtons type='big' />
                <button
                    type='button'
                    className={styles.clearButton}
                    onClick={() => dispatch({ type: 'remove completed' })}
                >
                    Clear Completed
                </button>
            </div>
            <FilterButtons type='small' />
        </>
    );
};

export default TodoSummary;
