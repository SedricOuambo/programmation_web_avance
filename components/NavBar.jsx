'use client'
import styles from './NavBar.module.css';
import { useModuleActif } from './Provider/ModuleActifProvider';
import { useTitreModule } from './Provider/TitreModuleProvider';
import { useThemeColor } from './Provider/ThemeColorProvider';
import { useTheme } from 'next-themes'
import Link from 'next/link';
import { IoColorFill } from "react-icons/io5";
import React, { useState, useEffect } from 'react';

export default function NavBar() {
    const { theme, setTheme } = useTheme();
    const vide='';
    //Gestion du dark mode
    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    // État pour stocker la valeur du code couleur courante
    const [color, setColor] = useThemeColor();
    const [actif, setActif] = useState('false');

    // Effet pour mettre à jour la variable CSS lorsque la couleur change
    useEffect(() => {
        // Accéder à l'élément racine du document
        const root = document.documentElement;
        // Modifier la variable CSS
        root.style.setProperty('--hue-color', color);
    }, [color]); // Ce useEffect est exécuté à chaque changement de la variable "color"

    // Gestionnaire d'événement pour changer la couleur
    const handleChangeColor = (couleur) => {
        setColor(couleur);
        handleClicActif();
    };

    //Gestionnaire du clic sur le bouton pour changer la couleur
    const handleClicActif = () => {
        actif === 'false' ? setActif('true') : setActif('false')
    }
    const [moduleActif, setModuleActif] = useModuleActif();
    const [titreModule, setTitreModule] = useTitreModule();

    return <nav className={styles.navbar}>

        <Link href="/" className={styles.logo} id='logo'
            onClick={() => {
                setModuleActif(0);
                setTitreModule('Plan du cours');
            }}>
            Programmation Web Avancé
        </Link>

        <div className={styles.bloc_droit}>
            <div>
                <div className={styles.colors}
                    onClick={handleClicActif}><IoColorFill />
                </div>
                <div className={styles.bloc_couleurs + ' ' +
                    (actif === 'true' ? styles.active : "")}>
                    <span className={styles.couleur1}
                        onClick={() => handleChangeColor('295')}>couleur1</span>
                    <span className={styles.couleur2}
                        onClick={() => handleChangeColor('165')}>couleur2</span>
                    <span className={styles.couleur3}
                        onClick={() => handleChangeColor('235')}>couleur3</span>
                    <span className={styles.couleur4}
                        onClick={() => handleChangeColor('205')}>couleur4</span>
                </div>
            </div>
            {/* gestion du changement de position du bouton switch-mode */}
            <div
                className={styles.switch_mode + ' ' +
                    (theme === 'light' ? styles.isLight : styles.isDark)
                }
                onClick={toggleTheme}
            >
            </div>
        </div>
    </nav>
}