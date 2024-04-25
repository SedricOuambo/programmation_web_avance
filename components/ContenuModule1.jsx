import styles from './ContenuModule1.module.css';
import Divider from '@/components/Divider'
import Titre1 from '@/components/Titre1'
import Titre2 from '@/components/Titre2'
import Paragraphe from '@/components/Paragraphe'
import Item from '@/components/Item'
import Remarque from '@/components/Remarque'
import LienExterne from '@/components/LienExterne'
import CodeBlock from '@/components/CodeBlock'
import { SiVisualstudio } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import DescriptionProjet from '@/components/DescriptionProjet';
import DescriptionImage from '@/components/DescriptionImage';
import DownloadLink from '@/components/DownloadLink';

export default function ContenuModule1() {
    const layout = `
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
        <body className={inter.className}>{children}</body>
        </html>
    );
}
`;

    const page = `
import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
    return (
        <main className={styles.main}>
        <div className={styles.welcome}>
            Soyez la bienvenue sur biblio-app
        </div>
        </main>
    );
}
`;

    const page_module = `
.welcome {
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    padding: 6rem;
    min-height: 100vh;
    color: var(--first-color);
    font-size: var(--big-font-size);
  }
`;

    const globals_css = `
:root {
    --hue-color: 165;
    --first-color: hsl(var(--hue-color), 60%, 33%);
    /* Les differentes tailles pour les petits ecrans */
    --big-font-size: 2rem;
    /************ Font weight ***************/
    --font-bold: 800;
    /******** Les differentes marges ***************/
    --mb-1: 1rem;
    /****** z index  *****/
    --z-fixed: 1000;
}
/****** Les tailles pour les grands ecrans *************/
@media screen and (min-width: 968px) {
:root {
    --big-font-size: 3rem;
}
}
body.dark {
    --first-color: #0C0C1E;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`;

    return <>
        <Divider />
        {/* #region Notion de Framework */}
        <Titre1 title='Notion de framework web' index='0' />
        <Paragraphe
            contenu="Les frameworks web ont révolutionné la façon dont nous construisons des applications web. Pour mieux comprendre leur importance, nous commencerons par examiner l'évolution ainsi que les limites du développement web original."
        />
        <Titre2
            title='Les limites du développement web client original'
        />
        <Paragraphe
            contenu="Au début, le développement web était principalement basé sur des langages de balisage comme HTML et des styles CSS pour la présentation. Bien que ces technologies aient permis la création de pages web statiques, la gestion de la complexité croissante des applications web interactives était difficile."
        />
        <Paragraphe
            contenu="Ensuite, est arrivée l'ère du JavaScript côté client, qui a permis aux développeurs d'ajouter de l'interactivité et de la dynamique aux pages web. Cependant, cela a rapidement conduit à des problèmes de maintenabilité et de gestion de la complexité lorsque les applications sont devenues plus sophistiquées."
        />
        <Paragraphe
            contenu="Toutes ces limites du développement web client original finiront par être comblées avec l'avènment des frameworks car ces derniers possèdent de nombreux avantages."
        />

        <Titre2
            title='Les avantages des frameworks web'
        />
        <Paragraphe
            contenu="Un framework web peut être défini comme étant un ensemble d'outils, de bibliothèques et de conventions qui permmettent aux développeurs de créer des applications web plus rapidement et plus efficacement, grace à  des fonctionnalités prêtes à l'emploi. Ces outils possèdent de nombreux avantages parmi lesquels on peut citer:"
        />
        <Item
            item='Une productivité accrue : '
            description="Grace à leurs fonctionnalités déjà prêtes à l'emploi, les frameworks web réduisent considérablement le temps de développement. En effet, ces fonctionnalités permettent aux développeurs de se concentrer sur la partie métier au lieu de passer du temps à réécrire du code existant déjà."
        />
        <Item
            item='La réutilisation du code : '
            description="L'un des principaux avantages des frameworks est la possibilité pour le développeur de réutiliser des composantes développées par lui-même."
        />
        <Item
            item='Une maintenabilité améliorée : '
            description="Les frameworks encouragent souvent les bonnes pratiques de développement et fournissent une structure cohérente, ce qui facilite la maintenance du code à long terme."
        />
        <Item
            item='Une Sécurité renforcée : '
            description="De nombreux frameworks intègrent des mécanismes de sécurité pour protéger les applications contre les attaques courantes."
        />
        <Item
            item='Une communauté active : '
            description="Les frameworks web ont souvent une communauté active de développeurs, une large documentation, des bibliothèques tierces et des outils qui peuvent aider les développeurs à résoudre des problèmes et à ajouter de nouvelles fonctionnalités à leur application."
        />

        <Titre2
            title='Les frameworks web client les plus utilisés'
        />
        <Paragraphe
            contenu="Au moment où ce contenu est produit, trois principaux frameworks sont utiliés par les développeurs pour de développement web client. Sans toutefois établir un ordre de popularité, ces frameworks sont les suivants:"
        />
        <Item
            item="React.js"
            description=" : Développé par Facebook, React est une bibliothèque JavaScript populaire pour la construction d'interfaces utilisateur. Il est largement utilisé pour créer des applications web interactives et des interfaces utilisateur réactives."
            url='https://react.dev/'
        />
        <Item
            item="Angular"
            description=" : Développé et maintenu par Google, Angular est un framework JavaScript open source qui permet de construire des applications web robustes et évolutives."
            url='https://angular.io/'
        />
        <Item
            item="Vue.js"
            description=" : Vue est un framework JavaScript progressif pour la construction d'interfaces utilisateur. Il est apprécié pour sa simplicité et sa flexibilité, ce qui en fait un choix populaire pour les développeurs débutants et expérimentés."
            url='https://vuejs.org/'
        />
        <Paragraphe
            contenu="Dans le cadre de ce cours, nous utiliserons Next.js qui est un framework open source basé sur React, et développé par Vercel. Nous y reviendrons dans les prochaines sections."
        />
        {/* #endregion Notion de Framework */}

        <Divider />
        {/* // #region Environnement de développement */}
        <Titre1 title='Environnement de développement' index='1' />
        <Titre2 title='Présentation' />
        <Paragraphe
            contenu="Dans la suite de notre cours, nous utiliserons la plateforme Next.js, qui est un framework basé sur la librairie React. Notre objectif principal consitera à développer la partie cliente d'une application web moderne."
        />
        <Remarque
            type='Remarque'
            contenu="Il est important de noter que Next.js n'est pas la seule plateforme de développement de projet React. Plusieurs autres plateformes à l'instar de Storybook, Material UI, Gatsby, Semantic UI React, React Bootstrap peuvent être utilisées pour développer des projets React."
        />
        <LienExterne
            url='https://www.geeksforgeeks.org/best-react-js-frameworks/'
            description='En savoir plus sur les frameworks basés sur React'
        />
        <Paragraphe
            contenu="Afin de réussir notre développement, nous aurons besoin d'installer quelques outils logiciels si cela n'est pas déjà fait."
        />

        <Titre2
            title='Node.js'
        />
        <Paragraphe
            contenu="Le premier et l'indispensable outil à installer sera Node.js. C'est un environnement d'exécution JavaScript open source, permettant d'exécuter du code JavaScript dans un CodeBlock."
        />
        <LienExterne
            url='https://nodejs.org/en/download/current'
            description='Installer Node.js'
        />
        <Remarque
            type='Attention !'
            contenu="Au cas où Node.js serait déjà installée dans votre ordinateur, vous devez vous rassurer d'avoir la version Node.js 18.17.0 ou plus. En effet, au moment où ce contenu est produit, Next.js a besoin de Node.js 18.17.0 ou plus pour fonctionner correctement. De plus, il est conseillé de télécharger la version Current et non la version LTS de Node.js"
        />
        <Paragraphe
            contenu="Pour savoir si Node.js est déjà installée et aussi savoir sa version, vous pouvez utiliser la commande suivante dans un CodeBlock :"
        />
        <CodeBlock
            // contenu='node --version'
            type='terminal'
            langage='jsx'
            contenu='node -v'
        />

        <Titre2
            title='Visual Studio Code'
        />
        <Paragraphe
            contenu="Visual Studio Code (souvent abrégé en 'VSCode') est un éditeur de code source puissant, flexible et gratuit, développé par Microsoft. Il est conçu pour les développeurs et vise à fournir un environnement de développement complet pour une variété de langages de programmation et de technologies. Nous l'utiliserons pour l'écriture de nos différents codes."
        />
        <LienExterne
            url='https://code.visualstudio.com/Download'
            description='Installer Visual Studio Code'
        />
        <Remarque
            type='Attention !'
            contenu="Ne pas confondre Visual Studio et Visual Studio Code. Ces deux logiciels sont développés par Microsoft mais sont différents. Ils ont d'ailleurs des logos différents."
        />
        <div className={styles.logo_vs}>
            <span>
                Logo de Visual Studio Code :
                <span className={styles.icone_vsc} ><SiVisualstudiocode /></span>
            </span>
            <span>
                Logo de Visual Studio :
                <span className={styles.icone_vs} ><SiVisualstudio /></span>
            </span>
        </div>

        <Titre2
            title="Git et Github"
        />
        <Paragraphe
            contenu="Pour faciliter la collobaration sur les projets que nous aurons à créer dans le cadre de ce cours, nous aurons besoin de Git et d'un compte sur la plateforme Github. En effet, Git est un système de contrôle de version conçu pour gérer le suivi des modifications apportées aux fichiers dans des projets collaboratifs, en particulier ceux liés au développement de logiciels. GitHub quant à lui est une plateforme web qui utilise Git pour offrir des services d'hébergement de code, de collaboration et de gestion de projet. Elle repose sur Git mais propose des fonctionnalités supplémentaires pour faciliter le travail collaboratif, la gestion de projets, et l'automatisation."
        />
        <LienExterne
            url='https://git-scm.com/downloads'
            description='Installer Git'
        />
        <LienExterne
            url='https://docs.github.com/fr/get-started/start-your-journey/creating-an-account-on-github'
            description='Créer un compte sur Github'
        />
        <LienExterne
            url='https://git.goffinet.org/13-annexe-c-commandes-git'
            description='Quelques commandes Git'
        />
        {/* // #endregion Notion de Framework */}

        <Divider />
        {/* // #region Technologies utilisées par Next.js */}
        <Titre1 title='Technologies utilisées par Next.js' index='2' />
        <Paragraphe
            contenu="Dans cette section, nous présenterons quelques technologies ou bibliothèques de Next.js que nous utiliserons tout au long de notre cours pour faciliter le développement de notre application. Parmi ces bibliothèques on peut citer React, JSX, clsx, ESLint et Webpack."
        />

        <Titre2 title='React' />
        <Paragraphe
            contenu="Next.js repose sur React pour la création d'interfaces utilisateur. En effet, React est une librairie JavaScript client grace à laquelle, nous pourrons manipuler le DOM de nos pages Web de façon optimale et rapide. Grace à React, notre application sera facilement transformée en application web monopage. Cette fonctionnalité réduira considérablement les appels au serveur, rendant ainsi notre application beaucoup plus performante."
        />
        <LienExterne
            url='https://react.dev/learn'
            description='Apprendre React'
        />

        <Titre2 title='JSX' />
        <Paragraphe
            contenu="JSX (JavaScript XML) est une extension de syntaxe pour JavaScript. Elle nous permettra d'écrire du code HTML directement à l'intérieur des fichiers JavaScript. Cette syntaxe facilite la construction d'interfaces utilisateur en rendant le code plus expressif et lisible. Bien que JSX soit une extension de JavaScript, les navigateurs ne sont pas capables de le comprendre. Il faudra donc convertir le langage JSX en JavaScript. Pour cela, nous utiliserons Babel qui est une librairie capable de compiler des langages de programmation vers d'autres."
        />
        <LienExterne
            url='https://fr.legacy.reactjs.org/docs/introducing-jsx.html'
            description='En savoir plus sur JSX'
        />
        <Remarque
            type='Bon à savoir'
            contenu="Une autre extension de JavaScript pouvant être utilisée en lieu et place de JSX est TypeScript. Mais nous le l'utiliserons pas dans le cadre de notre cours. Pour faire simple, on dira que TypeScript est une version typée de JavaScript."
        />

        <Titre2 title='clsx' />
        <Paragraphe
            contenu="clsx(classe extensible) est une petite bibliothèque JavaScript/TypeScript que nous utiliserons pour conditionner et combiner des noms de classes CSS de manière simple et efficace. Cela consistera à affecter différentes classes à un élément HTML à partir de certaines conditions préétablies."
        />
        <LienExterne
            url='https://github.com/lukeed/clsx'
            description='En savoir plus sur clsx'
        />

        <Titre2 title='ESLint' />
        <Paragraphe
            contenu="ESLint est un outil d'analyse statique du code pour JavaScript et TypeScript. Il nous permettra de détecter et de corriger les erreurs de syntaxe, les mauvaises pratiques, et les incohérences de style dans notre code."
        />
        <LienExterne
            url='https://eslint.org/'
            description='Comprendre ESLint'
        />

        <Titre2 title='Webpack' />
        <Paragraphe
            contenu="Webpack est un outil de construction qui sera utilisé par Next pour réaliser entre autres les tâches suivantes :"
        />
        <Item
            item="Bundling des Fichiers"
            description=" : Webpack regroupe tous les fichiers nécessaires au fonctionnement du projet, en plusieurs bundles ou lots optimisés. Cela permet de reduire le nombre de requêtes HTTP nécessaires au chargement de l'application."
        />
        <Item
            item="Transcompilation du code"
            description=" : C'est webpack qui fera appel à Babel pour compiler nos fichiers JSX en fichiers JavaScript, compréhensible par les navigateurs."
        />
        <Item
            item="Gestion des Ressources Statistiques"
            description=" : Webpack s'occupera des fichiers statiques de notre application tels ques les fichiers CSS, JSON, images et bien d'autres, en les optimisant pour la production."
        />
        <Remarque
            type='Bon à savoir'
            contenu="Suite à la présentation des différentes bibliothèques qui seront utilisées, on est en droit de s'inquiéter quant à leurs différentes configurations. C'est justement l'une des principales raisons pour lesquelles nous avons choisi d'utiliser Next.js. En effet, Next.js s'occupera de toutes les configurations nécessaires lors de la création du projet. Il nous suffira donc de saisir quelques lignes de commandes, et de répondre à quelques questions pour avoir un projet prêt à l'usage."
        />
        {/* // #endregion Technologies utilisées par Next.js */}

        <Divider />
        {/* // #region Création d'un projet React avec Next.js */}
        <Titre1 title="Création d'un projet React avec Next.js" index='3' />
        <Paragraphe
            contenu="Maintenant que le décor a été planté, il est temps pour nous de créer notre application React avec Next.js. Mais avant l'exécution des commandes qui vont suivre, il est important de se rassurer d'avoir parcouru toutes les étapes qui précèdent. Pour mieux évoluer, nous allons de prime à bord présenter l'application que nous développerons progressivement dans ce cours."
        />
        <DescriptionProjet />
        <Titre2 title='Créer un projet react avec Next.js' />
        <Item
            item='Ouvrir un CodeBlock'
            description=" : Faire un clic droit à l'emplacement où l'on souhaite créer le projet. Puis cliquer sur 'Ouvrir dans un CodeBlock'"
        />
        <Item
            item='Saisir la commande qui suit'
            description=" : @latest siginfie que nous utilisons la version la plus récente de create-next-app"
        />
        <CodeBlock type='terminal' contenu="npx create-next-app@latest" langage='jsx' />
        <Paragraphe
            contenu="Il suffit donc de répondre aux questions posées pour que le projet soit créé. Dans notre cas, voici les réponses à forunir : "
        />
        <Item
            item="Quel est le nom de votre projet ? "
            description=" Réponse = biblio-app"
        />
        <Item
            item="Voulez-vous utiliser TypeScript ? "
            description=" Réponse = NO"
        />
        <Item
            item="Voulez-vous utiliser ESLint ? "
            description=" Réponse = YES"
        />
        <Item
            item="Voulez-vous utiliser Tailand CSS ? "
            description=" Réponse = NO"
        />
        <Item
            item="Voulez-vous utiliser `src/` directory ? "
            description=" Réponse = NO"
        />
        <Item
            item="Voulez-vous utiliser App Router? (recommended) ? "
            description=" Réponse = YES"
        />
        <Item
            item="Voulez-vous personnaliser le default import alias (@/*) ? "
            description=" Réponse = NO"
        />
        <Remarque
            type='Important'
            contenu="Le nom du projet doit être en miniscule avec des tirets au lieu des espaces."
        />
        <Titre2
            title="Tester le fonctionnement de l'application"
        />
        <Paragraphe
            contenu="Pour tester le fonctionnement de l'application, il suffit de saisir les commandes qui vont suivre dans le CodeBlock. La première commande nous permettra de nous positionner dans le dossier de notre projet bilio-app et la deuxième permettra d'exécuter l'application."
        />
        <CodeBlock type='terminal' contenu='cd biblio-app' langage='jsx' />
        <CodeBlock type='terminal' contenu='npm run dev' langage='jsx' />
        <Paragraphe
            contenu="Pour finir, il suffit de placer le pointeur de la souris sur le lien 'http://localhost:3000' qui apparait, et de cliquer avec le bouton gauche de la souris pour voir la page d'accueil de l'application s'ouvrir avec le navigateur par défaut."
        />
        {/* // #endregion Création d'un projet React avec Next.js */}

        <Divider />
        {/* // #region Structure d\'un projet React avec Next.js */}
        <Titre1 title="Structure d'un projet React avec Next.js" index='4' />
        <Paragraphe
            contenu="Maintenant, est venu le moment pour nous d'explorer brièvement les différents fichiers générés lors de la création de notre projet. Si la création du projet s'est déroulée avec succès, votre projet aura la structure suivante : "
        />
        <DescriptionImage
            title='Structure du projet'
            url='structure.png'
        />
        <Titre2 title="Le dossier '/app'" />
        <Paragraphe
            contenu="Ce dossier contiendra la structure de base de notre application. Comme indiqué sur l'image précedente, ce dossier contiendra entre autres :"
        />
        <Item
            item="Le fichier 'layout.js'"
            description=" : C'est ici que sera définie la structure générale de notre application. Ce fichier très important nous permettra de définir les éléments communs à toutes les pages tels que les pieds de page, les barres de navigation et bien d'autres."
        />
        <Item
            item="Le fichier 'page.js'"
            description=" : C'est quelque sorte notre page d'accueil."
        />
        <Item
            item="Le fichier 'page.module.css'"
            description=" : Cette page contiendra le CSS du fichier page.js."
        />
        <Item
            item="Le fichier 'globals.css'"
            description=" : Dans ce fichier, nous définirons du CSS pouvant être appliqué à toutes les pages de notre application. On pourra y définir entre autres des couleurs, des polices de caractères et bien d'autres. "
        />
        <Item
            item="Le fichier 'favicon.ico'"
            description=" : C'est une petite icône utilisée pour représenter l'application dans les onglets des navigateurs, les favoris, les barres d'adresses, et d'autres endroits où une représentation graphique du site est requise. Nous verrons plus tard comment la modifier."
        />
        <Titre2 title="Le dossier '/public'" />
        <Paragraphe
            contenu="Ce dossier contiendra tous les fichiers statiques de notre application. Il s'agit des fichiers qui ne seront pas compilés par Babel. Parmi ces fichiers, on peut citer les fichiers images, .json, .txt, les icônes et bien d'autres."
        />
        <Titre2 title="Le fichier '/package.json'" />
        <Paragraphe
            contenu="il contiendra les configurations du projet avec Node.js. D'autres configurations seront ajoutées avec l'évolution du cours." />
        <Titre2 title="Le fichier '/next.config.mjs'" />
        <Paragraphe
            contenu="C'est ce fichier qui contient les configurations de Next. Nous y reviendrons."
        />
        {/* // #endregion Structure d\'un projet React avec Next.js */}

        <Divider />
        {/* // #region Configurations de base pour notre projet */}
        <Titre1
            title='Configurations de base pour notre projet'
            index='5'
        />
        <Paragraphe
            contenu="Jusqu'à présent, notre application, lorsqu'elle est exécutée, affiche des liens vers des pages de Vercel. Nous allons remplacer certains codes par les nôtres afin d'afficher simplement ' soyez les bienvenus sur biblio-app'. Pour cela, vous devez remplacer les codes des 4 fichiers qui vont suivre, par les codes fournis." />
        <Remarque
            type='Remarque'
            contenu="Vous pouvez copier le code grâce au bouton situé à l'extrémité droite en haut du bloc de code."
        />
        <Titre2 title="fichier '/app/layout.js'" />
        <CodeBlock chemin='/app/layout.js' contenu={layout} langage='jsx' />
        <Titre2 title="fichier '/app/page.js'" />
        <CodeBlock chemin='/app/page.js' contenu={page} langage='jsx' />
        <Titre2 title="fichier '/app/page.module.css'" />
        <CodeBlock chemin='/app/page.module.css' contenu={page_module} langage='css' />
        <Titre2 title="fichier '/app/globals.css'" />
        <CodeBlock chemin='/app/globals.css' contenu={globals_css} langage='css' />
        <DownloadLink
            url='./css/globals.css'
            item='globals.css complet'
        />
        <Remarque
            type='Remarque'
            contenu="Il suffit d'enregistrer les modifications et l'application affichera 'Soyez les bienvenus sur biblio-app' au centre de la page."
        />
        <Remarque
            type='Travail à faire'
            contenu="La dernière chose à faire sera de changer les extensions des fichiers layout.js et page.js en .jsx, pour des raisons que nous avons évoquées plus haut." />
        <Titre1 title='Présentation du projet' index='6' />
        <Titre1 title='Travail à faire' index='7' />
        {/* // #endregion Configurations de base pour notre projet */}
    </>
}