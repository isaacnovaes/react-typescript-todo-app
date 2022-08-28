import { useContext } from 'react';
import styles from './TodoItem.module.scss';
import useTheme from '../../hooks/themeHook';
import { Context } from '../../context/ContextProvider';

function TodoItem(todo: { id: string; todo: string; complete: boolean }) {
    const isDark = useTheme();
    const { dispatch } = useContext(Context);

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
