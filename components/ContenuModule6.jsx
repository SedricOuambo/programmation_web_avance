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
        <Titre1 title="Le fichier 'sitemap.xml'" index='2' />
        <Titre2 title="Définition et rôle" />
        <Paragraphe
            contenu="Un sitemap est un fichier dans lequel l'on doit fournir des informations sur les pages, les vidéos et d'autres fichiers du site web. Ce fichier est utilisé par les moteurs de recherche pour explorer efficacement les sites web. En effet, un sitemap indique aux moteurs de recherche, les fichiers jugés importants et d'autres informations utiles telles que la fréquence de modification, la date de dernière modification."
        />
        <Titre2 title="Quand doit-on créer un sitemap ?" />
        <Paragraphe
            contenu="Selon l'entreprise Google, voici quelques conditions à vérifier avant de créer un sitemap : "
        />
        <Item
            item="Le site doit être volumineux."
        />
        <Item
            item="Le site contient une grande quantité de pages isolées ou non liées correctement."
        />
        <Item
            item="Le site est récent et peu de liens externes permettent d'y accéder."
        />
        <Item
            item="Le site contient beaucoup de contenu media (vidéo, images) ou s'affiche dans Google Actualités."
        />
        <Titre2 title="Comment créer un sitemap ?" />
        <Paragraphe
            contenu="Il existe trois options pour créer un sitemap : "
        />
        <Item
            url="https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=fr#xml"
            item="Sitemap XML"
        />
        <Item
            url="https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=fr#rss"
            item="RSS, mRSS et Atom 1.0"
        />
        <Item
            url="https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=fr#text"
            item="Sitemap au format texte"
        />
        <Remarque
            type="Illustration"
            contenu="Nous allons créer un sitemap au format xml pour notre application 'biblio-app'. Pour cela, il suffit de créer un fichier nommé 'sitemap.xml' dans le dossier 'public' de notre application, ensuite y ajouter le code suivant :"
        />
        <CodeBlock chemin='/public/sitemap.xml' contenu={getCode(code, 'sitemap')} langage='xml' />
        <LienExterne
            url='https://www.sitemaps.org/protocol.html'
            description='En savoir plus sur comment créer un sitemap'
        />
        <Titre2 title="Envoie du sitemap à Google" />
        <Paragraphe
            contenu="Pour envoyer notre sitemap créé précédemment à Google, il suffit d'insérer la ligne suivante n'importe où dans notre fichier 'robots.txt'. Cette ligne indique le chemin d'accès à notre sitemap."
        />
        <CodeBlock chemin="chemin de 'sitemap.xml'" contenu="Sitemap: https://localhost:3000/sitemap.xml" langage='xml' />
        {/* // #endregion Rôle du fichier 'sitemap.xml'*/}

        <Divider />
        {/* Les métadonnées */}
        <Titre1 title="Les métadonnées" index='3' />
        <Paragraphe
            contenu="Les métadonnées (ou métadonnées) dans le contexte du web désignent des données qui décrivent d'autres données, fournissant des informations supplémentaires sur une ressource ou un contenu en ligne. Elles aident à interpréter ou à donner un contexte à ces ressources, ce qui peut être utile pour les moteurs de recherche, les navigateurs, les utilisateurs et d'autres systèmes. Les métadonnées doivent être ajoutées à toutes les pages de votre site."
        />
        <Titre2 title="title" />
        <Paragraphe
            contenu="La donnée 'title' est très importante, car elle indique à l'utilisateur, le titre de la page sur laquelle elle se trouve. De plus, c'est le principal élément utilisé par les moteurs de recherche pour comprendre ce que fait la page."
        />
        <Titre2 title="description" />
        <Paragraphe
            contenu="Cette donnée est aussi importante, car elle apporte des informations en complément de celles données par le titre."
        />
        <Titre2 title="Open Graph et Twitter Card" />
        <Paragraphe
            contenu="Ces métadonnées sont utilisées par les plateformes de médias sociaux comme Facebook et Twitter pour afficher des aperçus lorsque le contenu est partagé"
        />
        <LienExterne
            url='https://ogp.me/'
            description='En savoir plus Open Graph'
        />
        <Titre2 title="Illustration" />
        <Paragraphe
            contenu="Pour l'illustration, nous allons ajouter des métadonnées à chaque page de notre application 'biblio-app'. Ces métadonnées seront insérées en début de chaque page, juste après les « importations »."
        />
        <CodeBlock chemin='/app/layout.jsx' contenu={getCode(code, 'meta_layout')} langage='jsx' />
        <CodeBlock chemin='/app/connexion/page.jsx' contenu={getCode(code, 'meta_connexion')} langage='jsx' />
        <CodeBlock chemin='/app/contact/page.jsx' contenu={getCode(code, 'meta_contact')} langage='jsx' />
        <CodeBlock chemin='/app/documents/page.jsx' contenu={getCode(code, 'meta_document')} langage='jsx' />
        {/* // Les métadonnées*/}

        <Divider />
        {/* Core Vitals et performance */}
        <Titre1 title="Core Vitals et performance" index='4' />
        <Paragraphe
            contenu="Les Core Web Vitals (ou simplement 'Core Vitals') sont un ensemble de métriques définies par Google pour évaluer les performances des sites web en ce qui concerne la vitesse de chargement, l'interactivité et la stabilité visuelle."
        />

        <Paragraphe
            contenu="Voici les trois principales métriques des Core Web Vitals :"
        />

        <Titre2 title="Largest Contentful Paint (LCP):" />
        <Item
            item=""
            description="Mesure le temps nécessaire pour charger le plus grand élément visible du contenu de la page. Cela peut être une image, un bloc de texte, ou un autre élément de contenu volumineux. LCP vise à indiquer la vitesse à laquelle un utilisateur peut voir le contenu principal de la page."
        />
        <Item
            item=""
            description="Un bon LCP est généralement inférieur ou égal à 2,5 secondes."
        />
        <Titre2 title="First Input Delay (FID):" />
        <Item
            item=""
            description="Mesure le délai entre le moment où un utilisateur interagit pour la première fois avec la page (par exemple, en cliquant sur un bouton ou un lien) et le moment où le navigateur répond à cette interaction. FID évalue donc l'interactivité de la page."
        />
        <Item
            item=""
            description="Un bon FID est généralement inférieur ou égal à 100 millisecondes."
        />
        <Titre2 title="Cumulative Layout Shift (CLS):" />
        <Item
            item=""
            description="Mesure la stabilité visuelle d'une page pendant son chargement. Si des éléments de la page changent de position de manière inattendue (comme des publicités qui se chargent tardivement), cela peut créer une mauvaise expérience utilisateur. CLS mesure le degré de ces décalages visuels."
        />
        <Item
            item=""
            description="Un bon CLS est généralement inférieur ou égal à 0,1."
        />
        <Remarque
            type="Bon à savoir"
            contenu="Plus vos pages ont de bons résultats pour ces trois métriques, plus elles ont de chance d'être indexées par les robots des moteurs de recherche. En effet, ces métriques sont utilisées comme facteur de classement pour le référencement (SEO)."
        />
        <LienExterne
            url='https://web.dev/articles/vitals?hl=fr'
            description='En savoir plus sur les Core Web Vitals'
        />
        {/* // Core Vitals et performance*/}

        <Divider />
        {/* Évaluer et améliorer un site web */}
        <Titre1 title="Évaluer et améliorer un site web" index='4' />
        <Paragraphe
            contenu="L'évaluation et l'amélioration d'un site web passe par l'évaluation et l'amélioration des Core Web Vitals. Pour y parvenir, on peut utiliser divers outils tels que Google Lighthouse, Google PageSpeed Insights, ou Google Search Console. Ces outils fournissent des rapports détaillés sur les performances des pages, mettant en lumière des zones d'amélioration pour optimiser l'expérience utilisateur. On pourra donc utiliser ces informations pour identifier et résoudre les problèmes qui affectent les Core Web Vitals de nos pages."
        />
        <Paragraphe
            contenu="Dans le cadre de ce cours, nous utiliserons Google Lighthouse. Pour acceder à Lighthous, il suffit de faire un clic droit sur le navigateur, ensuite cliauer sur 'inspecter' et enfin dur 'Lighthouse'. Vous pouvez donc lancer une analyse de la page courante."
        />
        {/* // Évaluer et améliorer un site web*/}

        <Divider />
        {/* #region Code source */}
        <Titre1 title='Code source' index='5' />
        <DownloadLink
            url='./code-source/biblio-app-module-6.zip'
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
            url='./pdf/Semaine-6.pdf'
            item='Télécharger le travail'
        />
        {/* // #endregion Travail à faire*/}
    </>
}