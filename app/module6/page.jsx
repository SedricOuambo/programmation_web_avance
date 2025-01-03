import BlocObjectifs from "@/components/BlocObjectifs";
import ModuleAcueilGrand from "@/components/ModuleAccueilGrand";
import ContenuModule6 from "@/components/ContenuModule6";

export const metadata = {
  title: "Métadonnées et SEO",
  description:
    "Ajouter les métadonnées aux pages pour les engins de recherche et optimiser les pages pour une meilleure expérience utilisateur.",
  openGraph: {
    title: "Métadonnées et SEO",
    description:
      "Ajouter les métadonnées aux pages pour les engins de recherche et optimiser les pages pour une meilleure expérience utilisateur.",
    images: ["https://web-avance.ouambvision.com/react.png"],
  },
  manifest: "./manifest.webmanifest",
};

export default function Module6() {
  const tabObjectifs = [
    "Notion de Search Engine Optimisation (SEO)",
    "Importance du fichier 'robots.txt'",
    "Le fichier 'sitemap.xml'",
    "Les métadonnées",
    "Core Vitals et performance",
    "Évaluer et améliorer un site web",
    "Code source",
    "Travail à faire",
  ];
  return (
    <>
      <ModuleAcueilGrand
        numero="6"
        titre="Métadonnées et SEO"
        description="A la fin de ce module, l'étudiant devra être capable d'optimiser les pages de son application web pour une meilleure expérience utilisateur."
      />
      <BlocObjectifs listeObjectifs={tabObjectifs} />
      <ContenuModule6 />
    </>
  );
}
