import RadioButton from "../RadioButton";

import styles from "./Task.module.scss"

export default function Task({task, toggleTaskState}) {
    const onTaskChange = () => {
        toggleTaskState(task);
    }

    return (
        <div className={styles.task}>
            <RadioButton
                id={task.id}
                text={task.text}
                onChange={onTaskChange}/>
            <button className="icon-button task__delete-button"></button>
        </div>
    )
};