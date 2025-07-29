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
        street: 'Mirpur 12',
        city: 'Dhaka-1216',
        country: 'Bangladesh',
        full: 'Mirpur 12, Dhaka-1216, Bangladesh',
    },
    email: 'sagor_islam@icloud.com',
    phone: '+880 1933-126-160',
    social: [
        {
            platform: 'facebook',
            url: 'https://facebook.com/sagorislam',
            icon: FaFacebookF,
            label: 'Facebook',
        },
        {
            platform: 'linkedin',
            url: 'https://linkedin.com/in/sagorislam',
            icon: FaLinkedinIn,
            label: 'LinkedIn',
        },
        {
            platform: 'github',
            url: 'https://github.com/sagorislam',
            icon: FaGithub,
            label: 'GitHub',
        },
    ],
};

export const contactFormInitialData: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

export default { contactInfo, contactFormInitialData };
