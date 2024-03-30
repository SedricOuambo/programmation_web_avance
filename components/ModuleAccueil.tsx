import styles from './ModuleAccueil.module.css'

export default function ModuleAcueil(props: any) {
    return <div className={styles.bloc}>
        <div className={styles.numero}>
            <div>Module</div>
            <div className={styles.nombre}>{props.numero}</div>
        </div>
        <div className={styles.bloc_titre}>
            <div>{props.titre}</div>
            <span>{props.description}</span>
        </div>
    </div>
}