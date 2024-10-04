'use client';
import React, { createContext, useContext } from "react";

interface ArabicContextProps {
    locale: string;
}

const ArabicContext = createContext<ArabicContextProps | undefined>(undefined);

export const useArabicContext = () => {
    const context = useContext(ArabicContext);
    if (!context) {
        throw new Error("useArabicContext must be used within an ArabicProvider");
    }
    return context;
};

interface ArabicProviderProps {
    children: React.ReactNode;
    locale: string;
}

export const ArabicProvider: React.FC<ArabicProviderProps> = ({
    children,
    locale,
}) => {
    return (
        <ArabicContext.Provider value={{ locale }}>
            {children}
        </ArabicContext.Provider>
    );
};