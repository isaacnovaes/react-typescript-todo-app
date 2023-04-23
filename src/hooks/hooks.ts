import { useContext } from 'react';
import { AppContext, AppContextDispatch } from '../context/ContextProvider';

export const useIsDarkTheme = () => {
    const context = useContext(AppContext);
    if (!context) {
        new Error(
            `To use AppContext, make sure that this component is a child of AppContextProvider.`
        );
        return context;
    }
    const { theme } = context;
    return theme === 'dark';
};

export const useTodos = () => {
    const context = useContext(AppContext);
    if (!context) {
        new Error(
            `To use AppContext, make sure that this component is a child of AppContextProvider.`
        );
        return context;
    }
    const { todos } = context;
    return todos;
};

export const useFilter = () => {
    const context = useContext(AppContext);
    if (!context) {
        new Error(
            `To use AppContext, make sure that this component is a child of AppContextProvider.`
        );
        return context;
    }
    const { filter } = context;
    return filter;
};

export const useAppContextDispatch = () => {
    const context = useContext(AppContextDispatch);
    if (!context) {
        new Error(
            `To use AppContext, make sure that this component is a child of AppContextProvider.`
        );
        return context;
    }
    return context;
};
