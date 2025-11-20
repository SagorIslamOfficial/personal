// Contact information and form data
import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export interface ContactInfo {
    address: {
        street: string;
        city: string;
        country: string;
        full: string;
    };
    email: string;
    phone: string;
    social: SocialLink[];
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: React.ComponentType<{ className?: string }>;
    label: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const contactInfo: ContactInfo = {
    address: {
        street: "Mirpur 12",
        city: "Dhaka-1216",
        country: "Bangladesh",
        full: "Mirpur 12, Dhaka-1216, Bangladesh",
    },
    email: "sagor_islam@icloud.com",
    phone: "+880 1933-126-160",
    social: [
        {
            platform: "github",
            url: "https://github.com/SagorIslamOfficial",
            icon: FaGithub,
            label: "GitHub",
        },
        {
            platform: "linkedin",
            url: "https://linkedin.com/in/sagorislamofficial",
            icon: FaLinkedinIn,
            label: "LinkedIn",
        },
        {
            platform: "facebook",
            url: "https://facebook.com/SagorIslamOfficial",
            icon: FaFacebookF,
            label: "Facebook",
        },
    ],
};

export const contactFormInitialData: ContactFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

export default { contactInfo, contactFormInitialData };
