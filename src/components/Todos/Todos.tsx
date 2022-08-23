import { Reorder, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import type { TodoInterface } from '../TodoListContainer/TodoListContainer';
import TodoSummary from '../TodoSummary/TodoSummary';
import styles from './Todos.module.scss';

export default function Todos({ todos }: { todos: TodoInterface[] }) {
    const [items, setItems] = useState(todos);
    useEffect(() => {
        setItems(todos);
    }, [todos]);
    return (
        <div className={styles.todos}>
            <Reorder.Group
                values={items}
                onReorder={setItems}
                style={{ overflow: 'hidden' }}
                axis='y'
            >
                <AnimatePresence>
                    {items.map((todo) => (
                        <Reorder.Item
                            key={todo.id}
                            id={todo.id.toString()}
                            value={todo}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            whileDrag={{ cursor: 'grab' }}
                        >
                            <TodoItem {...todo} />
                        </Reorder.Item>
                    ))}
                </AnimatePresence>
            </Reorder.Group>
            <TodoSummary todos={todos} />
        </div>
    );
}
