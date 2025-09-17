import heroImage from "@assets/images/hero-image.png";
import { heroContent } from "../../data/hero";
import { contactInfo } from "../../data/contact";
import TSParticlesBackground from "../ui/TSParticlesBackground";

const HeroSection = () => {
    return (
        <section
            id="heroSection"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* TSParticles Background */}
            <TSParticlesBackground />

            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 py-16 relative z-10">
                {/* Left Content */}
                <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                    <h6 className="text-yellow-400 text-xl md:text-2xl font-medium mb-2 flex items-center gap-2">
                        {heroContent.greeting} <span className="wave">👋</span>
                    </h6>
                    <h1 className="font-black text-2xl md:text-4xl lg:text-5xl mb-8">
                        {heroContent.name}
                    </h1>
                    <h5 className="text-yellow-400 text-lg md:text-xl font-semibold mb-1">
                        {heroContent.headline[0]}
                    </h5>
                    <div className="flex flex-wrap items-center gap-y-2 mb-6">
                        {heroContent.skills.map((skill, idx) => (
                            <span
                                key={skill.name}
                                className="relative group text-base font-semibold flex items-center cursor-help"
                            >
                                {skill.name}
                                {skill.tooltip && (
                                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded-lg py-3 px-4 whitespace-nowrap z-10">
                                        {skill.tooltip}
                                    </span>
                                )}
                                {idx < heroContent.skills.length - 1 && (
                                    <span className="mx-3 text-yellow-400 text-xl">
                                        •
                                    </span>
                                )}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center gap-4 mb-8">
                        {contactInfo.social.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-1 border-gray-800 text-white w-9 h-9 rounded-full flex items-center justify-center hover:border-yellow-600 hover:text-yellow-500 transition-colors duration-300"
                                title={item.label}
                            >
                                <item.icon className="text-lg" />
                            </a>
                        ))}
                    </div>
                    <div className="flex gap-8">
                        <button
                            aria-label="Contact Me"
                            title="Contact Me"
                            className="bg-yellow-400 text-[#23232b] hover:bg-yellow-500 px-6 py-1.5 rounded-sm font-bold text-sm !tracking-[2px] cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                e.currentTarget.blur();
                                document
                                    .getElementById("getInTouch")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            {heroContent.buttons.contact.text}
                        </button>
                        <button
                            aria-label="About Me"
                            title="About Me"
                            className="text-yellow-400 border border-yellow-600 hover:border-yellow-400 px-6 py-1.5 rounded-sm font-bold text-sm !tracking-[2px] cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                e.currentTarget.blur();
                                document
                                    .getElementById("about")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            {heroContent.buttons.about.text}
                        </button>
                    </div>
                </div>
                {/* Right Image */}
                <div className="flex-1 flex justify-end items-center">
                    <img
                        src={heroImage}
                        alt="Muhammad Alamin Islam Sagor"
                        className="w-80 h-80 rounded-full object-cover shadow-none border-none"
                        style={{ background: "#23232b" }}
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
