import { TodoInterface } from "../todoListContainer/TodoListContainer";
import styles from "./Todos.module.scss";
import TodoItem from "../TodoItem/TodoItem";

export default function Todos({ todos }: { todos: TodoInterface[] }) {
	return (
		<div className={styles.Todos}>
			{todos.map(todo => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</div>
	);
}
