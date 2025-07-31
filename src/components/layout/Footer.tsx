import { contactInfo } from '../../data/contact';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer" className="bg-[#2c2c38] py-2">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Copyright */}
                    <div className="text-center md:text-right">
                        <p className="text-gray-light text-sm">
                            © All rights reserved | 2017 - {currentYear} |
                            <span className="text-yellow-500 font-semibold"> Design and Develop by myself</span>
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {contactInfo.social.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-1 border-gray-700 text-white w-9 h-9 rounded-full flex items-center justify-center hover:border-yellow-500 hover:text-yellow-500 transition-colors duration-300"
                                title={item.label}
                            >
                                <item.icon className="text-lg" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
