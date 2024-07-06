import Divider from '@/components/Divider'
import Titre1 from '@/components/Titre1';
import Titre2 from '@/components/Titre2'
import Paragraphe from '@/components/Paragraphe'
import Item from '@/components/Item'
import Remarque from '@/components/Remarque'
import LienExterne from '@/components/LienExterne'
import CodeBlock from '@/components/CodeBlock'
import DownloadLink from '@/components/DownloadLink';
import code from '@/public/json/code-module9.json';
import { getCode } from '@/components/Code';

export default function ContenuModule9() {
    return <>
        <Divider />
        {/* #region Rendu statique instantané avec Next.js (SSG)*/}
        <Titre1 title="Rendu statique instantané avec Next.js (SSG)" index='0' />
        <Paragraphe
            contenu="Le rendu statique instantané, ou SSG (Static Site Generation), est une technique de rendu utilisée par Next.js pour générer des pages HTML statiques au moment de la compilation. Contrairement au SSR (Server-Side Rendering), où les pages sont rendues à la demande à chaque requête, le SSG génère les pages une fois lors du build et les sert comme des fichiers HTML statiques."
        />
        <Titre2 title="Quelques avantages du rendu statique instantané avec Next.js" />
        <Item
            item="Bonne performance"
            description=" : Les pages statiques n'ont pas besoin d'être rendues à chaque requête. Cela améliore considérablement les performances de chargement."
        />
        <Item
            item="SEO"
            description=" : Compte tenu du fait que les pages statiques sont pré-rendues, elles sont facilement indexables par les moteurs de recherche, ce qui améliore le référencement."
        />
        <Item
            item="Coût réduit"
            description=" : Servir des pages statiques est souvent moins coûteux en termes de ressources serveur par rapport au rendu dynamique."
        />

        <Titre2 title="Quelques Contraintes liées au rendu statique instantané avec Next.js" />
        <Item
            item="Temps de build"
            description=" : Le temps de génération des pages augmente proportionnellement au nombre de pages, ce qui peut rallonger les temps de déploiement pour les sites volumineux."
        />
        <Item
            item="Données statiques"
            description=" : Les données utilisées pour générer les pages sont fixes au moment du build. Si les données changent fréquemment, cela peut nécessiter des rebuilds fréquents pour maintenir le site à jour, ce qui peut être coûteux et peu pratique."
        />
        <Item
            item="Personnalisation limitée"
            description=" : Les pages statiques ne peuvent pas adapter leur contenu en fonction de l'utilisateur ou d'autres données dynamiques sans recourir à un rendu côté client ou à des solutions de personnalisation après le chargement de la page."
        />
        <Remarque
            type="Demo"
            contenu="Pour illustrer le rendu statique instantané avec Next.js, nous allons ajouter du code à notre biblio-app, afin de générer des pages statiques pour chaque produit d'un inventaire, en utilisant les données statiques fournies par un fichier JSON. Pour cela, il faut suivre les étapes suivantes : "
        />
        <DownloadLink
            url='./code-source/biblio-app-module-8.zip'
            item='Télécharger le code source du module8'
        />
        <Item
            item="Données à utiliser"
            description=" : Télécharger les fichiers suivants et les extraire dans le dossier public de votre application biblio-app."
        />
        <DownloadLink
            url='./code-source/inventaire-json.zip'
            item='Fichier json'
        />
        <DownloadLink
            url='./code-source/inventaire-images.zip'
            item='Dossier des images'
        />
        <Item
            item="Ajout du menu Magasin"
            description=" : Pour cela, il faut ajouter les codes suivants aux composants indiqués : "
        />
        <CodeBlock chemin='/i18n/en.json' contenu={getCode(code, 'en_json')} langage='jsx' />
        <CodeBlock chemin='/i18n/fr.json' contenu={getCode(code, 'fr_json')} langage='jsx' />
        <CodeBlock chemin='/components/MenuNav.jsx' contenu={getCode(code, 'menu_nav')} langage='jsx' />

        <Item
            item="Créer le dossier magasin"
            description=" : Dans le dossier 'app', créer un dossier nommé 'magasin' et un fichier nommé 'page.jsx' dans ce dossier magasin. Le fichier page.jsx doit avoir le contenu suivant : "
        />
        <CodeBlock chemin='/app/magasin/page.jsx' contenu={getCode(code, 'page1')} langage='jsx' />

        <Item
            item="Créer le dossier sous dossier [produit]"
            description=" : Dans le dossier '/app/magasin', créer un sous dossier nommé '[produit]' et un fichier nommé 'page.jsx' dans ce sous dossier '[produit]'. Ce fichier page.jsx doit avoir le contenu suivant : "
        />
        <CodeBlock chemin='/app/magasin/[produit]/page.jsx' contenu={getCode(code, 'page2')} langage='jsx' />
        <LienExterne
            url='https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props/'
            description="En savoir plus sur le rendu statique instantané"
        />
        {/* #endregion Rendu statique instantané avec Next.js (SSG) */}

        <Divider />
        {/* #region Rendu serveur avec Next.js (SSR)*/}
        <Titre1 title="Rendu serveur avec Next.js (SSR)" index='1' />
        <Paragraphe contenu="Présentation en classe" />
        <LienExterne
            url='https://nextjs.org/docs/pages/api-reference/functions/get-server-side-props'
            description="En savoir plus"
        />
        {/* #endregion Rendu serveur avec Next.js (SSR)*/}
        <Divider />
        {/* #region Utiliser Next.js comme serveur d'API*/}
        <Titre1 title="Utiliser Next.js comme serveur d'API" index='2' />
        <Paragraphe contenu="Présentation en classe" />
        <LienExterne
            url='https://nextjs.org/docs/pages/building-your-application/routing/api-routes'
            description="En savoir plus"
        />
        {/* #endregion Utiliser Next.js comme serveur d'API*/}
        <Divider />
        {/* #region Exportation d'un projet Next.js*/}
        <Titre1 title="Exportation d'un projet Next.js" index='3' />
        <Paragraphe contenu="Présentation en classe" />
        <LienExterne
            url='https://nextjs.org/docs/pages/building-your-application/deploying/static-exports'
            description="En savoir plus"
        />
        {/* #endregion Exportation d'un projet Next.js*/}
        <Divider />
        {/* #region Exportation d'un projet Next.js avec images*/}
        <Titre1 title="Exportation d'un projet Next.js avec images" index='4' />
        <Paragraphe contenu="Présentation en classe" />
        <LienExterne
            url='https://github.com/vercel/next.js/discussions/19065'
            description="En savoir plus"
        />
        {/* #endregion Exportation d'un projet Next.js avec images*/}
    </>
}