import styles from './MonSousBloc.module.css';
import Link from 'next/link';
import { useModuleActif } from './ModuleActifProvider'
import { useTitreModule } from './TitreModuleProvider'

export default function MonSousBloc(props) {
    const [moduleActif, setModuleActif] = useModuleActif();
    const [titreModule, setTitreModule] = useTitreModule();

    return <Link href={props.chemin}
        onClick={() => {
            setModuleActif(props.numero);
            setTitreModule(props.titre);
        }}>
        <div className={styles.container}>
            <div className={styles.numero}>{props.numero}</div>
            <div className={styles.titre}>
                <div>Module {props.numero}</div>
                <span>{props.titre}</span>
            </div>
        </div>
    </Link>
}