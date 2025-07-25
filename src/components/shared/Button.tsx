import { type ReactNode, type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?:
        | 'primary'
        | 'secondary'
        | 'outline'
        | 'contact'
        | 'about'
        | 'custom';
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    href?: string;
    external?: boolean;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
}

const Button = ({
    variant = 'primary',
    size = 'md',
    children,
    href,
    external = false,
    icon,
    iconPosition = 'right',
    className = '',
    ...props
}: ButtonProps) => {
    const baseClasses =
        'inline-flex items-center justify-center tracking-wide transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-DEFAULT disabled:opacity-50 disabled:cursor-not-allowed';

    const variantClasses = {
        primary:
            'bg-primary border-primary text-dark focus:ring-primary shadow-lg',
        secondary:
            'bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500',
        outline:
            'border-2 border-primary text-primary hover:bg-primary hover:text-dark focus:ring-primary',
        contact:
            'bg-primary text-dark hover:bg-primary/90 focus:ring-primary shadow-lg hover:shadow-xl',
        about: 'border-2 border-primary/50 text-primary hover:bg-primary hover:text-dark hover:border-primary focus:ring-primary',
        custom: '', // No color/border/hover classes
    };

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'text-base',
        lg: 'px-8 py-4 text-lg',
    };

    // If variant is 'custom', do not add any color/border/hover classes
    const classes =
        variant === 'custom'
            ? `${baseClasses} ${sizeClasses[size]} ${className}`.trim()
            : `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

    const content = (
        <>
            {icon && iconPosition === 'left' && (
                <span className="mr-2 flex-shrink-0">{icon}</span>
            )}
            <span>{children}</span>
            {icon && iconPosition === 'right' && (
                <span className="ml-2 flex-shrink-0">{icon}</span>
            )}
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                className={classes}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                role="button"
            >
                {content}
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            {content}
        </button>
    );
};

export default Button;
