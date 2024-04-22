import styles from './DescriptionProjet.module.css';
import { IoSparklesOutline } from "react-icons/io5";
import Item from './Item';

export default function DescriptionProjet() {
    return <div className={styles.container}>
        <div className={styles.entete}>
            <span><IoSparklesOutline /></span>
            <div>Description du projet du cours</div>
        </div>
        <div className={styles.contenu}>
            <span>
                Dans le cadre de ce cours, nous développerons progressivement
                une version simplifiée d’une application de gestion de bibliothèque.
            </span>
           <span>Nous l&apos;appellerons<span className={styles.biblio}> biblio-app </span> et elle aura entre autres les fonctionnalités suivantes :</span> 
           <div></div> 
            <Item item="Une page d'accueil" />
            <Item item="Une page de connexion" />
            <Item item="Une page pour lister les documents de la bibliothèque " />
            <Item item="Une page de contact ayant un formulaire" />
            <Item item="La possibilité de changer la langue de l'application" />
            <Item item="La possibilité de modifier le thème de l'application " />
            <Item item="La possibilité d'installer notre application aussi bien sur PC que sur mobile" />
            <Item item="D'autres fonctionnalités pourront être ajoutées." />
        </div>
    </div>
}