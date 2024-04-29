'use client'

import { createContext, useContext, useEffect, useState } from "react";

const ThemeColorContext = createContext();

export function ThemeColorProvider({children}){
    const [themeColor, setThemeColor] = useState(235);

    useEffect(() => {
        setThemeColor(localStorage.getItem('themeColor') || 235);
    }, [setThemeColor]);

    return <ThemeColorContext.Provider value={[themeColor, setThemeColor]}>
        {children}
    </ThemeColorContext.Provider>
}

export function useThemeColor(){
    const [themeColor, setThemeColor] = useContext(ThemeColorContext);

    const setThemeColorWithStorage = (themeColor) => {
        localStorage.setItem('themeColor', themeColor);
        setThemeColor(themeColor);
    }

    return [themeColor, setThemeColorWithStorage];
}
