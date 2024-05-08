import styles from './DownloadLink.module.css';
import { HiDownload } from "react-icons/hi";
import Link from 'next/link';

export default function DownloadLink(props) {
    return <div className={styles.div}>
        <span>
            <Link href={props.url}
                download target='_blank'>
                <HiDownload className={styles.icone} />
                {' '}
                <span className={styles.souligner}>{props.item}</span>
            </Link>
        </span>
        {props.description}
    </div>
}