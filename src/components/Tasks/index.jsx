import Task from "../Task"

import styles from "./Tasks.module.scss";

export default function Index({isCurrentTasks}) {
    const CURRENT_TASKS_TITLE = "Текущие задачи";
    const COMPLETED_TASKS_TITLE = "Завершённые задачи";
    const tasksTitle = isCurrentTasks ? CURRENT_TASKS_TITLE : COMPLETED_TASKS_TITLE;

    return (
        <section className={`${styles.tasks} ${isCurrentTasks ? "current-tasks" : styles.completedTasks}`}>
            <div className={styles.tasks__titleWrapper}>
                <h4 className={styles.tasks__title} title={tasksTitle}>{tasksTitle}</h4>
            </div>
            <ul className={styles.tasks__list}>
                <li className="tasks__list-element">
                    {isCurrentTasks && <button className={styles.tasks__addTaskButton}>Добавить задачу</button>}
                </li>
                <li className="tasks__list-element">
                    <Task/>
                </li>
            </ul>
        </section>
    )
}