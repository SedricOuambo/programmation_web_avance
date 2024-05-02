import BlocObjectifs from '@/components/BlocObjectifs';
import ModuleAcueilGrand from "@/components/ModuleAccueilGrand";
import ContenuModule4 from '@/components/ContenuModule4';

export const metadata = {
    title: 'Effet et affichage répété',
    description: "Utiliser le hook d'effet et afficher des données avec répétition.",
    openGraph: {
        title: 'Effet et affichage répété',
        description: "Utiliser le hook d'effet et afficher des données avec répétition.",
        images: ['https://sedricouambo.github.io/programmation_web_avance/react.png']
    },
    manifest: './manifest.webmanifest'
};

export default function Module4() {
    const tabObjectifs = [
        'Affichage répété',
        'Le hook d\'effet ou useEffect',
        'Code source',
        'Travail à faire',
    ]
    return <>
        <ModuleAcueilGrand
            numero="4"
            titre="Effet et affichage répété"
            description="A la fin de ce quatrième module, l'étudiant devra être capable d'effectuer l'affichage répété des données. De plus, il devra être capable d'utiliser le hook d'effet ou useEffect."
        />
        <BlocObjectifs
            listeObjectifs={tabObjectifs}
        />
        <ContenuModule4 />
    </>
}