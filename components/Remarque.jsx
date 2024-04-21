import styles from './Remarque.module.css'

export default function Remarque(props) {
    return <div className={styles.container}>
        <div className={styles.type}>{props.type}</div>
        {props.contenu}
    </div>
}