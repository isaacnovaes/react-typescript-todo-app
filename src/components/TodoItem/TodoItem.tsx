import * as React from "react";
import styles from "./TodoItem.module.scss";
import useTheme from "../../hooks/themeHook";
import { Context } from "../../context/ContextProvider";

function TodoItem(Todo: { id: number; todo: string; complete: boolean }) {
	const isDark = useTheme();
	const { dispatch } = React.useContext(Context);

	return (
		<div
			key={Todo.id}
			className={`${styles.TodoItem} ${isDark ? "" : styles.TodoItemLight}`}
		>
			<button
				type="button"
				className={`${styles.CreateTudoToggleButton} ${
					Todo.complete ? styles.CompletedTodo : ""
				}`}
				onClick={() =>
					dispatch({ type: "toggle todo complete", todoID: Todo.id })
				}
			></button>
			<p className={`${Todo.complete ? styles.TodoCompleted : " "}`}>
				{Todo.todo}
			</p>
			<button
				type="button"
				className={styles.CloseTodo}
				onClick={() => dispatch({ type: "remove todo", todoID: Todo.id })}
			></button>
		</div>
	);
}

export default TodoItem;
