import styles from "./App.module.scss";
import AppBackground from "./components/appBackground/AppBackground";
import Header from "./components/header/Header";
import MainContainer from "./components/mainContainer/MainContainer";
import TodoListContainer from "./components/todoListContainer/TodoListContainer";
import useTheme from "./hooks/themeHook";

function App() {
    const isDarkTheme = useTheme();

    const classes = `${styles.app} ${isDarkTheme ? "" : styles.light}`;

    return (
        <div className={classes}>
            <AppBackground />
            <MainContainer>
                <Header />
                <TodoListContainer />
            </MainContainer>
        </div>
    );
}

export default App;
