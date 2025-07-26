import aboutImage from '@assets/images/about_me.svg';
import SkillTabs from '../shared/SkillTabs';
import { skillCategories } from '../../data/skills';
import { aboutContent } from '../../data/about';

const AboutSection = () => {
    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-12">
                    {/* Left: SVG Illustration */}
                    <div className="flex-1 flex justify-center items-center">
                        <img
                            src={aboutImage}
                            alt="About Muhammad Alamin Islam Sagor"
                            className="w-full max-w-xs h-auto object-contain"
                        />
                    </div>

                    {/* Divider */}
                    <div className="hidden lg:block h-[400px] w-px bg-yellow-400 mx-4" />

                    {/* Right: Content */}
                    <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Header */}
                        <h2 className="text-2xl md:text-[26px] font-semibold text-white">
                            About Me
                        </h2>

                        {/* Subtitle: code icon, bold yellow text, wrench icon */}
                        <div className="flex items-center gap-2 my-4">
                            <span className="text-base">&lt;/&gt;</span>
                            <span className="text-base">
                                I'm a full-stack developer (Laravel), WordPress
                                Customizer,
                            </span>
                            <span className="text-base">🛠️</span>
                        </div>

                        {/* Description */}
                        <p className="text-[#8c8c8e] text-base mb-8">
                            {aboutContent.description}
                        </p>

                        {/* Skills Tabs */}
                        <div className="w-full">
                            <SkillTabs
                                categories={skillCategories}
                                showCounter={false}
                                animated={true}
                                className="justify-start"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
