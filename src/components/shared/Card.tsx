import { type ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    variant?: "default" | "elevated" | "outlined";
    padding?: "none" | "sm" | "md" | "lg";
    className?: string;
    onClick?: () => void;
    hover?: boolean;
}

const Card = ({
    children,
    variant = "default",
    padding = "md",
    className = "",
    onClick,
    hover = false,
}: CardProps) => {
    const baseClasses = "card-custom";
    const variantClasses = {
        default: "card-default",
        elevated: "card-elevated",
        outlined: "card-outlined",
    };

    const paddingClasses = {
        none: "card-padding-none",
        sm: "card-padding-sm",
        md: "card-padding-md",
        lg: "card-padding-lg",
    };

    const classes = `
    ${baseClasses} 
    ${variantClasses[variant]} 
    ${paddingClasses[padding]} 
    ${hover ? "card-hover" : ""} 
    ${onClick ? "card-clickable" : ""} 
    ${className}
  `.trim();

    const cardStyle = {
        backgroundColor: "var(--card-bg, #ffffff)",
        borderRadius: "8px",
        transition: "all 0.3s ease",
        ...(variant === "elevated" && {
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }),
        ...(variant === "outlined" && {
            border: "1px solid rgba(255, 255, 255, 0.1)",
        }),
        ...(hover && {
            cursor: "pointer",
        }),
    };

    const paddingStyle = {
        none: "0",
        sm: "12px",
        md: "20px",
        lg: "32px",
    };

    return (
        <div
            className={classes}
            style={{
                ...cardStyle,
                padding: paddingStyle[padding],
            }}
            onClick={onClick}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={
                onClick
                    ? (e) => {
                          if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              onClick();
                          }
                      }
                    : undefined
            }
        >
            {children}
        </div>
    );
};

export default Card;
