import { useMemo, createContext, useReducer } from 'react';

interface TodoInterface {
    id: number;
    todo: string;
    complete: boolean;
}

type Filter = 'all' | 'active' | 'completed';

type StateType = {
    theme: 'dark' | 'light';
    todos: TodoInterface[];
    filter: { type: Filter };
};

type ActionType =
    | { type: 'toggle theme' }
    | { type: 'add todo'; todo: string; complete: boolean }
    | { type: 'remove todo'; todoID: number }
    | { type: 'toggle todo complete'; todoID: number }
    | { type: 'remove completed' }
    | { type: 'filter'; filter: Filter };

type ProviderPropsType = {
    children: React.ReactNode;
};

const initialState: StateType = {
    theme: 'dark',
    todos: [
        { id: 95, todo: 'first todo', complete: false },
        { id: 5, todo: 'second todo', complete: true },
        { id: 45, todo: 'third todo', complete: false },
    ],
    filter: { type: 'all' },
};

const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'toggle theme': {
            const theme = state.theme === 'dark' ? 'light' : 'dark';
            return {
                ...state,
                theme,
            };
        }
        case 'add todo': {
            const newTodo: TodoInterface = {
                id: Math.random(),
                todo: action.todo,
                complete: action.complete,
            };

            return { ...state, todos: [...state.todos, newTodo] };
        }
        case 'remove todo':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.todoID),
            };

        case 'remove completed':
            return {
                ...state,
                todos: state.todos.filter((todo) => !todo.complete),
            };

        case 'toggle todo complete':
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.todoID) {
                        return { ...todo, complete: !todo.complete };
                    }
                    return todo;
                }),
            };

        case 'filter':
            return { ...state, filter: { type: action.filter } };

        default:
            return state;
    }
};

const Context = createContext<{
    state: StateType;
    dispatch: React.Dispatch<ActionType>;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
}>({ state: initialState, dispatch: () => {} });

function ContextProvider({ children }: ProviderPropsType) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const data = useMemo(() => {
        return { state, dispatch };
    }, [state]);

    return <Context.Provider value={data}>{children}</Context.Provider>;
}

export { Context, ContextProvider };
