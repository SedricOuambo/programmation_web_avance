'use client'

import { createContext, useContext, useEffect, useState } from "react";

const InstalledDateContext = createContext();

export function InstalledDateProvider({children}){
    const [installedDate, setInstalledDate] = useState(0);

    useEffect(() => {
        setInstalledDate(localStorage.getItem('installedDate') || 0);
    }, [setInstalledDate]);

    return <InstalledDateContext.Provider value={[installedDate, setInstalledDate]}>
        {children}
    </InstalledDateContext.Provider>
}

export function useInstalledDate(){
    const [installedDate, setInstalledDate] = useContext(InstalledDateContext);

    const setInstalledDateWithStorage = (installedDate) => {
        localStorage.setItem('installedDate', installedDate);
        setInstalledDate(installedDate);
    }

    return [installedDate, setInstalledDateWithStorage];
}
