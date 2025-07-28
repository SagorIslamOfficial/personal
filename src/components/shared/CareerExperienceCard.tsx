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
                <div className="absolute -right-[3.4rem] top-6 w-4 h-4 bg-black rounded-full border-3 border-yellow-400 z-10"></div>
            )}
            
            {/* Card Content */}
            <div className="bg-[#2d2d3a] rounded-sm p-6 transition-all duration-300 relative">
                {/* Arrow from card to timeline dot */}
                {showDot && (
                    <div className="absolute -right-2 top-5 w-0 h-0 border-t-[12px] border-b-[12px] border-l-[8px] border-transparent border-l-[#2d2d3a] z-5"></div>
                )}
                
                {/* Header with Title and Date */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex-1">
                        <h3 className="text-white text-md font-bold mb-0 leading-[27px]">
                            {item.title}
                        </h3>
                        <p className="text-[#8c8c8e] text-sm mb-1 italic">
                            {institutionName} <span className="text-gray-500">({item.location})</span>
                        </p>
                    </div>
                    <div className="text-right ml-4">
                        <span className="bg-[#20202a] text-[#8c8c8e] text-xs leading-[16px] px-4.5 py-1.5 rounded-xl">
                            {formatDateRange(item.startDate, item.endDate, item.current)}
                        </span>
                    </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                    <p className="text-[#8c8c8e] text-sm leading-relaxed">
                        {item.description}
                    </p>
                </div>

                {/* Certificate Button */}
                {item.certificate && (
                    <div className="pt-0">
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
