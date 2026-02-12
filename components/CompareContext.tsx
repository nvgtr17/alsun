import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CompareContextType {
    compareIds: string[];
    addToCompare: (id: string) => void;
    removeFromCompare: (id: string) => void;
    clearCompare: () => void;
    isInCompare: (id: string) => boolean;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [compareIds, setCompareIds] = useState<string[]>([]);

    const addToCompare = (id: string) => {
        if (id && compareIds.length < 10 && !compareIds.includes(id)) {
            setCompareIds([...compareIds, id]);
        }
    };

    const removeFromCompare = (id: string) => {
        setCompareIds(compareIds.filter((cid) => cid !== id));
    };

    const clearCompare = () => {
        setCompareIds([]);
    };

    const isInCompare = (id: string) => compareIds.includes(id);

    return (
        <CompareContext.Provider value={{ compareIds, addToCompare, removeFromCompare, clearCompare, isInCompare }}>
            {children}
        </CompareContext.Provider>
    );
};

export const useCompare = () => {
    const context = useContext(CompareContext);
    if (context === undefined) {
        throw new Error('useCompare must be used within a CompareProvider');
    }
    return context;
};
