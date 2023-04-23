import { useCallback, useState } from 'react';
import { useAppContextDispatch, useIsDarkTheme } from '../../hooks/hooks';
import styles from './CreateTodo.module.scss';

export default function CreateTodo() {
    const isDark = useIsDarkTheme();
    const dispatch = useAppContextDispatch();

    const [createCompletedTodo, setCreateCompletedTodo] = useState(false);

    const onAddTodo: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
        (event) => {
            if (!event.target.value.trim()) return;

            if (event.key !== 'Enter') return;

            if (dispatch === null) return;

            dispatch({
                type: 'add todo',
                todo: event.target.value.trim(),
                complete: createCompletedTodo,
            });

            event.target.value = '';
        },
        [createCompletedTodo, dispatch]
    );

    const onCreateCompleteTodo = useCallback(() => {
        setCreateCompletedTodo((current) => !current);
    }, []);

    if (isDark === null) return null;

    return (
        <div
            className={`${styles.createTodo} ${
                isDark ? '' : styles.createTodoLight
            }`}
        >
            <button
                type='button'
                onClick={onCreateCompleteTodo}
                className={`${
                    createCompletedTodo ? styles.CreateCompleted : ''
                }`}
            />
            <input
                type='text'
                placeholder='Create a new todo...'
                onKeyUp={onAddTodo}
            />
        </div>
    );
}
