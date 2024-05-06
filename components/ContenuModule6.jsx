import Divider from '@/components/Divider'
import Titre1 from '@/components/Titre1';
import Titre2 from '@/components/Titre2'
import Paragraphe from '@/components/Paragraphe'
import Item from '@/components/Item'
import Remarque from '@/components/Remarque'
import LienExterne from '@/components/LienExterne'
import CodeBlock from '@/components/CodeBlock'
import DownloadLink from '@/components/DownloadLink';
import code from '@/public/json/code-module6.json';
import { getCode } from '@/components/Code';

export default function ContenuModule6() {
    return <>
        <Divider />
        {/* #region Notion de Search Engine Optimisation (SEO) */}
        <Titre1 title='Notion de Search Engine Optimisation (SEO)' index='0' />
        <Paragraphe
            contenu="Si vous souhaité que votre site internet puisse avoir une bonne visibilité chez les moteurs de recherche,  la solution serait de bien pratiquer le SEO. Encore appelé optimisation pour moteur de recherche, pratiquer du SEO consiste à définir des stratégies et des techniques conçues pour augmenter le trafic organique, c'est-à-dire les visiteurs qui trouvent votre site à travers des recherches non payantes."
        />
        <Paragraphe
            contenu="La mise sur pied des stratégies d'optimisation pour les moteurs de recherche possède de nombreux avantages parmi lesquels on peut citer : "
        />
        <Item
            item="Une visibilité accrue"
            description=" : Le SEO vous permettra de rendre votre site web plus visible dans les résultats des recherches. En effet, plus votre site se trouve au sommet des resultats de recherche, plus ce dernier a de chances d'être visité."
        />
        <Item
            item="Génération du trafic organique"
            description=" : Le trafic organique représente les utilisateurs qui trouveront votre site web à travers des recherches naturelles, sans passer par une publicité."
        />
        <Item
            item="Crédibilité et confiance renforcées"
            description=" : Les sites qui appraraissent au sommet des recherches sont généralement perçus par les utilisateurs, comme étant les sites les plus crédibles."
        />
        <Item
            item="L'expérience utilisateur améliorée"
            description=" : La pratique du SEO permet de d'améliorer des aspects comme le temps de chargement des pages, la lisibilité, les contenus de qualité. Tous ces aspects lorsqu'ils sont optimisés, augmenterons à coup la satisfaction des visiteurs de votre site web."
        />
        <LienExterne
            url='https://nextjs.org/learn-pages-router/seo/introduction-to-seo'
            description='En savoir plus sur le SEO'
        />
        {/* // #endregion Notion de Search Engine Optimisation (SEO)*/}

        <Divider />
        {/* #region Importance du fichier 'robots.txt' */}
        <Titre1 title="Importance du fichier 'robots.txt'" index='1' />
        <Paragraphe
            contenu="Le fichier 'robots.txt' indiquera aux robots d'indexation, les parties du site web qu'ils peuvent explorer et indexer. De ce fait, des ressources pourront être économisées, car les robots ne vont pas explorer des sections non-pertinentes. Il est aussi possible de définir des règles spécifiques pour différents robots comme Googlebot (de Google), Bingbot (de Bing), ou d'autres robots d'indexation."
        />
        <Remarque
            type="Exemple"
            contenu="Ci-dessous un exmple de règles pour le fichier robots.txt"
        />
        <CodeBlock chemin='/public/robots.txt' contenu={getCode(code, 'exemple_robots')} langage='jsx' />
        <Paragraphe
            contenu="Voici une explication des directives dans cet exemple :"
        />
        <Item
            item="User-agent: *"
            description=" : Cette directive indique que les règles qui suivent s'appliquent à tous les robots d'indexation."
        />
        <Item
            item="Disallow: /admin/"
            description=" : Cette directive indique que l'accès à la section /admin/ du site est interdit à tous les robots."
        />
        <Item
            item="Disallow: /private/"
            description=" : Cette directive empêche tous les robots d'indexation d'accéder à la section /private/."
        />
        <Item
            item="User-agent: Googlebot"
            description=" : Cette ligne indique que les directives qui suivent s'appliquent spécifiquement à Googlebot, le robot d'indexation de Google."
        />
        <Item
            item="Allow: /public/"
            description=" : Cette directive indique que Googlebot peut accéder à la section /public/."
        />
        <Item
            item="Disallow: /private/"
            description=" : Cette ligne réaffirme que Googlebot ne peut pas accéder à la section /private/."
        />
        <Remarque
            type="Illustration"
            contenu="Nous allons créer le fichier 'robots.txt' de notre application 'bibio-app'. Il est important de garder à l'esprit que le fichier 'robots.txt' doit être créé dans le dossier 'public' de votre application. Dans notre 'robots.txt', l'accès à la racine de notre application sera donné à tous les robots d'indexation. Le code est le suivant : "
        />
        <CodeBlock chemin='/public/robots.txt' contenu={getCode(code, 'robots')} langage='jsx' />
        <LienExterne
            url='https://nextjs.org/learn-pages-router/seo/crawling-and-indexing/robots-txt'
            description='En savoir plus sur robots.txt'
        />
        {/* // #endregion Importance du fichier 'robots.txt'*/}

        <Divider />
        {/* #region Rôle du fichier 'sitemap.xml' */}
        <Titre1 title="Rôle du fichier 'sitemap.xml'" index='2' />
        {/* // #endregion Rôle du fichier 'sitemap.xml'*/}
    </>
}