import styles from './App.module.scss';
import AppBackground from './components/AppBackground/AppBackground';
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';
import TodoListContainer from './components/TodoListContainer/TodoListContainer';
import { useIsDarkTheme } from './hooks/hooks';

function App() {
    const isDarkTheme = useIsDarkTheme();
    if (isDarkTheme === null) return null;

    const classes = `${styles.app} ${isDarkTheme ? '' : styles.light}`;

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
