import heroImage from '@assets/images/hero-image.png';
import Button from '../shared/Button';
import { heroContent } from '../../data/hero';

const HeroSection = () => {
    return (
        <section
            id="heroSection"
            className="min-h-screen flex items-center justify-center"
        >
            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 py-16">
                {/* Left Content */}
                <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                    <h6 className="text-yellow-400 text-xl md:text-2xl font-medium mb-2 flex items-center gap-2">
                        {heroContent.greeting}{' '}
                        <span className="inline-block">👋</span>
                    </h6>
                    <h1 className="font-black text-2xl md:text-4xl lg:text-5xl mb-8">
                        {heroContent.name}
                    </h1>
                    <h5 className="text-yellow-400 text-lg md:text-xl font-semibold mb-2">
                        {heroContent.typingStrings[0]}
                    </h5>
                    <div className="flex flex-wrap items-center gap-y-2 mb-5">
                        {heroContent.skills.map((skill, idx) => (
                            <span
                                key={skill.name}
                                className="text-base font-semibold flex items-center"
                            >
                                {skill.name}
                                {idx < heroContent.skills.length - 1 && (
                                    <span className="mx-3 text-yellow-400 text-xl">
                                        •
                                    </span>
                                )}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-8">
                        <Button
                            variant="outline"
                            className="bg-yellow-400 text-[#23232b] border-yellow-400 hover:border-yellow-400 px-6 py-1.5 rounded font-bold text-base shadow-none hover:bg-transparent hover:text-white focus:ring-yellow-400"
                            href={heroContent.buttons.contact.href}
                        >
                            {heroContent.buttons.contact.text}
                        </Button>
                        <Button
                            variant="outline"
                            className="border-yellow-400 text-yellow-400 px-6 py-1.5 rounded font-bold text-base shadow-none hover:bg-yellow-400 hover:text-[#23232b] focus:ring-yellow-400"
                            href={heroContent.buttons.about.href}
                        >
                            {heroContent.buttons.about.text}
                        </Button>
                    </div>
                </div>
                {/* Right Image */}
                <div className="flex-1 flex justify-end items-center">
                    <img
                        src={heroImage}
                        alt="Muhammad Alamin Islam Sagor"
                        className="w-80 h-80 rounded-full object-cover shadow-none border-none"
                        style={{ background: '#23232b' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
