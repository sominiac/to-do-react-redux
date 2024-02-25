import Task from "../Task";
import AddTask from "../AddTask";

import styles from "./Tasks.module.scss";

export default function Tasks({isCurrentTasks, tasksList, toggleTaskState, setTasks}) {
    const CURRENT_TASKS_TITLE = "Текущие задачи";
    const COMPLETED_TASKS_TITLE = "Завершённые задачи";
    const tasksTitle = isCurrentTasks ? CURRENT_TASKS_TITLE : COMPLETED_TASKS_TITLE;

    const _toggleTaskState = (task) => {
        toggleTaskState(tasksList, task, isCurrentTasks);
    };

    const onAddNewTask = (taskText) => {
        setTasks([...tasksList, {id: `${taskText}${tasksList.length}`, text: taskText}]);
    };

    return (
        <section className={`${styles.tasks} ${isCurrentTasks ? "current-tasks" : styles.completedTasks}`}>
            <div className={styles.tasks__titleWrapper}>
                <h4 className={styles.tasks__title} title={tasksTitle}>{tasksTitle}</h4>
            </div>
            <ul className={styles.tasks__list}>
                <li>
                    {isCurrentTasks && <AddTask addNewTask={onAddNewTask}/>}
                </li>
                {tasksList.map((task) => {
                    return (
                        <li className={styles.tasks__listElement} key={task.id}>
                            <Task
                                task={task}
                                toggleTaskState={_toggleTaskState}/>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}