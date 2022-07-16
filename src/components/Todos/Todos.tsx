import { TodoInterface } from "../todoListContainer/TodoListContainer";
import styles from "./Todos.module.scss";
import TodoItem from "../TodoItem/TodoItem";
import TodoSummary from "../TodoSummary/TodoSummary";

export default function Todos({ todos }: { todos: TodoInterface[] }) {
    return (
        <div className={styles.todos}>
            {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
            <TodoSummary todos={todos} />
        </div>
    );
}
