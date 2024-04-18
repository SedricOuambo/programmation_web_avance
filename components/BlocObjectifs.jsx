import Link from 'next/link'
import styles from './BlocObjectifs.module.css'
import { GoGoal } from "react-icons/go";

export default function BlocObjectifs(props) {
    return <div className={styles.container}>
        <div className={styles.entete_objectifs}>
            <div>Contenu du module</div>
            <span>Nous aborderons les points suivants:</span>
        </div>
        <div className={styles.contenu_objectifs}>
            {props.listeObjectifs.map((objectif, index) => (
                <Link key={index} href={'#' + index} className={styles.lien}>
                    <nav>
                        <GoGoal className={styles.icone} />
                        {objectif}
                    </nav>
                    <div className={styles.separateur}></div>
                </Link>
            ))}
        </div>
    </div>
}