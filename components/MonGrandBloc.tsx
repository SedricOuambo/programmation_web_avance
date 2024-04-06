import styles from './MonGrandBloc.module.css'
import MonBloc from './MonBloc'

export default function MonGrandBloc() {
    return <div className={styles.containeur}>
        <div className={styles.sub_containeur}>
            <div className={styles.mon_bloc}><MonBloc /></div>
        </div>
    </div>
}