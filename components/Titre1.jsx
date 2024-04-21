import styles from './Titre1.module.css';
import { FaHandHolding } from "react-icons/fa6";

export default function Titre1(props){
    return <div className={styles.div} id={props.index}>
        <span><FaHandHolding className={styles.icone}/></span>
        <span>{props.title}</span>
    </div>
}