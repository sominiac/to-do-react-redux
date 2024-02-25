import styles from "./RadioButton.module.scss";

export default function RadioButton({id, text, onChange}) {
    return (
        <div className={styles.radioButton}>
            <input className={styles.radioButton__input} id={id} type="radio" onChange={onChange}/>
            <label className={styles.radioButton__text} htmlFor={id} title={text}>{text}</label>
        </div>
    )
};