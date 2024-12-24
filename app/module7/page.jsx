import BlocObjectifs from "@/components/BlocObjectifs";
import ModuleAcueilGrand from "@/components/ModuleAccueilGrand";
import ContenuModule7 from "@/components/ContenuModule7";

export const metadata = {
  title: "Les formulaires",
  description:
    "Créer et valider un formulaire dans un projet React avec Next.js.",
  openGraph: {
    title: "Les formulaires",
    description:
      "Créer et valider un formulaire dans un projet React avec Next.js.",
    images: ["https://web-avance.ouambvision.com/react.png"],
  },
  manifest: "./manifest.webmanifest",
};

export default function Module7() {
  const tabObjectifs = [
    "Le hook 'useRef' et le DOM",
    "Formulaire non contrôlé et validation",
    "Formulaire contrôlé et validation",
    "Formulaire avec la bibliothèque 'react-hook-form'",
    "Envoyer des courriels",
    "Code source",
    "Travail à faire",
  ];
  return (
    <>
      <ModuleAcueilGrand
        numero="7"
        titre="Les formulaires"
        description="A la fin de ce module, l'étudiant devra être capable de créer et valider des formulaires dans un projet React avec Next.js."
      />
      <BlocObjectifs listeObjectifs={tabObjectifs} />
      <ContenuModule7 />
    </>
  );
}
