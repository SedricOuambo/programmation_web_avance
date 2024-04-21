import styles from './LienExterne.module.css';
import { RiExternalLinkFill } from "react-icons/ri";

export default function LienExterne(props) {
    return <div className={styles.div}>
        <a href={props.url} target='_blank'>
            {props.description}
            {' '}
            <RiExternalLinkFill />
        </a>
    </div>
}