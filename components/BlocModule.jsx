'use client'
import styles from './BlocModule.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BlocModule(props) {

    const pathName = usePathname();

    return <Link href={props.lien_module}
        className={pathName === props.lien_module ? styles.active : ""}>
        <li>
            <div className={styles.bloc__module}>
                <div>Module {props.numero_module} : </div>
                <span>{props.titre_module}</span>
            </div>
        </li>
    </Link>
}