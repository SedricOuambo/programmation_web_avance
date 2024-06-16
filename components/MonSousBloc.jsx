import styles from './MonSousBloc.module.css';
import Link from 'next/link';
import { useModuleActif } from './Provider/ModuleActifProvider'
import { useTitreModule } from './Provider/TitreModuleProvider'

export default function MonSousBloc(props) {
    const [moduleActif, setModuleActif] = useModuleActif();
    const [titreModule, setTitreModule] = useTitreModule();

    const handleClick = () => {
        setModuleActif(props.numero);
        setTitreModule(props.titre);
        if (props.onClick) {
            props.onClick();
        }
    };

    return <Link href={props.chemin}
        onClick={handleClick}
        className={styles.lien + ' ' + (props.actif && styles.actif)}>
        <div className={styles.container + ' ' + (props.actif && styles.actif)}>
            <div className={styles.numero}>{props.numero}</div>
            <div className={styles.titre}>
                <div>Module {props.numero}</div>
                <span>{props.titre}</span>
            </div>
        </div>
    </Link>
}