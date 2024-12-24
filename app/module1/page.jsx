import BlocObjectifs from "@/components/BlocObjectifs";
import ModuleAcueilGrand from "@/components/ModuleAccueilGrand";
import ContenuModule1 from "@/components/ContenuModule1";

export const metadata = {
  title: "Créer un projet React",
  description: "Creer un projet React avec Next.js",
  openGraph: {
    title: "Créer un projet React",
    description: "Creer un projet React avec Next.js",
    images: ["https://web-avance.ouambvision.com/react.png"],
  },
  manifest: "./manifest.webmanifest",
};

export default function Module1() {
  const tabObjectifs = [
    "Notion de framework web",
    "Environnement de développement",
    "Technologies utilisées par Next.js",
    "Création d'un projet React avec Next.js",
    "Structure d'un projet React avec Next.js",
    "Configurations de base pour notre projet",
    "Code source",
    "Présentation du projet",
    "Travail à faire",
  ];

  return (
    <>
      <ModuleAcueilGrand
        numero="1"
        titre="Créer un projet React avec Next.js"
        description="Dans cette première partie du cours, nous aurons pour tâche de procéder à l'installation d'outils et logiciels nécessaires pour la création de nos projets. Par la suite, nous entamerons la création d'un projet React en utilisant le Framework Next.js et enfin, nous ferons une description de la structure d'un projet React avec Next.js."
      />
      <BlocObjectifs listeObjectifs={tabObjectifs} />
      <ContenuModule1 />
    </>
  );
}
