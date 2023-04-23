import { useFilter, useTodos } from '../../hooks/hooks';
import CreateTodo from '../CreateTodo/CreateTodo';
import Todos from '../Todos/Todos';
import styles from './TodoListContainer.module.scss';

export interface TodoInterface {
    id: string;
    todo: string;
    complete: boolean;
}

function TodoListContainer() {
    const todos = useTodos();
    const filter = useFilter();

    if (todos === null || filter === null) return null;

    const activeTodos = todos.filter((todo) => !todo.complete);
    const completedTodos = todos.filter((todo) => todo.complete);

    return (
        <div className={styles.todoListContainer}>
            <CreateTodo />
            {todos.length > 0 && filter.type === 'all' && (
                <Todos todos={todos} />
            )}
            {todos.length > 0 && filter.type === 'active' && (
                <Todos todos={activeTodos} />
            )}
            {todos.length > 0 && filter.type === 'completed' && (
                <Todos todos={completedTodos} />
            )}
        </div>
    );
}

export default TodoListContainer;
