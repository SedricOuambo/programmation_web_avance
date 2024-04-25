import styles from './DownloadLink.module.css';
import { RiExternalLinkFill } from "react-icons/ri";
import Link from 'next/link';

export default function DownloadLink(props) {
    return <div className={styles.div}>
        <span>
            <Link href={props.url} target='_blank'>
                <span className={styles.souligner}>{props.item}</span>
                {' '}
                <RiExternalLinkFill />
            </Link>
        </span>
        {props.description}
    </div>
}