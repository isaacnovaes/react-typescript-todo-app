import styles from "./CreateTodo.module.scss";
import * as React from "react";
import useTheme from "../../hooks/themeHook";

interface CreateTodoProps {
	onCreateCompleteTodo: () => void;
	onEnterTodo: (event: React.KeyboardEvent) => void;
	createCompletedTodo: boolean;
	inputRef: React.RefObject<HTMLInputElement>;
}

export default function CreateTodo({
	onCreateCompleteTodo,
	onEnterTodo,
	createCompletedTodo,
	inputRef,
}: CreateTodoProps) {
	const isDark = useTheme();

	return (
		<div
			className={`${styles.CreateTodo} ${isDark ? "" : styles.CreateTodoLight}`}
		>
			<button
				type="button"
				onClick={onCreateCompleteTodo}
				className={`${createCompletedTodo ? styles.CreateCompleted : ""}`}
			></button>
			<input
				type="text"
				placeholder="Create a new todo..."
				onKeyUp={onEnterTodo}
				ref={inputRef}
			/>
		</div>
	);
}
