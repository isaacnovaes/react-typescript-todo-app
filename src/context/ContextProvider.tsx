import * as React from "react";
import appContext from "./appContext";
import { AppContextInterface } from "./appContext";

type ActionType = {
	type: "toggle";
};

type StateType = { theme: "dark" | "light" };

const initialState: StateType = {
	theme: "dark",
};

function reducer(state: StateType, action: ActionType): StateType {
	switch (action.type) {
		case "toggle":
			const theme = state.theme === "dark" ? "light" : "dark";
			return { ...state, theme };
		default:
			return state;
	}
}

type ContextProviderPropsType = {
	children: React.ReactNode;
};

function ContextProvider({ children }: ContextProviderPropsType) {
	const [state, dispatch] = React.useReducer<
		(state: StateType, action: ActionType) => StateType
	>(reducer, initialState);

	const data: AppContextInterface = {
		theme: state.theme,
		toggleTheme: () => {
			dispatch({ type: "toggle" });
		},
	};
	return <appContext.Provider value={data}>{children}</appContext.Provider>;
}

export default ContextProvider;
