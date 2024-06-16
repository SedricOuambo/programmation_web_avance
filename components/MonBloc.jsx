'use client'
import styles from './MonBloc.module.css'
import { TfiMenuAlt } from "react-icons/tfi";
import { FaArrowUp } from "react-icons/fa6";
import { useModuleActif } from './Provider/ModuleActifProvider';
import { useTitreModule } from './Provider/TitreModuleProvider';
import { IoHome } from "react-icons/io5";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import logo2 from '@/public/img/logo2.webp';
import MonSousBloc from './MonSousBloc';
import Link from 'next/link';

export default function MonBloc() {
    const [moduleActif, setModuleActif] = useModuleActif();
    const [titreModule, setTitreModule] = useTitreModule();
    const [isVisible, setIsVisible] = useState(false);

    //Pour gerer la fermeture du menu si on clique ailleurs
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    //Elle vérifie si le clic est en dehors du menu et du bouton. Si c'est le cas, elle ferme le menu en mettant à jour l'état menuOpen à false.
    const handleClickOutside = (event) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target)
        ) {
            setMenuOpen(false);
        }
    };

    //Cet effet est utilisé pour ajouter l'écouteur d'événement click au document lorsque le composant est monté et le retirer lorsque le composant est démonté.
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    // Détecter le défilement de la page
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Fonction pour scroller vers le haut
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Fonction pour fermer le menu lors du clic sur un élément du menu
    const handleMenuClick = () => {
        setMenuOpen(false);
    };

    return <div className={styles.sup_container}>
        <div className={styles.bloc}>
            <div className={styles.blocGauche}>
                <div className={styles.menuIcon}
                    ref={buttonRef}
                    onClick={() => setMenuOpen(!menuOpen)}>
                    <TfiMenuAlt />
                </div>
                <div className={styles.separateur}></div>
                <Image
                    src={logo2}
                    alt='logo'
                    width={30}
                    height={20}
                />
                <div className={styles.bloc_actif}>
                    <div className={styles.titre_module}>Module {moduleActif}</div>
                    <span>{titreModule}</span>
                </div>
            </div>
            <div className={styles.blocDroit}>
                <Link href='/'
                    onClick={() => {
                        setModuleActif(0);
                        setTitreModule('Plan du cours');
                        setMenuOpen(false);
                    }}>
                    <IoHome className={styles.home} />
                </Link>
                <div className={styles.separateur}></div>
                {isVisible && (
                    <div className={styles.arrowUp} onClick={scrollToTop}>
                        <FaArrowUp />
                    </div>
                )}

            </div>
        </div>
        <div className={styles.sous_bloc + ' ' + (menuOpen ? styles.display_sous_bloc : "")}>
            <div className={styles.border} ref={menuRef}>
                <div className={styles.elements}>
                    <MonSousBloc
                        actif='true'
                        chemin="/"
                        numero="0"
                        titre="Plan du cours"
                        onClick={handleMenuClick}
                    />
                    <MonSousBloc
                        actif='true'
                        chemin="/module1"
                        numero="1"
                        titre="Créer un projet React avec Next.js"
                        onClick={handleMenuClick}
                    />
                    <MonSousBloc
                        actif='true'
                        chemin="/module2"
                        numero="2"
                        titre="Les composants et props"
                        onClick={handleMenuClick}
                    />
                    <MonSousBloc
                        actif='true'
                        chemin="/module3"
                        numero="3"
                        titre="Etat, événement et affichage"
                        onClick={handleMenuClick}
                    />
                    <MonSousBloc
                        actif='true'
                        chemin="/module4"
                        numero="4"
                        titre="Effet et affichage répétitif"
                        onClick={handleMenuClick}
                    />
                    <MonSousBloc
                        actif='true'
                        chemin="/module5"
                        numero="5"
                        titre="Routage client et changement de page"
                        onClick={handleMenuClick}
                    />
                    <MonSousBloc
                        actif='true'
                        chemin="/module6"
                        numero="6"
                        titre="Métadonnées et SEO"
                        onClick={handleMenuClick}
                    />
                    <MonSousBloc
                        actif='true'
                        chemin="/module7"
                        numero="7"
                        titre="Les formulaires"
                        onClick={handleMenuClick}
                    />
                    <MonSousBloc
                        actif='true'
                        chemin="/module8"
                        numero="8"
                        titre="Notion de contexte"
                        onClick={handleMenuClick}
                    />
                    <MonSousBloc
                        chemin="/module9"
                        numero="9"
                        titre="Rendu avec Next.js"
                        onClick={handleMenuClick}
                    />
                    <MonSousBloc
                        chemin="/module10"
                        numero="10"
                        titre="Nouvelles fonctionnalités de Next.js"
                        onClick={handleMenuClick}
                    />
                    <MonSousBloc
                        chemin="/module11"
                        numero="11"
                        titre="Progressive Web App (PWA)"
                        onClick={handleMenuClick}
                    />
                </div>
            </div>
        </div>
    </div>
}