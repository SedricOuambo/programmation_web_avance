'use client'

import { createContext, useContext, useEffect, useState } from "react";

const ModuleActifContext = createContext();

export function ModuleActifProvider({children}){
    const [moduleActif, setModuleActif] = useState('0');

    useEffect(() => {
        setModuleActif(localStorage.getItem('moduleActif') || '0');
    }, [setModuleActif]);

    return <ModuleActifContext.Provider value={[moduleActif, setModuleActif]}>
        {children}
    </ModuleActifContext.Provider>
}

export function useModuleActif(){
    const [moduleActif, setModuleActif] = useContext(ModuleActifContext);

    const setModuleActifWithStorage = (moduleActif) => {
        localStorage.setItem('moduleActif', moduleActif);
        setModuleActif(moduleActif);
    }

    return [moduleActif, setModuleActifWithStorage];
}
