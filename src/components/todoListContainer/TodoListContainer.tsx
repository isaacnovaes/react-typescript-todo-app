import * as React from "react";
import styles from "./TodoListContainer.module.scss";
import CreateTodo from "../CreateTodo/CreateTodo";
import { Context } from "../../context/ContextProvider";
import Todos from "../Todos/Todos";

export interface TodoInterface {
	id: number;
	todo: string;
	complete: boolean;
}

function TodoListContainer() {
	const {
		state: { todos },
	} = React.useContext(Context);

	return (
		<div className={styles.TodoListContainer}>
			<CreateTodo />
			{todos.length > 0 && <Todos todos={todos} />}
		</div>
	);
}

export default TodoListContainer;
