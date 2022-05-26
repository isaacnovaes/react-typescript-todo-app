import * as React from "react";
import styles from "./TodoListContainer.module.scss";
import CreateTodo from "../CreateTodo/CreateTodo";
import TodoItem from "../TodoItem/TodoItem";

export interface TodoInterface {
	id: number;
	todo: string;
	complete: boolean;
}

function TodoListContainer() {
	const [todos, setTodos] = React.useState<TodoInterface[]>([
		{ id: 95, todo: "first todo", complete: false },
		{ id: 5, todo: "second todo", complete: true },
		{ id: 45, todo: "third todo", complete: false },
	]);

	const textInputRef = React.useRef<HTMLInputElement>(null);

	const [createCompletedTodo, setCreateCompletedTodo] = React.useState(false);

	const onEnterTodo = React.useCallback(
		(event: React.KeyboardEvent) => {
			if (!textInputRef.current || !textInputRef.current.value.trim()) return;

			if (event.key !== "Enter") return;

			const newTodo: TodoInterface = {
				id: Math.random(),
				todo: textInputRef.current.value.trim(),
				complete: createCompletedTodo,
			};

			setTodos(currentState => {
				return [...currentState, newTodo];
			});

			textInputRef.current.value = "";
		},
		[createCompletedTodo]
	);

	const onCreateCompleteTodo = React.useCallback(() => {
		setCreateCompletedTodo(current => !current);
	}, []);

	const onCloseTodo = (todoID: number) => {
		setTodos(currentState => {
			return currentState.filter(todo => todo.id !== todoID);
		});
	};

	const onToggleTodoComplete = (todoID: number) => {
		setTodos(currentState => {
			return currentState.map(todo => {
				if (todo.id === todoID) {
					return { ...todo, complete: !todo.complete };
				}

				return todo;
			});
		});
	};

	const renderTodos = todos.map(todo => (
		<TodoItem
			key={todo.id}
			{...todo}
			onClose={onCloseTodo}
			onToggle={onToggleTodoComplete}
		/>
	));

	return (
		<div className={styles.TodoListContainer}>
			<CreateTodo
				createCompletedTodo={createCompletedTodo}
				onEnterTodo={onEnterTodo}
				onCreateCompleteTodo={onCreateCompleteTodo}
				inputRef={textInputRef}
			/>
			<div className={styles.Todos}>{todos.length > 0 && renderTodos}</div>
		</div>
	);
}

export default TodoListContainer;
