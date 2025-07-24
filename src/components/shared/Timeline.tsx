import { useState } from 'react';
import { type TimelineItem } from '../../data/education';
import CertificateButton from './CertificateButton';

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
  showCertificates?: boolean;
  maxItems?: number;
}

const Timeline = ({ 
  items, 
  className = '',
  showCertificates = true,
  maxItems 
}: TimelineProps) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const displayItems = maxItems ? items.slice(0, maxItems) : items;

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const formatDateRange = (startDate: string, endDate?: string, current?: boolean) => {
    if (current) {
      return `${startDate} - Present`;
    }
    return endDate ? `${startDate} - ${endDate}` : startDate;
  };

  const getTimelineIcon = (type: 'education' | 'experience') => {
    return type === 'education' ? 'fa-solid fa-graduation-cap' : 'fa-solid fa-briefcase';
  };

  const getTimelineColor = (type: 'education' | 'experience') => {
    return type === 'education' ? 'border-blue-500 bg-blue-500' : 'border-primary bg-primary';
  };

  if (!items.length) {
    return (
      <div className={`relative ${className}`}>
        <div className="text-center py-12">
          <i className="fa-solid fa-clock text-4xl text-gray-600 mb-4"></i>
          <p className="text-gray-light">No timeline items available</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-gray-600 to-transparent"></div>
      
      {displayItems.map((item, index) => {
        const isExpanded = expandedItems.has(item.id);
        const isLongDescription = item.description.length > 150;
        const displayDescription = isExpanded || !isLongDescription 
          ? item.description 
          : `${item.description.substring(0, 150)}...`;

        return (
          <div 
            key={item.id} 
            className="relative flex items-start mb-12 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Timeline Dot */}
            <div className={`relative z-10 w-16 h-16 rounded-full border-4 ${getTimelineColor(item.type)} flex items-center justify-center shadow-lg`}>
              <i className={`${getTimelineIcon(item.type)} text-white text-lg`}></i>
            </div>

            {/* Timeline Content */}
            <div className="ml-8 flex-1 bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <div className="space-y-1">
                    <span className="block text-primary font-semibold">{item.institution}</span>
                    <span className="flex items-center text-gray-light text-sm">
                      <i className="fa-solid fa-map-marker-alt mr-2"></i>
                      {item.location}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col items-start lg:items-end gap-2">
                  <span className="px-3 py-1 bg-gray-700/50 text-gray-light text-sm rounded-full border border-gray-600/50">
                    {formatDateRange(item.startDate, item.endDate, item.current)}
                  </span>
                  {item.current && (
                    <span className="flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                      <i className="fa-solid fa-circle text-xs"></i>
                      Current
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="mb-4">
                <p className="text-gray-light leading-relaxed">{displayDescription}</p>
                {isLongDescription && (
                  <button
                    className="mt-2 text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1 transition-colors duration-200"
                    onClick={() => toggleExpanded(item.id)}
                  >
                    {isExpanded ? 'Show Less' : 'Read More'}
                    <i className={`fa-solid fa-chevron-${isExpanded ? 'up' : 'down'} text-xs`}></i>
                  </button>
                )}
              </div>

              {/* Skills */}
              {item.skills && item.skills.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <i className="fa-solid fa-code text-primary"></i>
                    Skills & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {item.achievements && item.achievements.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <i className="fa-solid fa-trophy text-primary"></i>
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-2 text-gray-light text-sm">
                        <i className="fa-solid fa-check-circle text-green-400 mt-0.5 flex-shrink-0"></i>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Certificate Button */}
              {showCertificates && item.certificate && (
                <div className="pt-4 border-t border-gray-700/50">
                  <CertificateButton
                    certificateImage={item.certificate.image}
                    certificateAlt={item.certificate.alt}
                    buttonText="View Certificate"
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;