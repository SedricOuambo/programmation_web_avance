'use client'
import styles from "./page.module.css";
import Accueil from "@/components/Accueil";
import { useModuleActif } from '@/components/Provider/ModuleActifProvider';
import { useTitreModule } from '@/components/Provider/TitreModuleProvider';
import { useMenuActif } from '@/components/Provider/MenuActifProvider';

export default function Home() {
  const [moduleActif, setModuleActif] = useModuleActif();
  const [titreModule, setTitreModule] = useTitreModule();
  const [menu, setMenu] = useMenuActif();
  return <>
    <Accueil/>
  </>
}
