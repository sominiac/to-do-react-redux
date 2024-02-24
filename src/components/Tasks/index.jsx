import styles from "./Tasks.module.scss";

export default function Index({isCurrentTasks}) {
    const CURRENT_TASKS_TITLE = "Текущие задачи";
    const COMPLETED_TASKS_TITLE = "Завершённые задачи";
    const tasksTitle = isCurrentTasks ? CURRENT_TASKS_TITLE : COMPLETED_TASKS_TITLE;

    return (
        <section className={`${styles.tasks} ${isCurrentTasks ? "current-tasks" : styles.completedTasks}`}>
            <div className={styles.tasks__titleWrapper}>
                <h4 className={styles.tasks__title}>{tasksTitle}</h4>
            </div>
            <ul className="tasks__list">
                <li className="tasks__list-element">
                    <div className="task">
                        <input className="radio-button" id="task-check-button" type="radio"/>
                        <label className="task__name" htmlFor="task-check-button">Сходить в
                            магазин</label>
                        <button className="icon-button task__delete-button"></button>
                    </div>
                </li>
            </ul>
        </section>
    )
}