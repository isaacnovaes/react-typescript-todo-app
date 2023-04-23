import { useAppContextDispatch, useIsDarkTheme } from '../../hooks/hooks';
import styles from './TodoItem.module.scss';

function TodoItem(todo: { id: string; todo: string; complete: boolean }) {
    const isDark = useIsDarkTheme();
    const dispatch = useAppContextDispatch();

    if (isDark === null || dispatch === null) return null;

    return (
        <div
            key={todo.id}
            className={`${styles.todoItem} ${
                isDark ? '' : styles.todoItemLight
            }`}
        >
            <button
                type='button'
                className={`${styles.createTodoToggleButton} ${
                    todo.complete ? styles.completedTodo : ''
                }`}
                onClick={() =>
                    dispatch({ type: 'toggle todo complete', todoID: todo.id })
                }
            />
            <p className={`${todo.complete ? styles.todoCompleted : ''}`}>
                {todo.todo}
            </p>
            <button
                type='button'
                className={styles.closeTodo}
                onClick={() =>
                    dispatch({ type: 'remove todo', todoID: todo.id })
                }
            />
        </div>
    );
}

export default TodoItem;
