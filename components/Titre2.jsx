import styles from './Titre2.module.css';
import { TbLayersSubtract } from "react-icons/tb";

export default function Titre1(props){
    return <div className={styles.div} id={props.index}>
        <span><TbLayersSubtract className={styles.icone}/></span>
        <span>{props.title}</span>
    </div>
}