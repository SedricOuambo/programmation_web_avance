import styles from './Item.module.css';
import { GrFormSubtract } from "react-icons/gr";
import { RiExternalLinkFill } from "react-icons/ri";

export default function Item(props) {
    return <div className={styles.div}>
        <span>
            <GrFormSubtract className={styles.icone} />
            {props.url &&
                <a href={props.url}  target='_blank'>
                    <span className={styles.souligner}>{props.item}</span>
                    {' '}
                    <RiExternalLinkFill />
                </a>
            }
            {!props.url && props.item}
        </span>
        {props.description}
    </div>
}