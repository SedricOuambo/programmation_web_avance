'use client'
import styles from './ModuleAccueilGrand.module.css'

export default function ModuleAccueilGrand(props) {
    return <div className={styles.bloc}>
        <div className={styles.sous_bloc}>
            <div className={styles.numero}> {props.numero}</div>
            <div className={styles.bloc_titre}>
                <span className={styles.module_numero}>
                    <span>Module </span>
                    <span>{props.numero}</span>
                </span>
                <div>{props.titre}</div>
            </div>
        </div>
        <span className={styles.description}>{props.description}</span>
    </div>
}