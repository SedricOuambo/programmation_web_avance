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

    const header = `import styles from './Header.module.css'
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

    const header_module = `.nav ul {
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

    const citation = `import styles from './Citation.module.css'
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

    const citation_module = `.citation {
    font-style: italic;
}
.auteur {
    font-weight: bold;
    margin-bottom: 1rem;
}
`;

    const page = `import Image from "next/image";
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

    const layout = `import Header from '@/components/Header'
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Biblio-app",
  description: "Demo Cours Programmation web avancé",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
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
            contenu='Nous allons reprendre notre application biblio-app et créer son entête ou header. Pour cela, les dossiers et fichiers suivants seront créés:'
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
            contenu="Après la création de notre composant Header, il faut l'ajouter au fichier 'layout.jsx'. Pour cela, il allons lui faire les insertions suivantes"
        />
        <Item
            item="Fichier '/app/layout.jsx'"
            description=" : Ajouter le premier code au debut du fichier et insérer le deuxième juste après la ligne [<body className={inter.className}>]"
        />
        <CodeBlock chemin='/app/layout.jsx (premier code)' contenu="import Header from '@/components/Header'" langage='jsx' />
        <CodeBlock chemin='/app/layout.jsx (deuxième code)' contenu="<Header />" langage='jsx' />
        <Remarque
            type='Bon à savoir'
            contenu="Toujours penser à exécuter la commande [npm run dev] pour exécuter l'application."
        />
        <Remarque
            type='Travail à faire'
            contenu="En suivant la même logique, créez le pied de page ou footer de notre application biblio-app."
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
        <Remarque
            type='Remarque'
            contenu="Dans l'exemple précédent, {props.children} permet d'acccéder à l'enfant du composant Citation. Vous pouvez à présent vous amuser en ajoutant vos propres citations personnalisées."
        />
        <LienExterne
            url='https://fr.legacy.reactjs.org/docs/components-and-props.html'
            description='En savoir plus sur les composants'
        />
        {/* // #endregion Notion de Framework*/}

        <Divider />
        {/* #region Layout de base avec Next.js */}
        <Titre1 title='Layout de base avec Next.js' index='1' />
        <Paragraphe
            contenu="Dans Next.js, un 'layout' est un modèle utilisé pour organiser les composants réutilisables et fournir une structure commune à différentes pages d'une application. En effet, dans une application web, certains composants l'instar des barres de navigation, des pieds de page et bien d'autres, se retrouvent dans toutes ou presque toutes les pages. Au lieu d'ajouter ces composants à chacune de nos pages, nous les ajouterons simplement au layout et ils apparaitrons dans nos différentes pages."
        />
        <Paragraphe
            contenu="Reprenons notre fichier 'layout.jsx'"
        />
        <CodeBlock chemin='/app/layout.jsx' contenu={layout} langage='jsx' />
        <Remarque
            type='Remarque'
            contenu="Dans notre exemple, le layout a structure de base de notre application avec un en-tête (composant </Header>), un contenu principal (où le contenu des pages s'affichera via {children}), et éventuellement un pied de page (après {children}) pour ceux qui l'ont crée."
        />
        <Remarque
            type='Bon à savoir'
            contenu="Dans les fichiers de page, le layout est automatiquement utilisé si placé dans le bon segment. Dans notre cas par exemple, toutes les pages à l'intérieur du dossier /app utiliseront le layout précédent (layout.jsx)."
        />
        <LienExterne
            url='https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#layout-pattern'
            description='En savoir plus sur les layouts'
        />
        {/* // #endregion Layout de base avec Next.js*/}

        <Divider />
        {/* #region Types de CSS */}
        <Titre1 title='Types de CSS' index='2' />
        <Paragraphe
            contenu="Plusieurs approches peuvent être utilisées pour définir le CSS dans une application React avec Next.js. Parmi ces approches, on peut citer :"
        />
        <Item
            item="global CSS"
            description=" : Cette approche consiste à définir un fichier css qui contiendra les styles applicable à toutes les pages de l'application. Dans notre cas, il s'agit du fichier 'global.css' qui a été présenté dans le module1. Ce fichier contient des styles tels les couleurs, les polices de caractères et bien d'autres."
        />
        <Remarque
            type='Remarque'
            contenu="Le fichier 'globals.css' puisqu'il s'applique à toutes les pages, est évidemment importé dans le fichier 'layout.jsx'."
        />
        <Item
            item="Tailwind CSS"
            description=" : C'est un framework CSS pouvant accroître le processus de mise en forme de vos pages web, grace à de nombreuses classes prédéfinies et prêtes à l'emploi. Nous n'utiliserons pas Tailwind dans le cadre ce cours, mais il serait utile d'en savoir plus'."
            url='https://nextjs.org/docs/pages/building-your-application/styling/tailwind-css'
        />
        <Item
            item="CSS Modules"
            description=" : Cette approche consiste à définir et lier un fichier CSS à un composant spécifique. C'est cette approche qui sera utilisée dans ce cours. Pour illustrer cela, nous avons précédemment défini 2 fichiers CSS à savoir : 'Header.module.css' et 'Citation.module.css' qui sont respectivement liés aux composants 'Header.jsx' et 'Citation.jsx'."
        />
        <Item
            item="la bibliothèque clsx"
            description=" : C'est une petite bibliothèque qui permet d'affecter différentes classes à un élément HTML à partir de certaines conditions préétablies."
        />
        <LienExterne
            url='https://www.npmjs.com/package/clsx'
            description='Installation et usage de clsx'
        />
        <Remarque
            type='Bon à savoir'
            contenu="Dans le cadre de ce cours, nous utiliserons majoritairement les modules CSS."
        />
        {/* // #endregion Types de CSS*/}

        <Divider />
        {/* #region Polices de caractères optimisées dans Next.js */}
        <Titre1 title='Polices de caractères optimisées dans Next.js' index='3' />
        <Titre2
            title="Pourquoi optimiser les polices de caractères ou fonts?"
        />
        <Paragraphe
            contenu="Les polices de caractères affectent considérablement les perfomances d'une application web. Pour cette raison, nous devons leur porter une attention particulière. A cet sujet, Next.js a prévu de faire le travail pour nous en optimisant automatiquement nos polices de caractères, mais à condition que nous utilisons les polices du module next/font"
        />
        <Titre2
            title="Comment cela fonctionne-t-il ?"
        />
        <Paragraphe
            contenu="Au moment de la compilation du projet, Next.js se chargera de télécharger toutes nos polices de caractères, et les mettra à côté des autres fichiers statiques de notre application. Ainsi, lorsqu'un utilisateur visitera notre application, il n'y aura plus de requêtes supplémentaires vers le serveur pour obtenir les polices de caractères. Ce qui accroîtra les performances de notre application."
        />
        <Titre2
            title="Illustration"
        />
        <Paragraphe
            contenu="Revenons sur notre fichier layout.jsx"
        />
        <CodeBlock chemin='/app/layout.jsx' contenu={layout} langage='jsx' />
        <Paragraphe
            contenu="La ligne 'import { Inter } from 'next/font/google';' permet d'importer la police Inter du module 'next/font/google'"
        />
        <Paragraphe
            contenu="La ligne 'const inter = Inter({ subsets: ['latin'] });' permet de spécifier que nous utliserons le style 'latin'"
        />
        <Paragraphe
            contenu="En fin, la ligne '<body className={inter.className}>' permet d'appliquer notre police à tout le contenu de notre page."
        />
        <LienExterne
            url='https://nextjs.org/docs/pages/building-your-application/optimizing/fonts'
            description='En savoir plus sur les fonts'
        />
        {/* // #endregion Polices de caractères optimisées dans Next.js*/}

        <Divider />
        {/* #region Image dans Next.js */}
        <Titre1 title='Image dans Next.js' index='4' />
        {/* // #endregion Image dans Next.js */}
    </>
}