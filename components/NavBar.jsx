'use client'
import styles from './NavBar.module.css';
import Link from 'next/link';

export default function NavBar() {

    return <nav className={styles.navbar}>

        <Link href="/" className={styles.logo}>
            Programmation Web Avancée
        </Link>

        <div className={styles.bloc_droit}>
            <div>
                <form action="#" className={styles.form}>
                    <input type="search" placeholder="Rechercher..." />
                    <button type="submit" className={styles.search_btn}>
                        OK
                    </button>
                </form>
            </div>
            <label htmlFor="switch-mode" className={styles.switch_mode}></label>
        </div>
    </nav>
}