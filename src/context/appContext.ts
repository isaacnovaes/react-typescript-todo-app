import * as React from "react";

/** 
 * theme: it's the current theme
 * 
 * toggleTheme: it dispatches an action to toggle the theme managed by the context 
 */
export interface AppContextInterface {
	theme: "dark" | "light";
	toggleTheme: () => void;
}

const appContext = React.createContext<AppContextInterface>({
	theme: "dark",
	toggleTheme: () => {},
});

export default appContext;
