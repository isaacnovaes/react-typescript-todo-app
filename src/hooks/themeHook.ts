import * as React from "react";
import { Context } from "../context/ContextProvider";

/** If the theme is dark, returns true; Else returns false */
export default function useTheme() {
	const {
		state: { theme },
	} = React.useContext(Context);

	if (theme === "dark") return true;

	return false;
}
