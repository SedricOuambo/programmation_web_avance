import BlocObjectifs from "@/components/BlocObjectifs";
import ModuleAcueilGrand from "@/components/ModuleAccueilGrand";
import ContenuModule3 from "@/components/ContenuModule3";

export const metadata = {
  title: "Hook, affichage",
  description: "Creer un projet React avec Next.js",
  openGraph: {
    title: "Hook, affichage",
    description: "Les hooks états, les événements et affichage conditionnel.",
    images: ["https://web-avance.ouambvision.com/react.png"],
  },
  manifest: "./manifest.webmanifest",
};

export default function Module3() {
  const tabObjectifs = [
    "Notion de hook dans React",
    "Le hook d'état ou useState",
    "Gestion des événements",
    "Affichage conditionnel",
    "Code source",
    "Travail à faire",
  ];
  return (
    <>
      <ModuleAcueilGrand
        numero="3"
        titre="État, événement et Affichage"
        description="A la fin de ce troisième module, l'étudiant devra être capable d'afficher des données sur l'interface graphique, dépendant d'un état précis et suite à un événement."
      />
      <BlocObjectifs listeObjectifs={tabObjectifs} />
      <ContenuModule3 />
    </>
  );
}
