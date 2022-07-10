import styles from "./CreateTodo.module.scss";
import * as React from "react";
import useTheme from "../../hooks/themeHook";
import { Context } from "../../context/ContextProvider";

export default function CreateTodo() {
    const isDark = useTheme();

    const { dispatch } = React.useContext(Context);

    const inputRef = React.useRef<HTMLInputElement>(null);

    const [createCompletedTodo, setCreateCompletedTodo] = React.useState(false);

    const onAddTodo = React.useCallback(
        (event: React.KeyboardEvent) => {
            if (!inputRef.current || !inputRef.current.value.trim()) return;

            if (event.key !== "Enter") return;

            dispatch({
                type: "add todo",
                todo: inputRef.current.value.trim(),
                complete: createCompletedTodo,
            });

            inputRef.current.value = "";
        },
        [createCompletedTodo, dispatch],
    );

    const onCreateCompleteTodo = React.useCallback(() => {
        setCreateCompletedTodo((current) => !current);
    }, []);

    return (
        <div
            className={`${styles.CreateTodo} ${
                isDark ? "" : styles.CreateTodoLight
            }`}
        >
            <button
                type="button"
                onClick={onCreateCompleteTodo}
                className={`${
                    createCompletedTodo ? styles.CreateCompleted : ""
                }`}
            ></button>
            <input
                type="text"
                placeholder="Create a new todo..."
                onKeyUp={onAddTodo}
                ref={inputRef}
            />
        </div>
    );
}
