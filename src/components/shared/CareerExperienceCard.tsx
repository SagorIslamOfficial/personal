import { type EducationItem } from '../../data/education';
import { type ExperienceItem } from '../../data/experience';
import CertificateButton from './CertificateButton';

interface CareerExperienceCardProps {
    item: EducationItem | ExperienceItem;
    showDot?: boolean;
    type: 'education' | 'experience';
}

const CareerExperienceCard = ({ item, showDot = true, type }: CareerExperienceCardProps) => {
    const formatDateRange = (
        startDate: string,
        endDate?: string,
        current?: boolean
    ) => {
        if (current) {
            return `Started - ${startDate}`;
        }
        return endDate ? `${startDate} - ${endDate}` : startDate;
    };

    // Get the correct field name based on type
    const institutionName = type === 'experience' 
        ? (item as ExperienceItem).company 
        : (item as EducationItem).institution;

    return (
        <div className="relative mb-8">
            {/* Timeline Dot */}
            {showDot && (
                <div className="absolute -right-6 top-4 w-4 h-4 bg-yellow-400 rounded-full border-2 border-yellow-400 z-10"></div>
            )}
            
            {/* Card Content */}
            <div className="bg-[#2c2c38] border border-[#363641] rounded-lg p-6 hover:border-yellow-400/30 transition-all duration-300 relative">
                {/* Header with Title and Date */}
                <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                        <h3 className="text-white text-lg font-semibold mb-2 leading-tight">
                            {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-1">
                            {institutionName}
                        </p>
                        {item.location && (
                            <p className="text-gray-400 text-sm">
                                ({item.location})
                            </p>
                        )}
                    </div>
                    <div className="text-right ml-4">
                        <span className="bg-gray-700/50 text-gray-300 text-sm px-3 py-1 rounded border border-gray-600/50">
                            {formatDateRange(item.startDate, item.endDate, item.current)}
                        </span>
                    </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                    <p className="text-gray-300 text-sm leading-relaxed">
                        {item.description}
                    </p>
                </div>

                {/* Certificate Button */}
                {item.certificate && (
                    <div className="pt-4">
                        <CertificateButton
                            certificateImage={item.certificate.image}
                            certificateAlt={item.certificate.alt}
                            buttonText="CERTIFICATE"
                            className=""
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default CareerExperienceCard;
