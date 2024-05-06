import Divider from '@/components/Divider'
import Titre1 from '@/components/Titre1'
import Paragraphe from '@/components/Paragraphe'
import Item from '@/components/Item'
import Remarque from '@/components/Remarque'
import CodeBlock from '@/components/CodeBlock'
import DownloadLink from '@/components/DownloadLink';
import code from '@/public/json/code-module3.json';
import {getCode} from '@/components/Code';

export default function ContenuModule3() {
    return <>
        <Divider />
        {/* #region Notion de Framework */}
        <Titre1 title='Notion de hook dans React' index='0' />
        <Paragraphe
            contenu="Les hooks dans React sont des fonctions permettant au développeurs de bénéficier de nombreuses fonctionnalités sans avoir à écrire de classes. Les noms de ces fonctions (hooks) commencent généralement par 'use'. Parmi elles, on peut citer :"
        />
        <Item
            item='useState'
            description=" : Il permet de gérer l'état local dans un composant fonctionnel. Il renvoie une paire de valeurs : la valeur actuelle de l'état et une fonction pour le mettre à jour."
        />
        <Item
            item='useEffect'
            description=" : Il permet de gérer les effets secondaires, tels que les appels réseau, les abonnements, ou la modification du DOM, dans un composant fonctionne"
        />
        <Item
            item='useContext'
            description=" : Il permet d'accéder à un contexte React, facilitant le partage de données entre composants sans avoir à passer des props explicitement à chaque niveau de la hiérarchie"
        />
        {/* // #endregion Notion de Framework*/}

        <Divider />
        {/* #region Le hook d'état ou useState*/}
        <Titre1 title="Le hook d'état ou useState" index='1' />
        <Paragraphe
            contenu="Comme nous l'avais dit précédemment, le hook d'état permet de gérer l'état local dans un composant fonctionnel. Il renvoie une paire de valeurs : la valeur actuelle de l'état et une fonction pour le mettre à jour. Pour l'illustrer, nous allons reprendre notre application biblio-app dans son état final dans le module2."
        />
        <DownloadLink
            url='./code-source/biblio-app-module-2.zip'
            item='biblio-app module2'
        />
        <Remarque
            type='Travail à faire'
            contenu="Nous allons dans un premier temps créer 3 nouveaux composants pour les contenus des menus 'Documents', 'Contact' et 'Connexion' de notre application. Par le suite, nous allons lier chaque bouton de la barre de navigation à son composant correspondant. Pour y parvenir, nous suivrons les étapes suivantes:"
        />
        <Item
            item="Créer les composants"
            description=" : Vous devez créer dans le dossier 'components', 3 composants nommées 'Documents', 'Contact' et 'Connexion'. Chaque composant devra contenir juste son 'nom'. Exemple: le composant 'Documents' doit simplement afficher le mot 'Document'."
        />
        <Item
            item="Importer les nouveaux composants dans 'layout.jsx'"
            description=" : Cela se fait avec le code suivant au debut du fichier"
        />
        <CodeBlock chemin='/app/layout.jsx' contenu={getCode(code, 'import_in_page')} langage='jsx' />
        <Item
            item="Importer le hook 'useState'"
            description=" : Cela se fait avec le code suivant au debut du fichier"
        />
        <CodeBlock chemin='/app/layout.jsx' contenu="import { useState } from 'react';" langage='jsx' />
        <Item
            item="Créer la paire de valeurs"
            description=" : Cela consite à créer la paire qui recevra la valeur la page courante et la fonction pour la mettre à jour. Cela se fait grâce au code suivant juste après la ligne 'export default function RootLayout({ children })'"
        />
        <CodeBlock chemin='/app/layout.jsx' contenu=" const [page, setPage] = useState('accueil');" langage='jsx' />
        <Item
            item="Affichage conditionnel (nous y reviendrons)"
            description=" : Dans 'layout.jsx', remplacer '{children}' par le code suivant : "
        />
        <CodeBlock chemin='/app/layout.jsx' contenu={getCode(code, 'corps_page')} langage='jsx' />
        <Remarque
            type="Explication"
            contenu="A ce stade, nous avons 4 composants pouvant être affichés, en fonction du contenu de la variable 'page' qui est produit par notre hook 'useState'. Etant donné que le 'useState' à été initialisé avec 'accueil', le composant 'Accueil' sera donc affiché par défaut. Si nous remplaçons la valeur initiale du 'useState par 'documents', c'est plutôt le composant 'Documents' qui sera affiché. "
        />
        <Item
            item="Etat final du fichier 'layout.jsx'"
            description=""
        />
        <CodeBlock chemin='/app/layout.jsx' contenu={getCode(code, 'final_layout')} langage='jsx' />
        <Item
            item="Transferer la fonction 'setPage' au composant '<Header>'"
            description=" : Dans 'layout.jsx', remplacer <Header> par le code suivant : "
        />
        <CodeBlock chemin='/app/layout.jsx' contenu="<Header setPage={setPage}/>" langage='jsx' />
        <Item
            item="Passer la fonction 'setPage' comme props au composant '<Header>'"
            description=" : Dans 'Header.jsx', remplacer la ligne 'export default function Header()'  par le code suivant : "
        />
        <CodeBlock chemin='/components/Header.jsx' contenu="export default function Header({setPage})" langage='jsx' />

        <Item
            item="Transferer la fonction 'setPage' au composant '<MenuNav>'"
            description=" : Dans 'Header.jsx', remplacer <MenuNav />par le code suivant : "
        />
        <CodeBlock chemin='/components/Header.jsx' contenu="<MenuNav setPage={setPage} />" langage='jsx' />

        <Item
            item="Remplacer le code du composant 'MenuNav' par le code suivant :"
            description=""
        />
        <CodeBlock chemin='/components/MenuNav.jsx' contenu={getCode(code, 'menu_nav')} langage='jsx' />
        <Remarque
            type="Remarque"
            contenu="A ce stade, l'état de notre variable 'page' change lorsqu'on clique sur un bouton de la barre de navigation. Ce qui permet ainsi de changer le composant courant. Cela grâce au 'useState' que nous avons importé. De nombreux autres exmples utiles seront présentés tout au long de notre cours."
        />

        <Remarque
            type="Exercie d'application"
            contenu="Créer un nouveau composant nommé 'Compteur' qui réalise les actions suivantes : Créer un compteur qui affihce initialement 0 et un bouton qui permet d'incrémeter le compteur lorsqu'on clique dessus. Vous devez utiliser l'événement 'onClick' comme précédemment dans le composant 'MenuNav'. importer ensuite ce comopsant dans votre comoposant 'Accueil'."
        />
        {/* // #endregion Le hook d'état ou useState*/}

        <Divider />
        {/* #region Gestion des événements */}
        <Titre1 title='Gestion des événements' index='2' />
        <Paragraphe
            contenu="Pour illustrer la gestion des événements dans Réact, dans notre composant 'Documents', nous allons créer un bouton permettant d'ajouter un nouveau livre lorsqu'on clique dessus. Pour cela, il faut remplacer les contenus des fichiers 'Docouments.jsx' et 'Docouments.module.css', par les codes qui vont suivre."
        />
        <CodeBlock chemin='/components/Documents.jsx' contenu={getCode(code, 'document')} langage='jsx' />
        <CodeBlock chemin='/components/Documents.module.css' contenu={getCode(code, 'document_module')} langage='css' />
        <Remarque
            type="Explications"
            contenu="Dans cet exemple, nous avons l'événement 'onChange' qui gère l'affichage du nom du livre dans la zone de saisie, nous avons aussi l'événement 'onClick' qui permet d'ajouter le livre dans la liste des livres. De nombreux autres événements peuvent être utilisés et nous auront beaucoup d'autres examples dans le suite du cours."
        />
        {/* // #endregion Gestion des événements*/}

        <Divider />
        {/* #region Affichage conditionnel */}
        <Titre1 title='Affichage conditionnel' index='3' />
        <Paragraphe
            contenu="Dans, nous disposons de 3 techniques pour faire de l'affichage conditionnelle des données. Pour illustrer cela, nous allons reprendre le code de notre layout de base."
        />
        <Item
            item="L'opérateur ternaire"
            description=" : Le 'main' de notre layout de base a été rédigé en utilsant cet opérateur"
        />
        <CodeBlock chemin='/app/layout.jsx' contenu={getCode(code, 'main1')} langage='jsx' />

        <Item
            item="Le ET logique (&&)"
            description=" : On peut réécrire le 'main' de notre layout avec l'opérateur 'ET logique'"
        />
        <CodeBlock chemin='/app/layout.jsx' contenu={getCode(code, 'main2')} langage='jsx' />

        <Item
            item="Le si ordinaire (if ... else ...)"
            description=" : On peut réécrire le 'main' de notre layout avec le si ordinaire"
        />
        <CodeBlock chemin='/app/layout.jsx' contenu={getCode(code, 'main3')} langage='jsx' />
        {/* // #endregion Affichage conditionnel*/}

        <Divider />
        {/* #region Code source */}
        <Titre1 title='Code source' index='4' />
        <DownloadLink
            url='./code-source/biblio-app-module-3.zip'
            item='Télécharger le projet créé'
        />
        <Remarque
            type="Important"
            contenu="Avant d'executer la commande 'npm run dev', bien vouloir exécuter la commande 'npm i'."
        />
        {/* // #endregion Code source*/}

        <Divider />
        {/* #region Travail à faire */}
        <Titre1 title='Travail à faire' index='5' />
        <DownloadLink
            url='./pdf/semaine-3.pdf'
            item='Télécharger le travail'
        />
        {/* // #endregion Travail à faire*/}
    </>
}