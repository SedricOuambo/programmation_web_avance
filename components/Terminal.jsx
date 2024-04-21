import styles from './Terminal.module.css';

export default function Terminal(props) {
    return <div className={styles.container}>
        <span className={styles.terminal}>Terminal</span>
        <span>{props.contenu}</span>
    </div>
}