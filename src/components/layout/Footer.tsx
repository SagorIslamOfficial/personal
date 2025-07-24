import { contactInfo } from '../../data/contact';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            id="footer"
            className="bg-gray-900 border-t border-gray-800 py-8"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {contactInfo.social.map((social) => (
                            <a
                                key={social.platform}
                                href={social.url}
                                className="w-10 h-10 bg-gray-800 hover:bg-primary text-gray-light hover:text-dark rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label={social.label}
                                target={
                                    social.url.startsWith('http')
                                        ? '_blank'
                                        : undefined
                                }
                                rel={
                                    social.url.startsWith('http')
                                        ? 'noopener noreferrer'
                                        : undefined
                                }
                            >
                                <i
                                    className={`${social.icon} text-lg`}
                                    aria-hidden="true"
                                ></i>
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="text-center md:text-right">
                        <p className="text-gray-light text-sm">
                            © All rights reserved | 2017 - {currentYear} |
                            Design and Develop by myself
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
