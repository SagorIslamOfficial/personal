interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  className?: string;
  text?: string;
}

const LoadingSpinner = ({
  size = 'md',
  color = 'primary',
  className = '',
  text
}: LoadingSpinnerProps) => {
  
  const sizeClasses = {
    sm: 'spinner-sm',
    md: 'spinner-md',
    lg: 'spinner-lg'
  };
  
  const colorClasses = {
    primary: 'spinner-primary',
    secondary: 'spinner-secondary',
    white: 'spinner-white'
  };

  const spinnerClasses = `loading-spinner ${sizeClasses[size]} ${colorClasses[color]} ${className}`.trim();

  return (
    <div className="loading-container">
      <div 
        className={spinnerClasses}
        role="status"
        aria-label="Loading"
        style={{
          width: size === 'sm' ? '20px' : size === 'lg' ? '40px' : '30px',
          height: size === 'sm' ? '20px' : size === 'lg' ? '40px' : '30px',
          border: `3px solid ${color === 'white' ? 'rgba(255,255,255,0.3)' : 'rgba(255,193,7,0.3)'}`,
          borderTop: `3px solid ${color === 'white' ? 'white' : '#ffc107'}`,
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          display: 'inline-block'
        }}
      />
      {text && <span className="loading-text" style={{ marginLeft: '10px' }}>{text}</span>}
      
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;