'use client'
import styles from './MonBloc.module.css'
import { TfiMenuAlt } from "react-icons/tfi";
import { FaArrowUp } from "react-icons/fa6";
import { useModuleActif } from './Provider/ModuleActifProvider';
import { useTitreModule } from './Provider/TitreModuleProvider';
import { useMenuActif } from './Provider/MenuActifProvider';
import { IoHome } from "react-icons/io5";
import Image from 'next/image';
import logo2 from '@/public/img/logo2.webp';
import MonSousBloc from './MonSousBloc';
import Link from 'next/link';

export default function MonBloc() {
    const [menu, setMenu] = useMenuActif();
    const [moduleActif, setModuleActif] = useModuleActif();
    const [titreModule, setTitreModule] = useTitreModule();
    const handleClick = () => {
        menu === 'Active' ? setMenu('NotActive') : setMenu('Active');
    }

    return <div>
        <div className={styles.bloc}>
            <div className={styles.blocGauche}>
                <div className={styles.menuIcon}
                    onClick={handleClick}>
                    <TfiMenuAlt />
                </div>
                <div className={styles.separateur}></div>
                <Image
                    src={logo2}
                    alt='logo'
                    width={30}
                    height={20}
                />
                <div className={styles.bloc_actif}>
                    <div className={styles.titre_module}>Module {moduleActif}</div>
                    <span>{titreModule}</span>
                </div>
            </div>
            <div className={styles.blocDroit}>
                <Link href='/'
                onClick={() => {
                    setModuleActif(0);
                    setTitreModule('Plan du cours');
                    setMenu('NotActive');
                }}>
                    <IoHome className={styles.home}/>
                </Link>
                <div className={styles.separateur}></div>
                <Link href='#logo'><div className={styles.arrowUp}><FaArrowUp /></div></Link>
            </div>
        </div>
        <div className={styles.sous_bloc + ' ' + (menu === 'Active' ? styles.display_sous_bloc : "")}>
            <div className={styles.elements}>
                <MonSousBloc
                    chemin="/"
                    numero="0"
                    titre="Plan du cours"
                />
                <MonSousBloc
                    chemin="/module1"
                    numero="1"
                    titre="Créer un projet React avec Next.js"
                />
                <MonSousBloc
                    chemin="/module2"
                    numero="2"
                    titre="Les composants et props"
                />
                <MonSousBloc
                    chemin="/module3"
                    numero="3"
                    titre="Affichage conditionnel des données"
                />
                <MonSousBloc
                    chemin="/module4"
                    numero="4"
                    titre="Partage des données entre composants"
                />
                <MonSousBloc
                    chemin="/module5"
                    numero="5"
                    titre="Routage client et changement de page"
                />
                <MonSousBloc
                    chemin="/module6"
                    numero="6"
                    titre="Métadonnées et SEO"
                />
                <MonSousBloc
                    chemin="/module7"
                    numero="7"
                    titre="Les formulaires"
                />
                <MonSousBloc
                    chemin="/module8"
                    numero="8"
                    titre="Notion de contexte"
                />
                <MonSousBloc
                    chemin="/module9"
                    numero="9"
                    titre="Rendu avec Next.js"
                />
                <MonSousBloc
                    chemin="/module10"
                    numero="10"
                    titre="Nouvelles fonctionnalités de Next.js"
                />
                <MonSousBloc
                    chemin="/module11"
                    numero="11"
                    titre="Progressive Web App (PWA)"
                />
            </div>
        </div>
    </div>
}