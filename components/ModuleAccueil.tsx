import styles from './ModuleAccueil.module.css'

export default function ModuleAcueil(props: any) {
    return <div className={styles.bloc}>
        <div className={styles.numero}> {props.numero}</div>
        <div className={styles.bloc_titre}>
            <span className={styles.module_numero}>
                <span>Module </span>
                <span>{props.numero}</span>
            </span>
            <div>{props.titre}</div>
            <span>{props.description}</span>
        </div>
    </div>
}