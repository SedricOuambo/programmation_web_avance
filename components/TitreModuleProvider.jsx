'use client'

import { createContext, useContext, useEffect, useState } from "react";

const TitreModuleContext = createContext();

export function TitreModuleProvider({children}){
    const [titreModule, setTitreModule] = useState('Accueil');

    useEffect(() => {
        setTitreModule(localStorage.getItem('titreModule') || 'Accueil');
    }, [setTitreModule]);

    return <TitreModuleContext.Provider value={[titreModule, setTitreModule]}>
        {children}
    </TitreModuleContext.Provider>
}

export function useTitreModule(){
    const [titreModule, setTitreModule] = useContext(TitreModuleContext);

    const setTitreModuleWithStorage = (titreModule) => {
        localStorage.setItem('titreModule', titreModule);
        setTitreModule(titreModule);
    }

    return [titreModule, setTitreModuleWithStorage];
}
