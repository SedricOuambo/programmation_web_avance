'use client'
import styles from './BlocModule.module.css';
import Link from 'next/link';
import { useState } from 'react';
import {useIndex} from './IndexProvider'

export default function BlocModule(props) {

    const [activeIndex, setActiveIndex] = useIndex();
    const handleClick = (index) => {setActiveIndex(index);}

    return <Link href={props.lien_module}
        onClick={() => handleClick(props.numero_module)}
        className={activeIndex === props.numero_module ? styles.active : ""}>
        <li>
            <div className={styles.bloc__module}>
                <div>Module {props.numero_module} : </div>
                <span>{props.titre_module}</span>
            </div>
        </li>
    </Link>
}