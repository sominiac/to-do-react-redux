import {useSelector} from "react-redux";

import Tasks from "./components/Tasks";

import containerStyles from "./assets/styles/layout/container.module.scss";
import styles from "./assets/styles/pages/App.module.scss";

function App() {
    const tasks = useSelector((state) => state.tasks.currentTasks);
    const completedTasks = useSelector((state) => state.tasks.completedTasks);

    return (
        <div className={styles.app}>
            <div className={containerStyles.container}>
                <div className={styles.app__inner}>
                    <header className={styles.app__header}>
                        <h3 className="header__title">Todo list</h3>
                    </header>
                    <main className={styles.app__main}>
                        <Tasks
                            tasksList={tasks}
                            isCurrentTasks/>
                        <Tasks
                            tasksList={completedTasks}/>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default App;
