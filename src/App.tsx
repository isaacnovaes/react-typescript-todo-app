// type TodoType = { id: number; todo: string };
// type TodosType = TodoType[];
// const DUMMY: TodosType = [
// 	{ id: 84, todo: "Complete JavaScript course" },
// 	{ id: 4, todo: "Jog around the park 3x" },
// 	{ id: 8, todo: "10 minutes meditation" },
// 	{ id: 5, todo: "Read for one hour" },
// 	{ id: 7, todo: "Pick up groceries" },
// ];
// import * as React from "react";
import styles from "./App.module.scss";
import AppBackground from "./components/appBackground/AppBackground";
import Header from "./components/header/Header";
import MainContainer from "./components/mainContainer/MainContainer";
// import { Context } from "./context/ContextProvider";

import useTheme from "./hooks/themeHook";

function App() {
	const isDarkTheme = useTheme();

	const classes = `${styles.App} ${isDarkTheme ? "" : styles.Light}`;

	return (
		<div className={classes}>
			<AppBackground />
			<MainContainer>
				<Header />
			</MainContainer>
		</div>
	);
}

export default App;
