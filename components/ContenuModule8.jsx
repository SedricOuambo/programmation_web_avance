import Divider from '@/components/Divider';
import Titre1 from '@/components/Titre1';
import Titre2 from '@/components/Titre2';
import Paragraphe from '@/components/Paragraphe';
import Item from '@/components/Item';
import Remarque from '@/components/Remarque';
import LienExterne from '@/components/LienExterne';
import CodeBlock from '@/components/CodeBlock';
import DownloadLink from '@/components/DownloadLink';
import code from '@/public/json/code-module8.json';
import { getCode } from '@/components/Code';

export default function ContenuModule8() {

    return <>
        <Divider />
        {/* #region Contexte */}
        <Titre1 title="Contexte" index='0' />
        <Paragraphe
            contenu="Jusqu'à présent, dans notre application 'biblio-app', nous avons eu l'habitude de faire passer les données de haut en bas (du parent au fils) via les props. Cette approche peut devenir inefficace pour certains types de props tels que le thème de l'interface utilisateur et la langue préférée. En effet, ces props seront nécessaires pour de nombreux pour ne pas dire presque tous les composants de notre application. Le Contexte nous permettra de résoudre ce problème en partageant des données entre tous les composants de l'application sans avoir à les passer explicitement à chaque niveau de l'arborescence."
        />
        <Remarque
            type="Illustration"
            contenu="Pour illustrer cela, nous allons ajouter à notre composant 'Header', une case à cocher pour changer le thème de l'interface graphique de notre application (light mode et dark mode). Pour cela, les étapes à suivre : "
        />
        <Titre2 title="Créer un composant 'ThemeProvider'" />
        <CodeBlock chemin='/components/ThemeProvider.jsx' contenu={getCode(code, 'ThemeProvider')} langage='jsx' />
        <Paragraphe
            contenu="Voici une explication globale de ce que fait ce composant 'ThemeProvider':"
        />
        <Item
            item="Création du contexte de thème (ThemeContext)"
            description=" : La ligne const ThemeContext = createContext(); crée un contexte React qui sera utilisé pour partager le thème avec les composants de l'application."
        />
        <Item
            item="Fourniture du thème aux composants (ThemeProvider)"
            description=" : Le composant ThemeProvider est créé pour encapsuler d'autres composants et leur fournir le thème. Il utilise le hook useState pour gérer l'état du thème. Tous les composants enfants de ThemeProvider pourront accéder au thème via le contexte ThemeContext."
        />
        <Item
            item="Utilisation du thème dans les composants (useTheme)"
            description=" : Le hook personnalisé useTheme est créé pour permettre aux composants de récupérer le thème actuel et de le modifier si nécessaire. Il utilise le hook useContext pour accéder au contexte ThemeContext, ce qui lui permet de récupérer le thème actuel et la fonction pour le modifier."
        />
        <Paragraphe
            contenu="En résumé, ce composant 'ThemeProvider' permettra la gestion centraliée du thème pour notre application. Le composant ThemeProvider fournit le thème à tous ses enfants, tandis que le hook useTheme permet à ces enfants de récupérer et de modifier le thème en fonction de leurs besoins."
        />
        <Titre2 title="Modifier le composant 'MenuNav'" />
        <CodeBlock chemin='/components/MenuNav.jsx (nouveau)' contenu={getCode(code, 'NavNew')} langage='jsx' />
        <Paragraphe
            contenu="Dans le composant 'MenuNav', nous avons importé le hook personnalisé 'useTheme' et ce dernier nous permet de basculer la variable 'theme' entre les deux états 'light' et 'dark', à chaque fois que la case à cocher est cochée ou décochée."
        />
        <Remarque
            type="Remarque"
            contenu="Il est important de ne pas oublier 'use client' se trouvant en debut de fichier."
        />
        <Titre2 title="Modifier le layout de base" />
        <Paragraphe
            contenu="Il faut importer le ThemeProvider dans le fichier 'layout.jsx' avec la commande suivante : "
        />
        <CodeBlock chemin='/app/layout.jsx' contenu="import { ThemeProvider } from '@/components/ThemeProvider';" langage='jsx' />

        <Paragraphe
            contenu="Par la suite, il faut transferer le ThemeProvider à tous les enfants en mettant tout le contenu du 'body' entre les balises <ThemeProvider> et </ThemeProvider>. Dans notre cas, on aura le code suivant : "
        />
        <CodeBlock chemin='/app/layout.jsx' contenu={getCode(code, 'bodyCode')} langage='jsx' />
        <Titre2 title="Modifier le composant 'Header'" />
        <CodeBlock chemin='/components/Header.jsx (nouveau)' contenu={getCode(code, 'headerCode')} langage='jsx' />
        <Titre2 title="Modifier le composant 'Header.module.css'" />
        <CodeBlock chemin='/components/Header.module.css (ajouter)' contenu={getCode(code, 'headerCss')} langage='css' />
        <Remarque
            type="Résultat"
            contenu="Après toutes ces modifications, si on coche la case du mode sombre, l'arrière plan du Header doit changer."
        />
        <LienExterne
            url='https://react.dev/learn/passing-data-deeply-with-context'
            description="En savoir plus sur le Contexte"
        />
        {/* Contexte */}

        <Divider />
        {/* #region Local Storage*/}
        <Titre1 title="Local Storage" index='1' />
        <Paragraphe
            contenu="Si nous actualisons notre navigateur, nous constaterons que le thème n'est pas conservé. Pour résoudre ce problème, nous allons sauvegarder le thème dans un espace de stockage du navigateur appelé Local storage ou stockage Local. Cela se fera en modifiant légèrement le composant 'ThemeProvider'."
        />
        <CodeBlock chemin='/components/ThemeProvider.jsx (nouveau)' contenu={getCode(code, 'ThemeNew')} langage='jsx' />
        <LienExterne
            url='https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage'
            description="En savoir plus sur 'localStorage'"
        />
        {/* #endregion Local Storage */}

        <Divider />
        {/* #region Hooks personnalisées*/}
        <Titre1 title="Hooks personnalisées" index='2' />
        <Paragraphe
            contenu="Jusqu'à présent à l'exception de l'exemple précédent, nous avons eu l'habitude d'utiliser des hooks déjà intégrés à React. Mais nous pouvons créer les notres. Pour illustrer cela, nous allons revenir sur notre composant 'FormControlle'."
        />
        <Paragraphe
            contenu="Dans ce composant, nous avons créé deux champs de type « input » (à savoir le nom et courriel). Pour chacun de ces champs, nous avons créé une variable en utilisant le hook 'useState'. Enfin, toujours pour chacun de ces champs, nous avons créé une fonction 'handleNomDuChamp' pour faire sa mise à jour. On peut constater qu'il y a beaucoup de répétitions qui sont faciles à gérer pour l'instant puisque nous avons juste deux champs. Si l'on se retrouve avec un peu plus de champs, cette approche deviendra lourde."
        />
        <Paragraphe
            contenu="Pour résoudre ce problème, nous allons définir un hook nommé 'useFormInput', qui réalisera toutes les actions citées à chaque fois que nous créerons un champ de type « input ». Cela rendra le code de notre composant beaucoup plus agréable."
        />
        <CodeBlock chemin='/components/useFormInput.jsx' contenu={getCode(code, 'useFormInput')} langage='jsx' />
        <CodeBlock chemin='/components/FormControlle.jsx (nouveau)' contenu={getCode(code, 'FormControlleNew')} langage='jsx' />
        <LienExterne
            url='https://react.dev/learn/reusing-logic-with-custom-hooks'
            description="En savoir plus sur les hooks personnalisés"
        />
        {/* #endregion Hooks personnalisées*/}

        <Divider />
        {/* #region Internationalisation (i18n)*/}
        <Titre1 title="Internationalisation (i18n)" index='3' />
        <Paragraphe
            contenu="L'internationalisation (i18n) est le processus de conception et de développement d'une application pour la rendre accessible à un public international, en prenant en compte les différences linguistiques et culturelles. Pour illustrer cela, nous allons transformer notre application 'biblio-app' en une application bilingue(Français et Anglais)."
        />
        <Paragraphe
            contenu="Plusieurs bibliothèques JavaScript populaires peuvent être utilisées pour la gestion de l'internationalisation dans les applications React. Parmi ces bibliothèques, on peut citer react-i18next, react-intl, et linguiJS. Nous utiliserons react-intl dans notre application."
        />
        <Paragraphe
            contenu="Voici les étapes à suivre : "
        />
        <Titre2 title="Installer React-intl" />
        <Paragraphe
            contenu="Dans un terminal de l'application, utiliser la commande suivante pour installer la bibliothèque react-intl"
        />
        <CodeBlock type='terminal' langage='jsx' contenu='npm i -S react-intl' />
        <Titre2 title="Les données de chaque langue" />
        <Paragraphe
            contenu="Dans un premier temps, pour chaque langue, nous allons créer un fichier json contenant les données du site équivalentes à cette dernière. Ces fichiers serons enregistrés dans un dossier nommé 'i18n' créé à la racine du dossier l'application."
        />
        <CodeBlock chemin='/i18n/fr.json' contenu={getCode(code, 'fr')} langage='jsx' />
        <CodeBlock chemin='/i18n/en.json' contenu={getCode(code, 'en')} langage='jsx' />
        <Titre2 title="LocaleProvider" />
        <Paragraphe
            contenu="Nous allons créer un Provider qui nous permettra de partager la langue courante ansi que les données correspondantes."
        />
        <CodeBlock chemin='/components/LocaleProvider.jsx' contenu={getCode(code, 'Locale')} langage='jsx' />

        <Titre2 title="Modifier le layout de base" />
        <Paragraphe
            contenu="Il faut importer le LocaleProvider dans le fichier 'layout.jsx' avec la commande suivante : "
        />
        <CodeBlock chemin='/app/layout.jsx' contenu="import { LocaleProvider } from '@/components/LocaleProvider';" langage='jsx' />

        <Paragraphe
            contenu="Par la suite, il faut transferer le LocaleProvider à tous les enfants en mettant tout le contenu du 'body' entre les balises <LocaleProvider> et </LocaleProvider>. Dans notre cas, on aura le code suivant : "
        />
        <CodeBlock chemin='/app/layout.jsx' contenu={getCode(code, 'bodyCode2')} langage='jsx' />

        <Titre2 title="Modifier le composant 'MenuNav'" />
        <CodeBlock chemin='/components/MenuNav.jsx' contenu={getCode(code, 'MenuNew')} langage='jsx' />
        <Paragraphe
            contenu="Plusieurs changements ont été réalisés dans le composant 'MenuNav.jsx' : "
        />
        <Item
            item="useLocale"
            description=" : useLocale a été importé pour gérer la langue courante"
        />
        <Item
            item="FormattedMessage"
            description=" : Le composant 'FormattedMessage' de 'react-intl' a été importé également. Son rôle est d'intégrer les données de notre application de manière dynamique et de gérer les traductions de ces données."
        />
        <Remarque
            type="Remarque"
            contenu="On peut constater que le mot 'Accueil' a été remplacé par '<FormattedMessage id='app.header.menu.lien1'/>'. Ce code permettra d'afficher soit 'Accueil' si la langue courante est 'fr', soit 'Home' si la langue courante est 'en'. Il en est de même pour les autres liens."
        />
        <LienExterne
            url='https://lokalise.com/blog/react-i18n-intl/'
            description="En savoir plus sur React-intl"
        />
        <Remarque
            type="Travail à faire"
            contenu="Vous avez probablement constaté que lorsque le navigateur est actualisé, la version anglaise de notre application n'est pas maintenue. Votre travail consistera à résoudre ce problème comme nous l'avons fait précédemment en utilisant le 'Local Storage'."
        />
        {/* #endregion Internationalisation (i18n)*/}

        <Divider />
        {/* #region Code source */}
        <Titre1 title='Code source' index='4' />
        <DownloadLink
            url='./code-source/biblio-app-module-8.zip'
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
            url='./pdf/Semaine-8.pdf'
            item='Télécharger le travail'
        />
        {/* // #endregion Travail à faire*/}
    </>
}