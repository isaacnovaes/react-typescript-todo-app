import { useEffect, useState } from "react";
import { TodoInterface } from "../TodoListContainer/TodoListContainer";
import styles from "./Todos.module.scss";
import TodoItem from "../TodoItem/TodoItem";
import TodoSummary from "../TodoSummary/TodoSummary";
import { Reorder } from "framer-motion";

export default function Todos({ todos }: { todos: TodoInterface[] }) {
    // const getItems = todos.map(todos=>todos.todo)
    const [items, setItems] = useState(todos);
    useEffect(() => setItems(todos), [todos]);
    return (
        <div className={styles.todos}>
            <Reorder.Group
                axis="y"
                values={items}
                onReorder={setItems}
                style={{ overflow: "hidden" }}
            >
                {items.map((todo) => (
                    <Reorder.Item
                        key={todo.id}
                        value={todo}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <TodoItem {...todo} />
                    </Reorder.Item>
                ))}
            </Reorder.Group>
            <TodoSummary todos={todos} />
        </div>
    );
}
