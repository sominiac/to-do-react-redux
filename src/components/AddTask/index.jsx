import {useState} from "react";

import styles from "./AddTask.module.scss";

export default function AddTask({addNewTask}) {
    const [newTaskText, setNewTaskText] = useState("");

    const onChangeInputValue = (event) => {
        setNewTaskText(event.target.value);
    }
    const onClickAddNewButton = () => {
        addNewTask(newTaskText);
    }

    return (
        <div className={styles.addTask}>
            <input className={styles.addTask__addTaskText} type="text" placeholder="Введите задачу..."
                   value={newTaskText} onChange={onChangeInputValue}/>
            <button className={styles.addTask__addTaskButton} onClick={onClickAddNewButton}>Добавить задачу</button>
        </div>
    )
};