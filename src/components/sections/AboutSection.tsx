import aboutImage from '@assets/images/about_me.svg';
import SkillTabs from '../shared/SkillTabs';
import { skillCategories } from '../../data/skills';
import { aboutContent } from '../../data/about';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-dark-DEFAULT">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start relative">
                    {/* Image Container */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="relative max-w-lg w-full">
                            <img
                                src={aboutImage}
                                alt="About Muhammad Alamin Islam Sagor"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Vertical Divider - Only visible on large screens */}
                    <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-primary transform -translate-x-1/2"></div>

                    {/* Content Container */}
                    <div className="space-y-8">
                        {/* About Header */}
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                About Me
                            </h2>

                            {/* Code-style subtitle */}
                            <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4 font-mono">
                                <span className="text-primary">&lt;&gt;</span>
                                <span className="text-white">
                                    {' '}
                                    I'm a full-stack developer
                                </span>
                                <span className="text-primary">(Laravel)</span>
                                <span className="text-white">, I </span>
                                <span className="text-primary">🔥</span>
                            </div>

                            <p className="text-gray-light leading-relaxed text-lg">
                                {aboutContent.description}
                            </p>
                        </div>

                        {/* Skills Tabs */}
                        <div className="mt-8">
                            <SkillTabs
                                categories={skillCategories}
                                showCounter={false}
                                animated={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
