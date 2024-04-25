import styles from './DescriptionImage.module.css'
import { IoSparklesOutline } from "react-icons/io5";
import Image from 'next/image';

export default function DescriptionImage(props) {
    return <div className={styles.container}>
        <div className={styles.entete}>
            <span><IoSparklesOutline /></span>
            <div>{props.title}</div>
        </div>
        <div className={styles.contenu}>
            <Image className={styles.img}
                src={'./img/img_modules/'+props.url}
                width={350}
                height={544}
                alt={props.url}
            />
        </div>
    </div>
}