import Divider from '@/components/Divider'
import Titre1 from '@/components/Titre1';
import Titre2 from '@/components/Titre2'
import Paragraphe from '@/components/Paragraphe'
import Item from '@/components/Item'
import Remarque from '@/components/Remarque'
import LienExterne from '@/components/LienExterne'
import CodeBlock from '@/components/CodeBlock'
import DownloadLink from '@/components/DownloadLink';
import code from '@/public/json/code-module7.json';
import { getCode } from '@/components/Code';

export default function ContenuModule7() {

    return <>
        <Divider />
        {/* #region Les refs et le DOM */}
        <Titre1 title="Le hook 'useRef' et le DOM" index='0' />
        <Paragraphe
            contenu="Contrairement à 'useState', qui est conçu pour gérer des états et déclencher des re-rendus lorsqu'ils changent, 'useRef est un hook de React permettant de maintenir des valeurs qui ne nécessitent pas de re-rendu lorsque modifiées."
        />
        <Titre2 title="Les fonctions principales de 'useRef'" />
        <Item
            item="Références du DOM"
            description=" : 'useRef' est couramment utilisé pour obtenir des références à des éléments du DOM, ce qui permet des manipulations directes (comme mettre le focus sur un champ d'entrée ou lire la valeur d'un élément)."
        />
        <Item
            item="Valeurs Persistantes"
            description=" : 'useRef' peut également être utilisé pour stocker des valeurs ou des objets qui doivent persister entre les rendus mais ne devraient pas provoquer de re-rendus lorsqu'ils changent."
        />
        <Item
            item="Contenu Mutable"
            description=" : Contrairement à 'useState', qui provoque un re-rendu lorsque l'état change, 'useRef' permet de modifier son contenu sans affecter le rendu du composant."
        />
        <Titre2 title="Structure de 'useRef'" />
        <Paragraphe
            contenu="'useRef' renvoie un objet avec une propriété 'current'. Cette propriété contient la référence ou la valeur que l'on souhaite stocker. On peut lire ou modifier cette propriété sans déclencher de re-rendu."
        />
        <Remarque
            type="Information"
            contenu="Nous illustrerons le fonctionnement de 'useRef' dans la section suivante avec la notion de formulaire non contrôlé."
        />
        <LienExterne
            url='https://react.dev/reference/react/useRef'
            description="En savoir plus sur 'useRef'"
        />
        {/* // Les refs et le DOM*/}

        <Divider />
        {/* #region Formulaire non contrôlé et validation */}
        <Titre1 title="Formulaire non contrôlé et validation" index='1' />
        <Paragraphe
            contenu="Dans cette section, nous allons créer un formulaire où les valeurs des champs d'entrée sont gérées directement par le DOM au lieu d'être contrôlées par l'état du composant. Ce type de formulaire en React est appelé 'formulaire non contrôlé'. En effet, nous utiliserons les références (useRef) pour accéder aux valeurs des éléments du formulaire, car les modifications de ces valeurs n'entraînent pas de re-rendu du composant."
        />
        <Paragraphe
            contenu="Reprenons notre application 'biblio-app' puis, créons un nouveau composant nommé 'FormNonControlle.jsx'. Ce nouveau composant contiendra un formulaire non contrôlé que nous importerons dans le composant 'Contact'."
        />
        <Titre2 title="Formulaire non contrôlé sans validation" />
        <CodeBlock chemin='/components/FormNonControlle.jsx' contenu={getCode(code, 'FormNonControlle1')} langage='jsx' />
        <Remarque
            type="Remarque"
            contenu="Nous pouvons constater qu'une référence a été créée pour chaque champ du formulaire grâce au composant 'useRef'. Par la suite, la liaison a été faite grâce à l'attribut 'ref' de React dans chaque champ. Il suffit donc d'importer ce composant dans 'Contact.jsx' pour l'utiliser."
        />
        <CodeBlock chemin='/components/Contact.jsx' contenu={getCode(code, 'contact')} langage='jsx' />
        <Titre2 title="Formulaire non contrôlé avec validation" />
        <CodeBlock chemin='/components/FormNonControlle.jsx' contenu={getCode(code, 'FormNonControle2')} langage='jsx' />
        <Remarque
            type="Remarque"
            contenu="Dans ce nouveau exemple, nous avons ajouté des 'div' à chaque label, pour afficher l'erreur sur le champ qui lui est associé. Les contenus de ces 'div' sont gérés par le hook 'useState'."
        />
        <CodeBlock chemin='/components/Form.module.css' contenu={getCode(code, 'form_css')} langage='css' />
        {/* // Formulaire non contrôlé et validation */}

        <Divider />
        {/* #region Formulaire  contrôlé et validation */}
        <Titre1 title="Formulaire contrôlé et validation" index='2' />
        <Paragraphe
            contenu="Dans cette section, nous allons créer un formulaire où les valeurs des champs d'entrée sont gérées par par l'état (useState) du composant. Ce type de formulaire en React est appelé 'formulaire contrôlé'."
        />
        <Paragraphe
            contenu="Reprenons notre application 'biblio-app' puis, créons un nouveau composant nommé 'FormControlle.jsx'. Ce nouveau composant contiendra un formulaire contrôlé que nous importerons dans le composant 'Contact'."
        />
        <Titre2 title="Formulaire contrôlé sans validation" />
        <CodeBlock chemin='/components/FormControlle.jsx' contenu={getCode(code, 'FormControlle')} langage='jsx' />
        <Remarque
            type="Remarque"
            contenu="Contrairement à l'exemple précédent, nous pouvons constater que 'useRef' a été remplacé par 'useState' pour manipuler les valeurs des champs. De plus, de nouvelles fonctions ont été créées pour gérer la valeur du champ à chaque changement d'état. Il suffit donc d'importer ce composant dans 'Contact.jsx' comme précédemment, afin de l'utiliser."
        />
        <Titre2 title="Formulaire contrôlé avec validation" />
        <Remarque
            type="Travail à faire"
            contenu="En suivant la logique de la section précédente, ajoutez de la validation à notre formulaire contrôlé."
        />
        {/* // Formulaire  contrôlé et validation */}

        <Divider />
        {/* #region Formulaire avec la bibliothèque 'react-hook-form' */}
        <Titre1 title="Formulaire avec la bibliothèque 'react-hook-form'" index='3' />
        <Paragraphe
            contenu="'react-hook-form'est une bibliothèque construite pour gérer les formulaires dans les applications React. Elle se concentre sur la simplicité, la performance et l'utilisation de hooks (introduits avec React 16.8) pour fournir une manière efficace de gérer les formulaires et la validation des champs."
        />
        <Paragraphe
            contenu="Pour l'illustrer, nous allons créer un nouveau composant dans notre application 'biblio-app'. Ce composant sera nommé 'FormHook.jsx'. Mais avant de continuer, il va falloir installer la bibliothèque 'react-hook-form' avec la commande suivante : "
        />
        <CodeBlock type='terminal' langage='jsx' contenu='npm install react-hook-form' />
        <CodeBlock chemin='/components/FormHook.jsx' contenu={getCode(code, 'FormHook')} langage='jsx' />
        <Paragraphe
            contenu="Dans cet exemple, le hook 'useForm' initialise le formulaire. Le champ 'register' est utilisé pour enregistrer les éléments de formulaire(nom et courriel). Les erreurs de validation sont gérées via 'formState.errors'. 'handleSubmit' déclenche une fonction de soumission qui traite les données lorsque le formulaire est soumis avec succès."
        />
        <Paragraphe
            contenu="Il ne reste plus qu'à l'importer dans le composant 'Contact.jsx' afin l'utiliser."
        />
        {/* // Formulaire avec la bibliothèque 'react-hook-form' */}

        <Divider />
        {/* #region Envoyer des courriels*/}
        <Titre1 title="Envoyer des courriels" index='4' />
        <Paragraphe
            contenu="Envoyer des courriels directement côté client présente des défis majeurs en matière de sécurité et de fiabilité. Les navigateurs ne permettent pas aux pages web côté client d'envoyer directement des courriels en raison de restrictions de sécurité, notamment pour éviter le spam et les abus."
        />
        <Paragraphe
            contenu="Cependant, vous pouvez intégrer des services d'envoi d'e-mails côté client en utilisant des API tierces qui fournissent des fonctionnalités d'envoi d'e-mails. Ces API peuvent être utilisées pour envoyer des requêtes HTTP depuis le client vers le serveur de l'API tiers, qui ensuite envoie l'e-mail."
        />

        <Paragraphe
            contenu="Parmi les API pouvant être utilisées pour envoyer des courriels côté client, on peut citer : EmailJS, Formspree, SMTPJS, Email Octopus, SendGrid et bien d'autres. Dans le cadre de ce cours, nous utiliserons EMAILJS."
        />
        <Remarque
            type="Remarque"
            contenu="La demo se fera lors du déroulement du module7 en salle de classe."
        />
        {/* // Envoyer des courriels*/}
        <Divider />
        {/* #region Code source */}
        <Titre1 title='Code source' index='5' />
        <DownloadLink
            url='./code-source/biblio-app-module-7.zip'
            item='Télécharger le projet créé'
        />
        <Remarque
            type="Important"
            contenu="Avant d'executer la commande 'npm run dev', bien vouloir exécuter la commande 'npm i'."
        />
        {/* // #endregion Code source*/}

        <Divider />
        {/* #region Travail à faire */}
        <Titre1 title='Travail à faire' index='6' />
        <DownloadLink
            url='./pdf/Semaine-7.pdf'
            item='Télécharger le travail'
        />
        {/* // #endregion Travail à faire*/}
    </>
}