import RadioButton from "../RadioButton";

import styles from "./Task.module.scss"

export default function Task() {
    return (
        <div className={styles.task}>
            <RadioButton/>
            <button className="icon-button task__delete-button"></button>
        </div>
    )
};