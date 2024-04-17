'use client'

import { createContext, useContext, useEffect, useState } from "react";

const MenuActifContext = createContext();

export function MenuActifProvider({children}){
    const [menuActif, setMenuActif] = useState('NotActive');

    useEffect(() => {
        setMenuActif(localStorage.getItem('menuActif') || 'NotActive');
    }, [setMenuActif]);

    return <MenuActifContext.Provider value={[menuActif, setMenuActif]}>
        {children}
    </MenuActifContext.Provider>
}

export function useMenuActif(){
    const [menuActif, setMenuActif] = useContext(MenuActifContext);

    const setMenuActifWithStorage = (menuActif) => {
        localStorage.setItem('menuActif', menuActif);
        setMenuActif(menuActif);
    }

    return [menuActif, setMenuActifWithStorage];
}