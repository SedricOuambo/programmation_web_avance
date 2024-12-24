import BlocObjectifs from "@/components/BlocObjectifs";
import ModuleAcueilGrand from "@/components/ModuleAccueilGrand";
import ContenuModule2 from "@/components/ContenuModule2";

export const metadata = {
  title: "Composants et props",
  description: "Les composants React et props",
  openGraph: {
    title: "Composants et props",
    description: "Les composants React et props",
    images: ["https://web-avance.ouambvision.com/react.png"],
  },
  manifest: "./manifest.webmanifest",
};

export default function Module2() {
  const tabObjectifs = [
    "Composants, props et enfant",
    "Layout de base avec Next.js",
    "Types de CSS",
    "Polices de caractères optimisées dans Next.js",
    "Image dans Next.js",
    "Quelques trucs utiles",
    "Code source",
    "Travail à faire",
  ];
  return (
    <>
      <ModuleAcueilGrand
        numero="2"
        titre="Les composants et props"
        description="A la fin de ce deuxième module, l'étudiant devra être capable de créer des composants et de leur passer des données. Il devra aussi être capable d'optimiser les images ainsi que les polices de caractères de son projet."
      />
      <BlocObjectifs listeObjectifs={tabObjectifs} />
      <ContenuModule2 />
    </>
  );
}
