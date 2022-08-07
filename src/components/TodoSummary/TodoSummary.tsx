import { useContext } from 'react';
import { Context } from '../../context/ContextProvider';
import type { TodoInterface } from '../TodoListContainer/TodoListContainer';
import useTheme from '../../hooks/themeHook';
import styles from './TodoSummary.module.scss';

const TodoSummary = ({ todos }: { todos: TodoInterface[] }) => {
    const isDark = useTheme();

    const { dispatch } = useContext(Context);

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
        <div
            className={`${styles.todoSummary} ${
                isDark ? '' : styles.todoSummaryLight
            }`}
        >
            <span className={styles.itemsLeft}>{summaryMessage}</span>
            <div style={{ width: '20%', display: 'flex', columnGap: '20%' }}>
                <button
                    type='button'
                    style={{ cursor: 'pointer' }}
                    onClick={() => dispatch({ type: 'filter', filter: 'all' })}
                >
                    All
                </button>
                <button
                    type='button'
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                        dispatch({ type: 'filter', filter: 'active' })
                    }
                >
                    Active
                </button>
                <button
                    type='button'
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                        dispatch({ type: 'filter', filter: 'completed' })
                    }
                >
                    Completeed
                </button>
            </div>
            <button
                type='button'
                className={styles.clearButton}
                onClick={() => dispatch({ type: 'remove completed' })}
            >
                Clear Completed
            </button>
        </div>
    );
};

export default TodoSummary;
