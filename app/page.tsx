'use client'
import styles from "./page.module.css";
import Accueil from "@/components/Accueil";
import { useModuleActif } from '@/components/Provider/ModuleActifProvider';
import { useTitreModule } from '@/components/Provider/TitreModuleProvider';

export default function Home() {
  return <>
    <Accueil/>
  </>
}
