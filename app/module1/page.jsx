import BlocObjectifs from '@/components/BlocObjectifs'
import ModuleAcueilGrand from "@/components/ModuleAccueilGrand"

export const metadata = {
    title: 'Module1 | Web Avancée',
    description: 'Creer un projet React avec Next.js',
    openGraph: {
        title: 'Module1 | Web Avancée',
        description: 'Creer un projet React avec Next.js',
        images: ['/react.png']
    },
    manifest: '/manifest.webmanifest'
};

export default function Module1() {
    const tabObjectifs = [
        'Notion de framework',
        'Environnement de développement',
        'Installation des outils et logiciels',
        'Création d\'un projet React avec Next.js',
        'Structure d\'un projet React avec Next.js',
        'Quelques astuces utiles',
        'Présentation du projet',
        'Travail à faire',
    ]

    return <>
        <ModuleAcueilGrand
            numero="1"
            titre="Créer un projet React avec Next.js"
            description="Dans cette première partie du cours, nous aurons pour tâche de procéder à l'installation d'outils et logiciels nécessaires pour la création de nos projets. Par la suite, nous entamerons la création d'un projet React en utilisant le Framework Next.js et enfin, nous présenterons une description de la structure d'un projet React avec Next.js."
        />
        <BlocObjectifs
            listeObjectifs={tabObjectifs}
        />
    </>
}