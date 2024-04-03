import styles from './UaAccueil.module.css'

export default function UaAccueil(props: any) {
    return <div className={styles.bloc}>
        <div className={styles.bloc_titre}>
            <span>Unité d&apos;Apprentissage {props.numero} : </span>
            <div>{props.titre}</div>
        </div>
        <div className={styles.bloc_objectifs}>
            <span>Objectifs visés :</span>
            <div> 
                <nav>-{'>'}</nav>
                {props.objectif1}
            </div>
            <div>
                <nav>-{'>'}</nav>
                {props.objectif2}
            </div>
        </div>
    </div>
}