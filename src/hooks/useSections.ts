// Hook for sections context
import { useContext } from "react";
import SectionsContext from "../contexts/SectionsContext";
import type { SectionsContextType } from "../contexts/SectionsContext";

export const useSections = (): SectionsContextType => {
    const context = useContext(SectionsContext);
    if (!context) {
        throw new Error("useSections must be used within a SectionsProvider");
    }
    return context;
};
