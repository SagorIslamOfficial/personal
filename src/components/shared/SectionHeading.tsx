interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  showViewAll?: boolean;
  viewAllLink?: string;
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  showViewAll = false, 
  viewAllLink = '#', 
  className = '' 
}: SectionHeadingProps) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-light max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      {showViewAll && (
        <a 
          href={viewAllLink} 
          className="inline-flex items-center mt-4 text-primary hover:text-primary/80 font-medium transition-colors duration-300"
        >
          View All
          <i className="fa-solid fa-arrow-right ml-2"></i>
        </a>
      )}
    </div>
  );
};

export default SectionHeading;