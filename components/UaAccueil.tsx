import styles from './UaAccueil.module.css'

export default function UaAccueil(props: any) {
    return <div className={styles.bloc}>
        <div className={styles.bloc_titre}>
            <span>Unité d&apos;Apprentissage {props.numero} : </span>
            <div>{props.titre}</div>
        </div>
        <div className={styles.bloc_objectifs}>
            <span>Compétences visées :</span>
            À la fin de cette Unité d&apos;Apprentissage, l&apos;étudiant qui réussit sera en mesure de:
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