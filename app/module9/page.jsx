import BlocObjectifs from "@/components/BlocObjectifs";
import ModuleAcueilGrand from "@/components/ModuleAccueilGrand";
import ContenuModule9 from "@/components/ContenuModule9";

export const metadata = {
  title: "Types de rendu avec Next.js",
  description:
    "Présenter le rendu serveur, le rendu statique instantané ainsi que les contraintes des différentes formes de rendu avec Next.js.",
  openGraph: {
    title: "Types de rendu avec Next.js",
    description:
      "Présenter le rendu serveur, le rendu statique instantané ainsi que les contraintes des différentes formes de rendu avec Next.js.",
    images: ["https://web-avance.ouambvision.com/react.png"],
  },
  manifest: "./manifest.webmanifest",
};

export default function Module9() {
  const tabObjectifs = [
    "Rendu statique instantané avec Next.js (SSG)",
    "Rendu serveur avec Next.js (SSR)",
    "Utiliser Next.js comme serveur d'API",
    "Exportation d'un projet Next.js",
    "Exportation d'un projet Next.js avec images",
  ];
  return (
    <>
      <ModuleAcueilGrand
        numero="9"
        titre="Rendu avec Next.js"
        description="À la fin de ce module, l'étudiant devra être capable de présenter le rendu serveur, le rendu statique instantané ainsi que les contraintes des différentes formes de rendu avec Next.js."
      />
      <BlocObjectifs listeObjectifs={tabObjectifs} />
      <ContenuModule9 />
    </>
  );
}
