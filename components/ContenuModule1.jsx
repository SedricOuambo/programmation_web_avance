import styles from './ContenuModule1.module.css';
import Divider from '@/components/Divider'
import Titre1 from '@/components/Titre1'
import Titre2 from '@/components/Titre2'
import Paragraphe from '@/components/Paragraphe'
import Item from '@/components/Item'
import Remarque from '@/components/Remarque'
import LienExterne from '@/components/LienExterne'
import Terminal from '@/components/Terminal'
import { SiVisualstudio } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";

export default function ContenuModule1() {
    return <>
        <Divider />
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

        <Divider />
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
            contenu="Le premier et l'indispensable outil à installer sera Node.js. C'est un environnement d'exécution JavaScript open source, permettant d'exécuter du code JavaScript dans un terminal."
        />
        <LienExterne
            url='https://nodejs.org/en/download/current'
            description='Installer Node.js'
        />
        <Remarque
            type='Attention!'
            contenu="Au cas où Node.js serait déjà installée dans votre ordinateur, vous devez vous rassurer d'avoir la version Node.js 18.17.0 ou plus. En effet, au moment où ce contenu est produit, Next.js a besoin de Node.js 18.17.0 ou plus pour fonctionner correctement. De plus, il est conseillé de télécharger la version Current et non la version LTS de Node.js"
        />

        <Paragraphe
            contenu="Pour savoir si Node.js est déjà installée et aussi savoir sa version, vous pouvez utiliser la commande suivante dans un terminal :"
        />

        <Terminal
            contenu='node --version'
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
            type='Attention!'
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
    </>
}