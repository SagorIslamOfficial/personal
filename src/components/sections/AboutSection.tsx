import aboutImage from "@assets/images/about_me.svg";
import SkillTabs from "../shared/SkillTabs";
import { skillCategories } from "../../data/skills";
import { aboutContent } from "../../data/about";
import { useState, useEffect } from "react";
import { MdCodeOff } from "react-icons/md";
import { RiCodeSSlashLine } from "react-icons/ri";

// Typewriter effect for subtitle
const Typewriter = ({
    text,
    delay,
    className,
}: {
    text: string;
    delay: number;
    className?: string;
}) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (!isDeleting && currentIndex < text.length) {
            timeout = setTimeout(() => {
                setCurrentText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, delay);
        } else if (isDeleting && currentIndex > 0) {
            timeout = setTimeout(() => {
                setCurrentText((prevText) => prevText.slice(0, -1));
                setCurrentIndex((prevIndex) => prevIndex - 1);
            }, delay);
        } else if (!isDeleting && currentIndex === text.length) {
            // Finished typing, start deleting after a pause
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 1000);
        } else if (isDeleting && currentIndex === 0) {
            // Finished deleting, start typing after a pause
            timeout = setTimeout(() => {
                setIsDeleting(false);
            }, 500);
        }
        return () => clearTimeout(timeout);
    }, [currentIndex, isDeleting, delay, text]);

    return (
        <span className={`text-base font-semibold ${className ?? ""}`}>
            {currentText}
        </span>
    );
};

interface AboutSectionProps {
    // enable blinking divider
    blink?: boolean;
    // CSS duration for blink animation, e.g. '2s'
    blinkDuration?: string;
    // bright color for blink high phase
    blinkColorHigh?: string;
    // dim color for blink low phase
    blinkColorLow?: string;
}
const AboutSection = ({
    blink = true,
    blinkDuration = "3s",
    blinkColorHigh = "#fbbe245f",
    blinkColorLow = "#fef08a69",
}: AboutSectionProps) => {
    return (
        <section id="about" className="scroll-mt-16 py-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
                    {/* Left: SVG Illustration */}
                    <div className="flex-1 flex justify-center items-center">
                        <img
                            src={aboutImage}
                            alt="About Muhammad Alamin Islam Sagor"
                            className="w-full max-w-xs h-auto object-contain animate-walk-vertical"
                            style={{
                                animation:
                                    "walk-vertical 3.5s ease-in-out infinite",
                            }}
                        />
                        {/* <img
                            src={aboutImage}
                            alt="About Muhammad Alamin Islam Sagor"
                            className="w-full max-w-xs h-auto object-contain animate-walk-horizontal"
                            style={{ animation: 'walk-horizontal 3.5s ease-in-out infinite' }}
                        /> */}
                    </div>

                    {/* Divider */}
                    <div
                        className={`hidden lg:block w-px mx-4 self-stretch my-[4%] ${blink ? "blink-light" : ""}`}
                        style={
                            {
                                "--blink-duration": blinkDuration,
                                "--blink-color-high": blinkColorHigh,
                                "--blink-color-low": blinkColorLow,
                            } as React.CSSProperties
                        }
                    />

                    {/* Right: Content */}
                    <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Header */}
                        <h2 className="text-2xl md:text-[26px] font-semibold text-white">
                            About Me
                        </h2>

                        {/* Subtitle: code icon, bold yellow text, wrench icon */}
                        <div className="flex items-center gap-2 my-4">
                            <RiCodeSSlashLine className="text-yellow-400 text-xl" />
                            <Typewriter
                                text="I'm a full-stack laravel & WordPress Plugin developer. Also working with React JS, mySQL, and more."
                                delay={80}
                                className="text-yellow-400"
                            />
                            <MdCodeOff className="text-yellow-400 text-xl" />
                        </div>

                        {/* Description */}
                        <p className="text-[#c1c0c0] text-base mb-8 text-justify">
                            {aboutContent.description
                                .split("\n")
                                .map((line, idx) => (
                                    <span key={idx}>
                                        {line.trim()}
                                        <br />
                                    </span>
                                ))}
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

            <style>
                {`
                    @keyframes walk-vertical {
                        0% { transform: translateY(0); }
                        50% { transform: translateY(-24px); }
                        100% { transform: translateY(0); }
                    }
                    @keyframes walk-horizontal {
                        0% { transform: translateX(0); }
                        50% { transform: translateX(24px); }
                        100% { transform: translateX(0); }
                    }
                    @keyframes blink-light {
                        0%, 100% {
                            background-color: var(--blink-color-high);
                            opacity: 1;
                        }
                        50% {
                            background-color: var(--blink-color-low);
                            opacity: 0.3;
                        }
                    }
                    .blink-light {
                        animation: blink-light var(--blink-duration, 2s) ease-in-out infinite;
                    }
                 `}
            </style>
        </section>
    );
};

export default AboutSection;
