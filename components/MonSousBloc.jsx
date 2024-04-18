import styles from './MonSousBloc.module.css';
import Link from 'next/link';
import { useModuleActif } from './Provider/ModuleActifProvider'
import { useTitreModule } from './Provider/TitreModuleProvider'
import { useMenuActif } from './Provider/MenuActifProvider';

export default function MonSousBloc(props) {
    const [moduleActif, setModuleActif] = useModuleActif();
    const [titreModule, setTitreModule] = useTitreModule();
    const [menu, setMenu] = useMenuActif();

    return <Link href={props.chemin}
        onClick={() => {
            setModuleActif(props.numero);
            setTitreModule(props.titre);
            setMenu('NotActive');
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