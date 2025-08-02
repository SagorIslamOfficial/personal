// Sections visibility context for managing state across the app
import React, { createContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { SectionId } from '../config/navigation';
import type { SectionsConfiguration } from '../config/sections';
import { 
    defaultSectionsConfig, 
    toggleSectionVisibility, 
    setSectionVisibility,
    isSectionVisible,
    getVisibleSectionIds
} from '../config/sections';

interface SectionsContextType {
    config: SectionsConfiguration;
    isSectionVisible: (sectionId: SectionId) => boolean;
    getVisibleSectionIds: () => SectionId[];
    toggleSection: (sectionId: SectionId) => void;
    setSectionVisible: (sectionId: SectionId, visible: boolean) => void;
    resetToDefault: () => void;
}

export type { SectionsContextType };

const SectionsContext = createContext<SectionsContextType | undefined>(undefined);

interface SectionsProviderProps {
    children: ReactNode;
    initialConfig?: SectionsConfiguration;
}

export const SectionsProvider: React.FC<SectionsProviderProps> = ({ 
    children, 
    initialConfig = defaultSectionsConfig
}) => {
    const [config, setConfig] = useState<SectionsConfiguration>(initialConfig);

    const checkSectionVisible = useCallback((sectionId: SectionId): boolean => {
        return isSectionVisible(sectionId, config);
    }, [config]);

    const getVisibleIds = useCallback((): SectionId[] => {
        return getVisibleSectionIds(config);
    }, [config]);

    const toggleSection = useCallback((sectionId: SectionId) => {
        setConfig(prevConfig => toggleSectionVisibility(sectionId, prevConfig));
    }, []);

    const setSectionVisible = useCallback((sectionId: SectionId, visible: boolean) => {
        setConfig(prevConfig => setSectionVisibility(sectionId, visible, prevConfig));
    }, []);

    const resetToDefault = useCallback(() => {
        setConfig(defaultSectionsConfig);
    }, []);

    const value: SectionsContextType = {
        config,
        isSectionVisible: checkSectionVisible,
        getVisibleSectionIds: getVisibleIds,
        toggleSection,
        setSectionVisible,
        resetToDefault,
    };

    return (
        <SectionsContext.Provider value={value}>
            {children}
        </SectionsContext.Provider>
    );
};

export default SectionsContext;
