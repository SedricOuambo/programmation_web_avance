import BlocObjectifs from "@/components/BlocObjectifs";
import ModuleAcueilGrand from "@/components/ModuleAccueilGrand";
import ContenuModule8 from "@/components/ContenuModule8";

export const metadata = {
  title: "Contexte dans React et Next.js",
  description:
    "Effectuer le partage global des données dans un projet React avec Next.js.",
  openGraph: {
    title: "Contexte dans React et Next.js",
    description:
      "Effectuer le partage global des données dans un projet React avec Next.js.",
    images: ["https://web-avance.ouambvision.com/react.png"],
  },
  manifest: "./manifest.webmanifest",
};

export default function Module8() {
  const tabObjectifs = [
    "Contexte",
    "Local Storage",
    "Hooks personnalisées",
    "Internationalisation (i18n)",
    "Code source",
    "Travail à faire",
  ];
  return (
    <>
      <ModuleAcueilGrand
        numero="8"
        titre="Notion de contexte"
        description="A la fin de ce module, l'étudiant devra être capable d'Effectuer le partage global des données dans un projet React avec Next.js."
      />
      <BlocObjectifs listeObjectifs={tabObjectifs} />
      <ContenuModule8 />
    </>
  );
}
