import CareerExperienceCard from '../shared/CareerExperienceCard';
import { educationData } from '../../data/education';
import { experienceData } from '../../data/experience';

const HistorySection = () => {
    // Sort data with newest first
    const sortedEducationData = [...educationData].sort((a, b) => {
        const dateA = new Date(a.startDate).getTime();
        const dateB = new Date(b.startDate).getTime();
        return dateB - dateA;
    });

    const sortedExperienceData = [...experienceData].sort((a, b) => {
        const dateA = new Date(a.startDate).getTime();
        const dateB = new Date(b.startDate).getTime();
        return dateB - dateA;
    });

    return (
        <section id="education&Experience" className="py-20">
            <div className="max-w-7xl mx-auto">
                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Education History Column */}
                    <div className="relative">
                        {/* Column Header */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-white">
                                Education <span className="text-yellow-400">History</span>
                            </h2>
                        </div>

                        {/* Timeline Line */}
                        <div className="absolute right-0 top-16 bottom-0 w-0.5 bg-gray-600/50"></div>

                        {/* Education Items */}
                        <div className="pr-8">
                            {sortedEducationData.map((item) => (
                                <CareerExperienceCard
                                    key={item.id}
                                    item={item}
                                    type="education"
                                    showDot={true}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Work History Column */}
                    <div className="relative">
                        {/* Column Header */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-white">
                                Work <span className="text-yellow-400">History</span>
                            </h2>
                        </div>

                        {/* Timeline Line */}
                        <div className="absolute right-0 top-16 bottom-0 w-0.5 bg-gray-600/50"></div>

                        {/* Work Items */}
                        <div className="pr-8">
                            {sortedExperienceData.map((item) => (
                                <CareerExperienceCard
                                    key={item.id}
                                    item={item}
                                    type="experience"
                                    showDot={true}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HistorySection;
