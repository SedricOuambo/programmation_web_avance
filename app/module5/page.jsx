import BlocObjectifs from '@/components/BlocObjectifs';
import ModuleAcueilGrand from "@/components/ModuleAccueilGrand";
import ContenuModule5 from '@/components/ContenuModule5';

export const metadata = {
    title: 'Routage client et changement de page',
    description: "Utiliser le routage client pour simuler plusieurs pages dans un site web.",
    openGraph: {
        title: 'Routage client et changement de page',
        description: "Utiliser le routage client pour simuler plusieurs pages dans un site web.",
        images: ['https://sedricouambo.github.io/programmation_web_avance/react.png']
    },
    manifest: './manifest.webmanifest'
};

export default function Module5() {
    const tabObjectifs = [
        'Le routage client',
        'Le routage basé sur les Liens (<Link>)',
        'Le routage Client-Side avec le hook useRouter',
        'Code source',
        'Travail à faire'
    ]
    return <>
        <ModuleAcueilGrand
            numero="5"
            titre="Routage client et changement de page"
            description="A la fin de ce cinquième module, l'étudiant devra être capable d'utiliser le routage client pour simuler plusieurs pages dans un site web."        />
        <BlocObjectifs
            listeObjectifs={tabObjectifs}
        />
        <ContenuModule5 />
    </>
}