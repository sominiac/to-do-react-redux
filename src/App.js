import {useState} from "react";

import Tasks from "./components/Tasks";

import containerStyles from "./assets/styles/layout/container.module.scss";
import styles from "./assets/styles/pages/App.module.scss";

function App() {
    const [tasks, setTasks] = useState([{
        id: "Сходить в магазин",
        text: "Сходить в магазин"
    }]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const toggleTaskState = (tasksList, task, isCurrentTasks) => {
        const updatedTasksList = tasksList.filter(({id}) => id !== task.id);

        if (isCurrentTasks) {
            setTasks(updatedTasksList);
            setCompletedTasks([...completedTasks, task]);
        } else {
            setCompletedTasks(updatedTasksList);
            setTasks([...tasks, task]);
        }
    }

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
                            toggleTaskState={toggleTaskState}
                            isCurrentTasks/>
                        <Tasks
                            tasksList={completedTasks}
                            toggleTaskState={toggleTaskState}/>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default App;
