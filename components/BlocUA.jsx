import styles from './BlocUA.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BlocUA(props) {
    const pathName = usePathname();
    return <>
        <Link href={props.chemin}
            className={pathName === props.chemin ? styles.active : ""}>
            <div className={styles.bloc__UA}>
                <div>{props.titre} </div>
                <span>{props.libelle_titre}</span>
            </div>
        </Link>
    </>
}