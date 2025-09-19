import React, { useState } from "react";
import { useSections } from "../../hooks/useSections";
import type { SectionId } from "../../config/navigation";
import {
    MdVisibility,
    MdVisibilityOff,
    MdSettings,
    MdClose,
    MdRefresh,
} from "react-icons/md";

interface SectionControlPanelProps {
    className?: string;
}

const SectionControlPanel: React.FC<SectionControlPanelProps> = ({
    className = "",
}) => {
    const { config, isSectionVisible, toggleSection, resetToDefault } =
        useSections();
    const [isOpen, setIsOpen] = useState(false);

    const togglePanel = () => setIsOpen(!isOpen);

    const handleToggleSection = (sectionId: SectionId) => {
        toggleSection(sectionId);
    };

    const handleResetToDefault = () => {
        resetToDefault();
        // Optional: Close the panel after reset
        // setIsOpen(false);
    };

    return (
        <>
            {/* Toggle Button - Fixed Position */}
            <button
                onClick={togglePanel}
                className={`fixed top-4 right-4 z-50 bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full shadow-lg transition-all duration-300 ${className}`}
                title="Toggle Section Control Panel"
                aria-label="Toggle Section Control Panel"
            >
                <MdSettings className="text-xl" />
            </button>

            {/* Control Panel - Slide-in from right */}
            <div
                className={`fixed top-0 right-0 h-full w-80 bg-[#1e1e28] border-l border-gray-700 shadow-2xl transform transition-transform duration-300 z-40 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Panel Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                        <MdSettings className="text-yellow-400" />
                        Section Controls
                    </h3>
                    <button
                        onClick={togglePanel}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Close panel"
                    >
                        <MdClose className="text-xl" />
                    </button>
                </div>

                {/* Panel Content */}
                <div className="p-4 space-y-4">
                    {/* Reset Button */}
                    <div className="flex flex-col gap-2 mb-6">
                        <button
                            onClick={handleResetToDefault}
                            className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
                        >
                            <MdRefresh className="text-sm" />
                            Reset to Default
                        </button>
                        <button
                            onClick={() => {
                                resetToDefault();
                            }}
                            className="flex items-center justify-center gap-2 bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors text-sm"
                        >
                            Clear Saved Settings
                        </button>
                    </div>

                    {/* Section List */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                            Sections Visibility
                        </h4>

                        {Object.values(config.sections).map((section) => {
                            const isVisible = isSectionVisible(section.id);
                            const isRequired = section.required;

                            return (
                                <div
                                    key={section.id}
                                    className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                                        isVisible
                                            ? "bg-green-900/20 border-green-700/50"
                                            : "bg-red-900/20 border-red-700/50"
                                    } ${isRequired ? "opacity-75" : ""}`}
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <h5 className="text-white font-medium text-sm">
                                                {section.name}
                                            </h5>
                                            {isRequired && (
                                                <span className="bg-yellow-400/20 text-yellow-400 text-xs px-2 py-0.5 rounded-full">
                                                    Required
                                                </span>
                                            )}
                                        </div>
                                        {section.description && (
                                            <p className="text-gray-400 text-xs mt-1">
                                                {section.description}
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        onClick={() =>
                                            !isRequired &&
                                            handleToggleSection(section.id)
                                        }
                                        disabled={isRequired}
                                        className={`ml-3 p-2 rounded-md transition-all ${
                                            isRequired
                                                ? "cursor-not-allowed text-gray-500"
                                                : isVisible
                                                  ? "bg-green-600 hover:bg-green-500 text-white"
                                                  : "bg-red-600 hover:bg-red-500 text-white"
                                        }`}
                                        title={
                                            isRequired
                                                ? "This section is required and cannot be hidden"
                                                : isVisible
                                                  ? "Click to hide this section"
                                                  : "Click to show this section"
                                        }
                                    >
                                        {isVisible ? (
                                            <MdVisibility className="text-lg" />
                                        ) : (
                                            <MdVisibilityOff className="text-lg" />
                                        )}
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    {/* Quick Actions */}
                    <div className="mt-6 pt-4 border-t border-gray-700">
                        <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">
                            Quick Actions
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                onClick={() => {
                                    Object.values(config.sections).forEach(
                                        (section) => {
                                            if (
                                                !section.required &&
                                                !isSectionVisible(section.id)
                                            ) {
                                                toggleSection(section.id);
                                            }
                                        },
                                    );
                                }}
                                className="bg-green-600 hover:bg-green-500 text-white px-3 py-2 rounded-md text-sm transition-colors"
                            >
                                Show All
                            </button>
                            <button
                                onClick={() => {
                                    Object.values(config.sections).forEach(
                                        (section) => {
                                            if (
                                                !section.required &&
                                                isSectionVisible(section.id)
                                            ) {
                                                toggleSection(section.id);
                                            }
                                        },
                                    );
                                }}
                                className="bg-red-600 hover:bg-red-500 text-white px-3 py-2 rounded-md text-sm transition-colors"
                            >
                                Hide All
                            </button>
                        </div>
                    </div>

                    {/* Panel Footer */}
                    <div className="mt-6 pt-4 border-t border-gray-700 text-center">
                        <p className="text-xs text-gray-500">
                            Section visibility is managed dynamically
                        </p>
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30"
                    onClick={togglePanel}
                    aria-hidden="true"
                />
            )}
        </>
    );
};

export default SectionControlPanel;
