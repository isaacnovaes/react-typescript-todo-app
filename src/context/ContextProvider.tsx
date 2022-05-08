import * as React from "react";

type StateType = { theme: "dark" | "light" };
type ActionType = { type: "toggle" };

type ProviderPropsType = {
	children: React.ReactNode;
};

const initialState: StateType = {
	theme: "dark",
};

const reducer = (state: StateType, action: ActionType): StateType => {
	switch (action.type) {
		case "toggle":
			const theme = state.theme === "dark" ? "light" : "dark";
			return {
				...state,
				theme,
			};
		default:
			return state;
	}
};

const Context = React.createContext<{
	state: StateType;
	dispatch: React.Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => {} });

function ContextProvider({ children }: ProviderPropsType) {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	const data = { state, dispatch };

	return <Context.Provider value={data}>{children}</Context.Provider>;
}

export { Context, ContextProvider };
