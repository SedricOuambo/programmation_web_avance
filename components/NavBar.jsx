'use client'
import styles from './NavBar.module.css';
import Link from 'next/link';
import { IoColorFill } from "react-icons/io5";
import React, { useState, useEffect } from 'react';

export default function NavBar() {
    // État pour stocker la valeur du code couleur courante
    const [color, setColor] = useState('235');
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
    const handleClicActif = () =>{
        actif === 'false' ? setActif('true') : setActif('false')
    }

    return <nav className={styles.navbar}>

        <Link href="/" className={styles.logo} id='logo'>
            Programmation Web Avancée
        </Link>

        <div className={styles.bloc_droit}>
            {/* <div>
                <form action="#" className={styles.form}>
                    <input type="search" placeholder="Rechercher..." />
                    <button type="submit" className={styles.search_btn}>
                        OK
                    </button>
                </form>
            </div> */}
            <div>
                <div className={styles.colors}
                    onClick={handleClicActif}><IoColorFill />
                </div>
                <div className={styles.bloc_couleurs +' '+ 
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
            <label htmlFor="switch-mode" className={styles.switch_mode}></label>
        </div>
    </nav>
}