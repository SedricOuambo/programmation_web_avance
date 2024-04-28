'use client'

import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({children}){
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        setDarkMode(localStorage.getItem('darkMode2') || false);
    }, [setDarkMode]);

    return <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
        {children}
    </DarkModeContext.Provider>
}

export function useDarkMode(){
    const [darkMode, setDarkMode] = useContext(DarkModeContext);

    const setDarkModeWithStorage = (darkMode) => {
        localStorage.setItem('darkMode2', darkMode);
        setDarkMode(darkMode);
    }

    return [darkMode, setDarkModeWithStorage];
}
