import heroImage from '@assets/images/hero-image.png';
import Button from '../shared/Button';
import { useTypeIt } from '../../hooks/useTypeIt';
import { heroTypeItConfig } from '../../config/animations';
import { heroContent } from '../../data/hero';

const HeroSection = () => {
  // TypeIt animation configuration with content from data
  const { elementRef: typeItRef } = useTypeIt({
    ...heroTypeItConfig,
    strings: heroContent.typingStrings,
    onComplete: () => {
      console.log('TypeIt animation cycle completed');
    },
    onError: (error) => {
      console.error('TypeIt animation error:', error);
    }
  });

  return (
    <section id="heroSection" className="relative min-h-screen flex items-center justify-center bg-dark-DEFAULT overflow-hidden">
      <canvas className="background absolute inset-0 w-full h-full"></canvas>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6">
              <h6 className="text-xl lg:text-2xl font-medium text-primary">
                {heroContent.greeting} <span className="wave inline-block">👋</span>
              </h6>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {heroContent.name}
              </h1>
              
              <h5 
                className="text-xl lg:text-2xl font-medium text-primary min-h-[2rem]" 
                ref={typeItRef as React.RefObject<HTMLHeadingElement>}
              ></h5>
              
              <ul className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
                {heroContent.skills.map((skill, index) => (
                  <li 
                    key={index}
                    className="relative px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
                    title={skill.tooltip || skill.name}
                  >
                    {skill.name}
                    {index < heroContent.skills.length - 1 && (
                      <span className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <Button variant="contact" href={heroContent.buttons.contact.href}>
                {heroContent.buttons.contact.text}
              </Button>
              <Button variant="about" href={heroContent.buttons.about.href}>
                {heroContent.buttons.about.text}
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 max-w-md lg:max-w-lg order-1 lg:order-2">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary opacity-20 blur-3xl rounded-full animate-pulse"></div>
              
              {/* Image Container */}
              <div className="relative z-10 rounded-full overflow-hidden border-4 border-primary/30 hover:border-primary/50 transition-all duration-500 hover:scale-105">
                <img 
                  src={heroImage} 
                  alt="Muhammad Alamin Islam Sagor" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;