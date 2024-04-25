import styles from './ContenuModule1.module.css';
import Divider from '@/components/Divider'
import Titre1 from '@/components/Titre1'
import Titre2 from '@/components/Titre2'
import Paragraphe from '@/components/Paragraphe'
import Item from '@/components/Item'
import Remarque from '@/components/Remarque'
import LienExterne from '@/components/LienExterne'
import CodeBlock from '@/components/CodeBlock'
import DescriptionProjet from '@/components/DescriptionProjet';
import DescriptionImage from '@/components/DescriptionImage';
import DownloadLink from '@/components/DownloadLink';

export default function ContenuModule2() {

    const header = `
import styles from './Header.module.css'
export default function Header() {
return <header className={styles.header}>
        <nav className={styles.nav}>
            <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Documents</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Connexion</a></li>
            </ul>
        </nav>
    </header>
}
`;

    const header_module = `
.nav ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.nav a {
    color: #fff;
    font-weight: 700;
}
.header {
    padding: 1rem;
    background-color: var(--first-color);
}
`;

    const citation = `
import styles from './Citation.module.css'
export default function Citation(props) {
    return <>
        <div className={styles.citation}>
            {props.children}
        </div>
        <div className={styles.auteur}>
            - {props.auteur}
        </div>
    </>
}
`;

    const citation_module = `
.citation {
    font-style: italic;
}
.auteur {
    font-weight: bold;
    margin-bottom: 1rem;
}
`;

    const page = `
import Image from "next/image";
import styles from "./page.module.css";
import Citation from "@/components/Citation";
export default function Home() {
  return (
    <main className={styles.main}>
      <Citation auteur='Sedric'>
        Nous y sommes
      </Citation>
      <div className={styles.welcome}>
        Soyez la bienvenue sur biblio-app
      </div>
    </main>
  );
}
`;

    return <>
        <Divider />
        {/* #region Notion de Framework */}
        <Titre1 title='Composants, props et enfant' index='0' />
        <Titre2 title='Mise en situation' />
        <Paragraphe
            contenu="Pour mieux comprendre les notions de composants et props dans React, nous allons partir d'un exemple simple. Supposons que nous voulons créer une application en C# ou Java pour calculer et afficher, la moyenne des notes obtenus par des étudiants lors d'une évaluation. Pour cela, on peut décider de créer une fonction qui retourne la somme de toutes les notes, une autre fonction qui fait la division de la somme obtenue, par l'effectif total et enfin une dernière fonction qui affiche la moyenne obtenue. Il est à noter que chacune de ces fonctions pourra prendre des paramètres et retourner des résultats de différents types."
        />
        <Paragraphe
            contenu="Nous savons tous que cette approche généralement appelée programmation modulaire ou procédurale, possède de nombreux avantages tels que la lisibilité du code, la réutilisation des fonctions pour éviter des répétitions inutiles et bien d'autres encore."
        />
        <Paragraphe
            contenu="Vous devez donc savoir que l'idée derrière la notion de composant et de prop en React est similaire à celle des fonctions classiques. En effet, pour réaliser notre application, au lieu de créer une page ou plusieurs pages web, ayant de nombreuses sections touffues qui parfois se répètent, nous allons créer des fonctions que nous pourrons appeler pour créer ces sections. Ces fonctions seront donc appelées composants. De plus, à ces fonctions, nous pourrons passer des paramètres que nous appellerons props dans le contexte de React."
        />
        <Titre2 title='Les composants' />
        <Paragraphe
            contenu="Nous pouvons dire que les composants en React sont des unités de code permettant de découper l'interface d'une application en éléments indépendants et isolés, pouvant être réutilisés. Ces unités peuvent prendre en entrée des propriétés (ou props) et renvoyer en sortie des éléments React (généralement du JSX)."
        />
        <Remarque
            type='Demo'
            contenu='Nous allons reprendre notre application biblio-app et créer les dossiers et fichiers suivants :'
        />
        <Item
            item="Dossier '/components'"
            description=" : A la racine du dossier de notre application, créer un dossier nommé 'components'. Ce dossier contiendra nos composants."
        />
        <Item
            item="Fichier '/components/Header.jsx'"
            description=" : Dans le dossier '/components', créer un fichier nommé 'Header.jsx', puis ajouter le code qui va suivre. Ce fichier contiendra le définition de l'entête de notre application."
        />
        <CodeBlock chemin='/components/Header.jsx' contenu={header} langage='jsx' />
        <Item
            item="Fichier '/components/Header.module.css'"
            description=" : Dans le dossier '/components', créer un fichier nommé 'Header.module.css', puis ajouter le code qui va suivre. Ce fichier contiendra le CSS de Header.jsx"
        />
        <CodeBlock chemin='/components/Header.module.css' contenu={header_module} langage='css' />
        <Remarque
            type='Important'
            contenu="Après la création de notre composant Header, il faut maintenant l'ajouter au fichier 'layout.jsx'. Pour cela, il faut insérer le code suivant [import Header from '@/components/Header'] au debut du fichier layout.jsx. Pour finir, il faut ajouter le code suivant [ <Header />] juste après la ligne [ <body className={inter.className}>] du fichier layout.jsx "
        />
        <Remarque
            type='Bon à savoir'
            contenu="Toujours penser à exécuter la commande [npm run dev] pour exécuter l'application."
        />
        <Titre2 title="Les props et enfants des composants" />
        <Paragraphe
            contenu="Nous allons à présent créer un composant Citation qui va prendre en entrée le nom de l'auteur d'une citation et retourner ladite citation ainsi que son auteur."
        />
        <Item
            item="Fichier '/components/Citation.jsx'"
            description=" : Dans le dossier '/components', créer un fichier nommé 'Citation.jsx'"
        />
        <CodeBlock chemin='/components/Citation.jsx' contenu={citation} langage='jsx' />
        <Item
            item="Fichier '/components/Citation.module.css'"
            description=" : Dans le dossier '/components', créer un fichier nommé 'Citation.module.css'"
        />
        <CodeBlock chemin='/components/Citation.module.css' contenu={citation_module} langage='css' />
        <Item
            item="Fichier '/app/page.jsx'"
            description=" : Remplacer le code de '/app/page.jsx' par le code suivant : "
        />
        <CodeBlock chemin='/app/page.jsx' contenu={page} langage='jsx' />
        <Paragraphe
            contenu="Dans l'exemple précédent, {props.children} permet d'acccéder à l'enfant du composant Citation. Vous pouvez à présent vous amuser en ajoutant vos propres citations personnalisées."
        />
        {/* // #endregion Notion de Framework*/}

        <Divider />
        {/* #region Layout de base avec Next.js */}
        <Titre1 title='Layout de base avec Next.js' index='1' />
    </>
}