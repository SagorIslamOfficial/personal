/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#fffbeb",
                    100: "#fef3c7",
                    200: "#fde68a",
                    300: "#fcd34d",
                    400: "#fbbf24",
                    500: "#f59e0b",
                    600: "#d97706",
                    700: "#b45309",
                    800: "#92400e",
                    900: "#78350f",
                    DEFAULT: "#ffc107", // Bootstrap warning color
                },
                dark: {
                    50: "#f8fafc",
                    100: "#f1f5f9",
                    200: "#e2e8f0",
                    300: "#cbd5e1",
                    400: "#94a3b8",
                    500: "#64748b",
                    600: "#475569",
                    700: "#334155",
                    800: "#1e293b",
                    900: "#0f172a",
                    DEFAULT: "#1e1e28", // Main dark background
                },
                gray: {
                    light: "#8c8c8e",
                    DEFAULT: "#6b7280",
                    dark: "#374151",
                },
            },
            fontFamily: {
                sans: ["Nunito", "Nunito Sans", "sans-serif"],
                nunito: ["Nunito", "sans-serif"],
                "nunito-sans": ["Nunito Sans", "sans-serif"],
            },
            fontSize: {
                hero: ["3.5rem", { lineHeight: "1.2", fontWeight: "500" }],
                section: ["2rem", { lineHeight: "1.3", fontWeight: "700" }],
            },
            spacing: {
                18: "4.5rem",
                88: "22rem",
            },
            animation: {
                wave: "wave-animation 2.5s infinite",
                "fade-in": "fadeIn 0.6s ease-out",
                "fade-in-up": "fadeInUp 0.6s ease-out",
                "fade-in-left": "fadeInLeft 0.6s ease-out",
                "fade-in-right": "fadeInRight 0.6s ease-out",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                fadeInLeft: {
                    "0%": { opacity: "0", transform: "translateX(-30px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                fadeInRight: {
                    "0%": { opacity: "0", transform: "translateX(20px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
            },
            backdropBlur: {
                xs: "2px",
            },
        },
    },
    plugins: [],
};
