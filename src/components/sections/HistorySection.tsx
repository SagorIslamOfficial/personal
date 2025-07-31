import { useRef, useEffect, useState } from 'react';
import CareerExperienceCard from '../shared/CareerExperienceCard';
import { educationData } from '../../data/education';
import { experienceData } from '../../data/experience';

const HistorySection = () => {
    const educationRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const [educationHeight, setEducationHeight] = useState<number>(0);
    const [experienceHeight, setExperienceHeight] = useState<number>(0);

    useEffect(() => {
        const updateHeights = () => {
            if (educationRef.current) {
                setEducationHeight(educationRef.current.scrollHeight);
            }
            if (experienceRef.current) {
                setExperienceHeight(experienceRef.current.scrollHeight);
            }
        };

        // Small delay to ensure DOM is updated
        const timer = setTimeout(updateHeights, 100);

        window.addEventListener('resize', updateHeights);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', updateHeights);
        };
    }, []); // Run once on mount

    // Additional effect to update heights after each render
    useEffect(() => {
        const updateHeights = () => {
            if (educationRef.current) {
                setEducationHeight(educationRef.current.scrollHeight);
            }
            if (experienceRef.current) {
                setExperienceHeight(experienceRef.current.scrollHeight);
            }
        };

        updateHeights();
    });
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
                        <div className="mb-10">
                            <h2 className="text-xl font-bold text-white">
                                Education{' '}
                                <span className="text-yellow-400">History</span>
                            </h2>
                        </div>

                        {/* Dynamic Timeline Line */}
                        <div
                            className="absolute right-0 w-1 bg-[#191923]"
                            style={{
                                top: '6.5rem', // Start from first item dot position
                                height:
                                    educationHeight > 0
                                        ? `${educationHeight - 35}px`
                                        : '100%',
                            }}
                        ></div>

                        {/* Education Items */}
                        <div className="pr-12" ref={educationRef}>
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
                        <div className="mb-10">
                            <h2 className="text-xl font-bold text-white">
                                Work{' '}
                                <span className="text-yellow-400">History</span>
                            </h2>
                        </div>

                        {/* Dynamic Timeline Line */}
                        <div
                            className="absolute right-0 w-1 bg-[#191923]"
                            style={{
                                top: '6.5rem', // Start from first item dot position
                                height:
                                    experienceHeight > 0
                                        ? `${experienceHeight - 35}px`
                                        : '100%',
                            }}
                        ></div>

                        {/* Work Items */}
                        <div className="pr-12" ref={experienceRef}>
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
