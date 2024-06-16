'use client'
import styles from './ModuleAccueil.module.css'
import Link from 'next/link'
import { useModuleActif } from './Provider/ModuleActifProvider';
import { useTitreModule } from './Provider/TitreModuleProvider';

export default function ModuleAcueil(props) {

    const [moduleActif, setModuleActif] = useModuleActif();
    const [titreModule, setTitreModule] = useTitreModule();

    return <Link href={'module' + props.numero}
        onClick={() => {
            setModuleActif(props.numero);
            setTitreModule(props.titre);
            setMenu('NotActive');
        }}
        className={styles.lien +' '+(props.actif && styles.actif)}>
        <div className={styles.bloc + ' ' + (props.actif && styles.actif)}>
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
    </Link>
}