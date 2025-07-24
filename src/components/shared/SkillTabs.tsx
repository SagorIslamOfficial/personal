import { useState, useCallback, useEffect } from 'react';

interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
  icon?: string;
}

interface SkillTabsProps {
  categories: SkillCategory[];
  className?: string;
  defaultActiveTab?: string;
  onTabChange?: (tabId: string) => void;
  showCounter?: boolean;
  animated?: boolean;
}

const SkillTabs = ({ 
  categories, 
  className = '',
  defaultActiveTab,
  onTabChange,
  showCounter = true,
  animated = true
}: SkillTabsProps) => {
  // Suppress unused variable warnings
  void showCounter;
  void animated;
  const [activeTab, setActiveTab] = useState<string>(
    defaultActiveTab || categories[0]?.id || ''
  );

  const handleTabClick = useCallback((tabId: string) => {
    if (tabId !== activeTab) {
      setActiveTab(tabId);
      onTabChange?.(tabId);
    }
  }, [activeTab, onTabChange]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent, tabId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTabClick(tabId);
    }
  }, [handleTabClick]);

  // Update active tab if defaultActiveTab changes
  useEffect(() => {
    if (defaultActiveTab && defaultActiveTab !== activeTab) {
      setActiveTab(defaultActiveTab);
    }
  }, [defaultActiveTab, activeTab]);

  if (!categories.length) {
    return (
      <div className={`w-full ${className}`}>
        <div className="text-center py-8 text-gray-light">
          No skill categories available
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-6 mb-8" role="tablist">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`
              font-medium transition-all duration-300 pb-2 border-b-2
              ${activeTab === category.id 
                ? 'text-primary border-primary' 
                : 'text-gray-light hover:text-white border-transparent hover:border-gray-600'
              }
            `}
            onClick={() => handleTabClick(category.id)}
            onKeyDown={(e) => handleKeyDown(e, category.id)}
            role="tab"
            aria-controls={`panel-${category.id}`}
            aria-selected={activeTab === category.id}
            type="button"
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="relative">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`
              transition-all duration-300 ease-in-out
              ${activeTab === category.id 
                ? 'opacity-100 block' 
                : 'opacity-0 hidden'
              }
            `}
            id={`panel-${category.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${category.id}`}
            tabIndex={0}
          >
            <div className="flex flex-wrap gap-3">
              {category.skills.length > 0 ? (
                category.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-gray-800/50 text-gray-light rounded-md text-sm hover:bg-gray-700/50 hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <div className="w-full text-center py-8 text-gray-light">
                  No skills in this category
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillTabs;