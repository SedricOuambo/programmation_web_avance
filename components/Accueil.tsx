import styles from './Accueil.module.css';
import ModuleAcueil from './ModuleAccueil';
import UaAccueil from './UaAccueil';

export default function Accueil() {
    return <div className={styles.contenu_accueil}>
        <UaAccueil
            numero="1"
            titre="Application web monopage"
            objectif1="Créer des pages web utilisant diverses librairies et technologies émergentes qui sont présentement très populaires dans l'industrie."
            objectif2="Séparer le code en modules et en composants pour faciliter le développement et la maintenance des projets web."
        />
        <ModuleAcueil
            numero="1"
            titre="Création d'un projet"
            description="Installer les outils et logiciels qui seront utilisés, et créer un projet React avec Next.js"
        />
        <ModuleAcueil
            numero="2"
            titre="Les composants et props"
            description="Installer les outils et logiciels qui seront utilisés, et créer un projet React avec Next.js"
        />
        <ModuleAcueil
            numero="3"
            titre="Affichage conditionnel des données et affichage répétitif"
            description="Installer les outils et logiciels qui seront utilisés, et créer un projet React avec Next.js"
        />
        <ModuleAcueil
            numero="4"
            titre="Partage des données entre composants"
            description="Installer les outils et logiciels qui seront utilisés, et créer un projet React avec Next.js"
        />

        <UaAccueil
            numero="2"
            titre="Routage client et partage des données"
            objectif1="Concevoir et personnaliser des sites web monopage
            utilisant le routage client pour simuler un site web à plusieurs pages."
            objectif2="Modifier les métadonnées et construire son application web de manière efficace pour faciliter son
            hébergement."
        />
        <ModuleAcueil
            numero="5"
            titre="Routage client et changement de page"
            description="Installer les outils et logiciels qui seront utilisés, et créer un projet React avec Next.js"
        />
        <ModuleAcueil
            numero="6"
            titre="Métadonnées et optimisation pour les engins de recherche (SEO)"
            description="Installer les outils et logiciels qui seront utilisés, et créer un projet React avec Next.js"
        />
        <ModuleAcueil
            numero="7"
            titre="Les formulaires"
            description="Installer les outils et logiciels qui seront utilisés, et créer un projet React avec Next.js"
        />
        <ModuleAcueil
            numero="8"
            titre="Notion de contexte"
            description="Installer les outils et logiciels qui seront utilisés, et créer un projet React avec Next.js"
        />

        <UaAccueil
            numero="3"
            titre="Application Client/Serveur complexe"
            objectif1="Utiliser plusieurs optimisations,
            dont le rendu serveur pour augmenter les performances de son application web."
            objectif2="Préparer ses applications web pour les rendre progressives."
        />
        <ModuleAcueil
            numero="9"
            titre="Rendu avec Next.js"
            description="Installer les outils et logiciels qui seront utilisés, et créer un projet React avec Next.js"
        />
        <ModuleAcueil
            numero="10"
            titre="Nouvelles fonctionnalités de Next.js"
            description="Installer les outils et logiciels qui seront utilisés, et créer un projet React avec Next.js"
        />
        <ModuleAcueil
            numero="11"
            titre="Progressive Web App (PWA)"
            description="Installer les outils et logiciels qui seront utilisés, et créer un projet React avec Next.js"
        />
    </div>
}