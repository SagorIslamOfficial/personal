interface SkillTagProps {
    skill: string;
    variant?: "default" | "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    className?: string;
    onClick?: () => void;
}

const SkillTag = ({
    skill,
    variant = "default",
    size = "md",
    className = "",
    onClick,
}: SkillTagProps) => {
    const baseClasses = "skill-tag";
    const variantClasses = {
        default: "skill-tag-default",
        primary: "skill-tag-primary",
        secondary: "skill-tag-secondary",
    };

    const sizeClasses = {
        sm: "skill-tag-sm",
        md: "skill-tag-md",
        lg: "skill-tag-lg",
    };

    const classes =
        `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

    return (
        <span
            className={classes}
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
            {skill}
        </span>
    );
};

export default SkillTag;
