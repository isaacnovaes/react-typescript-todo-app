import { useContext } from "react";
import styles from "./TodoItem.module.scss";
import useTheme from "../../hooks/themeHook";
import { Context } from "../../context/ContextProvider";

function TodoItem(Todo: { id: number; todo: string; complete: boolean }) {
    const isDark = useTheme();
    const { dispatch } = useContext(Context);

    return (
        <div key={Todo.id} className={`${styles.todoItem} ${isDark ? "" : styles.todoItemLight}`}>
            <button
                type="button"
                className={`${styles.createTudoToggleButton} ${
                    Todo.complete ? styles.completedTodo : ""
                }`}
                onClick={() => dispatch({ type: "toggle todo complete", todoID: Todo.id })}
            />
            <p className={`${Todo.complete ? styles.todoCompleted : ""}`}>{Todo.todo}</p>
            <button
                type="button"
                className={styles.closeTodo}
                onClick={() => dispatch({ type: "remove todo", todoID: Todo.id })}
            />
        </div>
    );
}

export default TodoItem;
