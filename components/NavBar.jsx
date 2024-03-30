'use client'
import styles from './NavBar.module.css';
import { FaResearchgate } from 'react-icons/fa';
import { useIndex } from './IndexProvider'

export default function NavBar() {
    const [activeIndex, setActiveIndex] = useIndex();
    const handleClick = (index) => { setActiveIndex(index); }

    return <nav className={styles.navbar}
        onClick={() => handleClick('AC')}>

        <a href="/" className={styles.logo}>
            Programmation Web Avancée
        </a>

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