import { type ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
    className?: string;
}

const Layout = ({ children, className = "" }: LayoutProps) => {
    return <div className={`layout-wrapper ${className}`}>{children}</div>;
};

export default Layout;
