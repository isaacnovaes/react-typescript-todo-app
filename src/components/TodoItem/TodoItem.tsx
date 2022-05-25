import styles from "./TodoItem.module.scss";
import useTheme from "../../hooks/themeHook";

function TodoItem(Todo: {
	id: number;
	todo: string;
	complete: boolean;
	onClose: (todoID: number) => void;
	onToggle: (todoID: number) => void;
}) {
	const isDark = useTheme();

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
				onClick={() => Todo.onToggle(Todo.id)}
			></button>
			<p className={`${Todo.complete ? styles.TodoCompleted : " "}`}>
				{Todo.todo}
			</p>
			<button
				type="button"
				className={styles.CloseTodo}
				onClick={() => Todo.onClose(Todo.id)}
			></button>
		</div>
	);
}

export default TodoItem;
