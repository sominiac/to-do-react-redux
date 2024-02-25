import styles from "./RadioButton.module.scss";

export default function RadioButton() {
    return (
        <>
            <input className={styles.radioButton__input} id="task-check-button" type="radio"/>
            <label className={styles.radioButton__text} htmlFor="task-check-button" title="Сходить в магазин">Сходить в
                магазин</label>
        </>
    )
};