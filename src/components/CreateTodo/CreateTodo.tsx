import styles from './CreateTodo.module.scss';
import { useContext, useRef, useState, useCallback } from 'react';
import useTheme from '../../hooks/themeHook';
import { Context } from '../../context/ContextProvider';

export default function CreateTodo() {
    const isDark = useTheme();

    const { dispatch } = useContext(Context);

    const inputRef = useRef<HTMLInputElement>(null);

    const [createCompletedTodo, setCreateCompletedTodo] = useState(false);

    const onAddTodo = useCallback(
        (event: React.KeyboardEvent) => {
            if (!inputRef.current || !inputRef.current.value.trim()) return;

            if (event.key !== 'Enter') return;

            dispatch({
                type: 'add todo',
                todo: inputRef.current.value.trim(),
                complete: createCompletedTodo,
            });

            inputRef.current.value = '';
        },
        [createCompletedTodo, dispatch]
    );

    const onCreateCompleteTodo = useCallback(() => {
        setCreateCompletedTodo((current) => !current);
    }, []);

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
                ref={inputRef}
            />
        </div>
    );
}
