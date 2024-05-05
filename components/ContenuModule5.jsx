import Divider from '@/components/Divider'
import Titre1 from '@/components/Titre1';
import Titre2 from '@/components/Titre2'
import Paragraphe from '@/components/Paragraphe'
import Item from '@/components/Item'
import Remarque from '@/components/Remarque'
import LienExterne from '@/components/LienExterne'
import CodeBlock from '@/components/CodeBlock'
import DownloadLink from '@/components/DownloadLink';
export default function ContenuModule5() {
    const layout_code = `'use client'
    import Header from '@/components/Header'
    import { Inter } from "next/font/google";
    import Footer from '@/components/Footer';
    import "./globals.css";
    import styles from './layout.module.css';
    const inter = Inter({ subsets: ["latin"] });
    export default function RootLayout({ children }) {
      return (
        <html lang="en">
          <body className={inter.className + ' ' + styles.body}>
            <Header />
            <main className={styles.main}>
              {children}
            </main>
            <Footer />
          </body>
        </html>
      );
    }    
`;

    const page_code = `'use client'
import Accueil from "@/components/Accueil";
export default function Home() {
  return <>
    <Accueil />
  </>
}
`;

    const code_connexion = `import Connexion from "@/components/Connexion"
export default function Page(){
    return <>
        <Connexion/>
    </>
}
`;

    const code_contact = `import Contact from "@/components/Contact"
export default function Page(){
    return <>
        <Contact/>
    </>
}
`;

    const code_documents = `'use client'
import Documents from "@/components/Documents"
export default function Page(){
    return <>
        <Documents/>
    </>
}
`;

    const code_menu_nav = `import Link from 'next/link';
import styles from './MenuNav.module.css';
export default function MenuNav() {
    return <nav className={styles.nav}>
        <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="documents">Documents</Link></li>
            <li><Link href="contact">Contact</Link></li>
            <li><Link href="connexion">Connexion</Link></li>
        </ul>
    </nav>
}
`;

    const code_menu_nav_new = `import styles from './MenuNav.module.css';
import { useRouter } from 'next/navigation';
export default function MenuNav() {
    const routeur = useRouter();
    return <nav className={styles.nav}>
        <ul>
            <li onClick={() => routeur.push('/')}>Accueil</li>
            <li onClick={() => routeur.push('/documents')}>Documents</li>
            <li onClick={() => routeur.push('/contact')}>Contact</li>
            <li onClick={() => routeur.push('/connexion')}>Connexion</li>
        </ul>
    </nav>
}
`;
    return <>
        <Divider />
        {/* #region Le routage client */}
        <Titre1 title='Le routage client' index='0' />
        <Paragraphe
            contenu="Next.js offre plusieurs types de routage pour gérer la navigation dans une application. Dans cette section, nous ferons une briève description de ces types de routage mais nous appliquerons juste deux sur notre application 'biblio-app'. À savoir : 'le routage basé sur les Liens (<Link>)' et 'le routage Client-Side avec next/router'."
        />
        <LienExterne
            url='https://nextjs.org/docs/pages/building-your-application/routing'
            description='En savoir plus sur les types de routage'
        />
        {/* // #endregion Le routage client*/}

        <Divider />
        {/* #region Le composant Link */}
        <Titre1 title='le routage basé sur les Liens (<Link>)' index='1' />
        <Paragraphe
            contenu="Next.js utilise un composant Link pour créer des liens internes qui permettent la navigation client-side. Contrairement à des liens HTML classiques qui déclenchent un rechargement complet, le composant Link permet une navigation fluide sans rechargement. Pour matérialiser, nous allons complètement changer l'organisation de notre application 'blio-app', à partir de sa dernière version (celle obtenue dans le module4)."
        />
        <DownloadLink
            url='./code-source/biblio-app-module-4.zip'
            item='biblio-app-module-4'
        />
        <Titre2 title="Réorgisation de la structure de l'application" />
        <Paragraphe
            contenu="Ci-dessous les actions à mener : "
        />
        <Item
            item="Nouveaux dossiers"
            description=" : Dans le dossier 'app', créer un dossier correspondant à chaque menu (Le dossier doit porter le nom du menu) de notre application, puis créer un fichier 'page.jsx' à l'intérieur du nouveau dossier. Nous aurons donc trois nouveaux dossiers ('documents', 'contact' et 'connexion'), chacun contenant un fichier 'page.jsx'"
        />
        <Item
            item="Supprimer la variable 'page' de 'layout.jsx'"
            description=" : Supprimer la ligne 'const [page, setPage] = useState('accueil');"
        />
        <Item
            item="Supprimer 'setPage={setPage}' de 'layout.jsx'"
            description=""
        />
        <Item
            item="Remplacer tout le contenu de '<main>' par '{children}'"
            description=""
        />
        <Paragraphe
            contenu="Ci-dessous, le nouveau contenu de 'layout.jsx'"
        />
        <CodeBlock chemin='/app/layout.jsx' contenu={layout_code} langage='jsx' />
        <Item
            item="Modifier '/app/page.jsx'"
            description=" : Etant donné que 'page.jsx' joue le rôle du fichier 'index' habituel, il recevra donc le composant 'Accueil'. Son nouveau code est le suivant:"
        />
        <CodeBlock chemin='/app/page.jsx' contenu={page_code} langage='jsx' />
        <Item
            item="Code de '/app/connexion/page.jsx'"
            description=" : Importer le composant 'Connexion' dans le fichier 'page.jsx' se trouvant dans le dossier 'connexion' nouvellement créé : "
        />
        <CodeBlock chemin='/app/connexion/page.jsx' contenu={code_connexion} langage='jsx' />
        <Item
            item="Code de '/app/contact/page.jsx'"
            description=" : Importer le composant 'Contact' dans le fichier 'page.jsx' se trouvant dans le dossier 'contact' nouvellement créé : "
        />
        <CodeBlock chemin='/app/contact/page.jsx' contenu={code_contact} langage='jsx' />
        <Item
            item="Code de '/app/documents/page.jsx'"
            description=" : Importer le composant 'Documents' dans le fichier 'page.jsx' se trouvant dans le dossier 'documents' nouvellement créé : "
        />
        <CodeBlock chemin='/app/documents/page.jsx' contenu={code_documents} langage='jsx' />
        <Item
            item="Nouveau code de '/Components/MenuNav.jsx'"
            description=" : Toutes les pages étant déjà créées, il est temps de mettre les liens vers elles à partir du composant 'MenuNav'. Pour cela, il faut remplacer le code du composant 'MenuNav' par le code ci-dessous : "
        />
        <CodeBlock chemin='/Components/MenuNav.jsx' contenu={code_menu_nav} langage='jsx' />
        <Remarque
            type="Remarque"
            contenu="Il est important de noter qu'un nouveau composant de Next a été importer dans le composant 'MenuNav' : il s'agit du composant 'Link'. De plus, la balise '<a>' a été remplacée par ce nouveau Composant."
        />
        <Titre2 title="Importance du composant 'Link'" />
        <Paragraphe
            contenu="Le composant Link dans Next.js joue un rôle crucial dans le routage côté client, permettant une navigation fluide et rapide entre différentes pages de l'application sans recharger entièrement la page. Parmi ses fonctionnalités, on peut citer :"
        />
        <Item
            item="Le préchargement de pages"
            description=" : Next.js précharge automatiquement les pages liées via le composant Link. Lorsque le lien apparaît à l'écran (ou lorsqu'il est anticipé par un certain comportement utilisateur), Next.js peut précharger la page associée en arrière-plan. Cela rend la navigation presque instantanée lorsqu'un utilisateur clique sur le lien."
        />
        <Item
            item="La navigation sans rechargement complet"
            description=" : Lorsqu'un utilisateur clique sur un lien standard <a>, le navigateur déclenche un rechargement complet de la page. Avec le composant Link, Next.js utilise le routage côté client, ce qui permet de charger uniquement le contenu nécessaire sans rechargement complet. Cela améliore les performances et l'expérience utilisateur."
        />
        <Remarque
            type="Exercice d'application"
            contenu="Remplacer le composant 'Link' par la balise standard 'a', ensuite effectuer des changements de page et essayer de trouver la différence."
        />
        <Remarque
            type="Bon à savoir"
            contenu="Il n'est pas nécessaire d'utiliser le composant Link pour un lien externe à l'application. Dans ce cas, il vaut mieux utiliser la balise standard 'a'."
        />
        {/* // #endregion Le composant Link*/}

        <Divider />
        {/* #region Le hook useRouter */}
        <Titre1 title='le routage Client-Side avec le hook useRouter' index='2' />
        <Paragraphe
            contenu="Le hook useRouter de Next.js permet d'accéder au routeur (router) et d'interagir avec le routage côté client. Avec useRouter, nous pouvons obtenir des informations sur la route actuelle, naviguer entre les pages, ou même réagir aux événements de routage. Voici quelques-unes des fonctionnalités principales du hook useRouter :"
        />
        <Titre2 title="Récupération des informations de la route actuelle" />
        <Paragraphe
            contenu="useRouter permet d'accéder à des détails comme le chemin actuel (pathname), les paramètres de requête (query), et la chaîne de recherche (asPath)."
        />
        <Titre2 title="Navigation conditionnelle" />
        <Paragraphe
            contenu="On peut utiliser useRouter pour naviguer entre les pages de manière conditionnelle, avec des fonctions comme router.push() ou router.replace(). Cela est utile pour des redirections ou des transitions conditionnelles."
        />
        <Titre2 title="Gestion des événements de routage" />
        <Paragraphe
            contenu="useRouter permet d'écouter des événements de routage, comme le début du changement de route, l'achèvement, ou les erreurs, en utilisant des méthodes comme router.events.on()."
        />
        <Titre2 title="Illustration de useRouter" />
        <Paragraphe
            contenu="Pour illustrer le fonctionnement de 'useRouter', nous allons récrire notre 'MenuNav.jsx' en l'utilisant. Le nouveau code est le suivant : "
        />
        <CodeBlock chemin='/Components/MenuNav.jsx' contenu={code_menu_nav_new} langage='jsx' />
        <Remarque
            type="Remarque"
            contenu="Comme nous pouvons le constater, le hook 'useRouter' a été importé et utilisé pour faire la redirection de page en cas de clic sur un lien du menu de navigation."
        />
        <Remarque
            type="Bon à savoir"
            contenu="Il est recommandé d'utliser 'useRouter' seulement lorsqu'on ne peut utliser le composant 'Link'."
        />
        <LienExterne
            url='https://nextjs.org/docs/pages/api-reference/functions/use-router'
            description='En savoir plus sur useRouter'
        />
        {/* // #endregion Le hook useRouter*/}

        <Divider />
        {/* #region Code source */}
        <Titre1 title='Code source' index='3' />
        <DownloadLink
            url='./code-source/biblio-app-module-5.zip'
            item='Télécharger le projet créé'
        />
        <Remarque
            type="Important"
            contenu="Avant d'executer la commande 'npm run dev', bien vouloir exécuter la commande 'npm i'."
        />
        {/* // #endregion Code source*/}

        <Divider />
        {/* #region Travail à faire */}
        <Titre1 title='Travail à faire' index='4' />
        <DownloadLink
            url='./pdf/Semaine-5.pdf'
            item='Télécharger le travail'
        />
        {/* // #endregion Travail à faire*/}
    </>
}