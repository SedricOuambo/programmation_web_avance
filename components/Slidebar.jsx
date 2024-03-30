'use client'
import styles from './Slidebar.module.css';
import Image from 'next/image';
import logo from '@/public/img/logo.webp';
import Link from 'next/link';
import BlocModule from './BlocModule';
import { useIndex } from './IndexProvider'

export default function Slidebar() {

    const [activeIndex, setActiveIndex] = useIndex();
    const handleClick = (index) => { setActiveIndex(index); }

    return <section className={styles.slidebar}>
        <ul className={styles.slide_menu + ' ' + styles.top}>
            <li>
                <Link href='/'
                    onClick={() => handleClick("AC")}
                    className={activeIndex === "AC" ? styles.active : ""}>
                    <div className={styles.bloc__UA}>
                        <div>Accueil </div>
                        <span>Plan du cours</span>
                    </div>
                </Link>
                <Link href='ua1'
                    onClick={() => handleClick("UA1")}
                    className={activeIndex === "UA1" ? styles.active : ""}>
                    <div className={styles.bloc__UA}>
                        <div>UA 01 : </div>
                        <span>Application Web monopage</span>
                    </div>
                </Link>
                <ul>
                    <BlocModule
                        lien_module="/module1"
                        numero_module="01"
                        titre_module="Création d'un projet"
                    />
                    <BlocModule
                        lien_module="/module2"
                        numero_module="02"
                        titre_module="Les composants et props"
                    />
                    <BlocModule
                        lien_module="/module3"
                        numero_module="03"
                        titre_module="Affichage conditionnel des données et affichage répétitif"
                    />
                    <BlocModule
                        lien_module="/module4"
                        numero_module="04"
                        titre_module="Partage des données entre composants"
                    />
                </ul>
            </li>

            <li>
                <Link href='ua2'
                    onClick={() => handleClick("UA2")}
                    className={activeIndex === "UA2" ? styles.active : ""}>
                    <div className={styles.bloc__UA}>
                        <div>UA 02 : </div>
                        <span>Routage client et partage des données</span>
                    </div>
                </Link>
                <ul>
                    <BlocModule
                        lien_module="/module5"
                        numero_module="05"
                        titre_module="Routage client et changement de page"
                    />

                    <BlocModule
                        lien_module="/module6"
                        numero_module="06"
                        titre_module="Métadonnées et optimisation pour les engins de recherche (SEO)"
                    />

                    <BlocModule
                        lien_module="/module7"
                        numero_module="07"
                        titre_module="Les formulaires"
                    />

                    <BlocModule
                        lien_module="/module8"
                        numero_module="08"
                        titre_module="Notion de contexte"
                    />
                </ul>
            </li>

            <li>
                <Link href='ua3'
                    onClick={() => handleClick("UA3")}
                    className={activeIndex === "UA3" ? styles.active : ""}>
                    <div className={styles.bloc__UA}>
                        <div>UA 03 : </div>
                        <span>Application Client/Serveur complexe</span>
                    </div>
                </Link>
                <ul>
                    <BlocModule
                        lien_module="/module9"
                        numero_module="09"
                        titre_module="Rendu avec Next.js"
                    />
                    <BlocModule
                        lien_module="/module10"
                        numero_module="10"
                        titre_module="Nouvelles fonctionnalités de Next.js"
                    />
                    <BlocModule
                        lien_module="/module11"
                        numero_module="11"
                        titre_module="Progressive Web App (PWA)"
                    />
                </ul>
            </li>
        </ul>
    </section>
}