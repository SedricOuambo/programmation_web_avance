'use client'
import styles from './Slidebar.module.css';
import BlocModule from './BlocModule';
import BlocUA from './BlocUA'

import { useHide } from './HideSliderProvider'

export default function Slidebar() {
    const [hide, setHide] = useHide();

    return <section className={styles.slidebar + ' ' + (hide === "true" ? styles.hide : styles.display)}>
        <ul className={styles.slide_menu + ' ' + styles.top}>
            <li>
                <BlocUA
                    chemin='/'
                    titre='Accueil'
                    libelle_titre='Plan du cours'
                />
                <BlocUA
                    chemin='/ua1'
                    titre='UA 01 :'
                    libelle_titre='Application Web monopage'
                />
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
                <BlocUA
                    chemin='/ua2'
                    titre='UA 02 :'
                    libelle_titre='Routage client et partage des données'
                />
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
                <BlocUA
                    chemin='/ua3'
                    titre='UA 03 :'
                    libelle_titre='Application Client/Serveur complexe'
                />
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