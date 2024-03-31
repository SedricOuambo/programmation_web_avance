'use client'

import { createContext, useContext, useEffect, useState } from "react";

const HideContext = createContext();

export function HideProvider({children}){
    const [hide, setHide] = useState('true');

    useEffect(() => {
        setHide(localStorage.getItem('hide') || 'true');
    }, [setHide]);

    return <HideContext.Provider value={[hide, setHide]}>
        {children}
    </HideContext.Provider>
}

export function useHide(){
    const [hide, setHide] = useContext(HideContext);

    const setHideWithStorage = (hide) => {
        localStorage.setItem('hide', hide);
        setHide(hide);
    }

    return [hide, setHideWithStorage];
}
