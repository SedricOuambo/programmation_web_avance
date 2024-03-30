'use client'

import { createContext, useContext, useEffect, useState } from "react";

const IndexContext = createContext();

export function IndexProvider({children}){
    const [index, setIndex] = useState('AC');

    useEffect(() => {
        setIndex(localStorage.getItem('index') || '01');
    }, [setIndex]);

    return <IndexContext.Provider value={[index, setIndex]}>
        {children}
    </IndexContext.Provider>
}

export function useIndex(){
    const [index, setIndex] = useContext(IndexContext);

    const setIndexWithStorage = (index) => {
        localStorage.setItem('index', index);
        setIndex(index);
    }

    return [index, setIndexWithStorage];
}
