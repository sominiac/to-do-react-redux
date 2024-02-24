import Tasks from "./components/Tasks";

import containerStyles from "./assets/styles/layout/container.module.scss";
import styles from "./assets/styles/pages/App.module.scss";

function App() {
    return (
        <div className={styles.app}>
            <div className={containerStyles.container}>
                <div className={styles.app__inner}>
                    <header className={styles.app__header}>
                        <h3 className="header__title">Todo list</h3>
                    </header>
                    <main className={styles.app__main}>
                        <Tasks isCurrentTasks/>
                        <Tasks/>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default App;
