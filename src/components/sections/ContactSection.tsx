import { useState } from 'react';
import SectionHeading from '../shared/SectionHeading';
import Button from '../shared/Button';
import {
    contactInfo,
    contactFormInitialData,
    type ContactFormData,
} from '../../data/contact';

const ContactSection = () => {
    const [formData, setFormData] = useState<ContactFormData>(
        contactFormInitialData
    );
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Partial<ContactFormData>>({});

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name as keyof ContactFormData]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<ContactFormData> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // TODO: Implement actual form submission when backend is ready
            console.log('Form submitted:', formData);

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Reset form on success
            setFormData(contactFormInitialData);
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="getInTouch" className="py-20 bg-dark-DEFAULT">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <SectionHeading
                        title="Get In Touch...!"
                        subtitle="If I can be of assistance, please do not hesitate to contact me. And I will give you my best."
                    />
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8">
                            <h5 className="text-2xl font-bold text-white mb-8">
                                Message me ...
                            </h5>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ${errors.name ? 'border-red-500 ring-2 ring-red-500' : 'border-gray-600 hover:border-gray-500'}`}
                                        name="name"
                                        id="name"
                                        placeholder="Name*"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                    {errors.name && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {errors.name}
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ${errors.email ? 'border-red-500 ring-2 ring-red-500' : 'border-gray-600 hover:border-gray-500'}`}
                                        name="email"
                                        id="email"
                                        placeholder="Email*"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                    {errors.email && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {errors.email}
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ${errors.subject ? 'border-red-500 ring-2 ring-red-500' : 'border-gray-600 hover:border-gray-500'}`}
                                        name="subject"
                                        id="subject"
                                        placeholder="Subject*"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                    />
                                    {errors.subject && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {errors.subject}
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <textarea
                                        className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none ${errors.message ? 'border-red-500 ring-2 ring-red-500' : 'border-gray-600 hover:border-gray-500'}`}
                                        name="message"
                                        id="message"
                                        rows={4}
                                        placeholder="Message*"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                    />
                                    {errors.message && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {errors.message}
                                        </div>
                                    )}
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    disabled={isSubmitting}
                                    className="w-full"
                                >
                                    {isSubmitting
                                        ? 'SENDING...'
                                        : 'SEND MESSAGE'}
                                </Button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="lg:col-span-5">
                        <div className="space-y-8">
                            <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6 hover:border-primary/30 transition-colors duration-300">
                                <h5 className="text-xl font-semibold text-white mb-2">
                                    {contactInfo.address.full}
                                </h5>
                                <p className="text-gray-light flex items-center gap-2">
                                    <i className="fa-solid fa-location-dot text-primary"></i>
                                    Current Address
                                </p>
                            </div>

                            <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6 hover:border-primary/30 transition-colors duration-300">
                                <h5 className="text-xl font-semibold text-white mb-2">
                                    <a
                                        href={`mailto:${contactInfo.email}`}
                                        className="hover:text-primary transition-colors duration-300"
                                    >
                                        {contactInfo.email}
                                    </a>
                                </h5>
                                <p className="text-gray-light flex items-center gap-2">
                                    <i className="fa-solid fa-envelope text-primary"></i>
                                    Mail Address
                                </p>
                            </div>

                            <div className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6 hover:border-primary/30 transition-colors duration-300">
                                <h5 className="text-xl font-semibold text-white mb-2">
                                    <a
                                        href={`tel:${contactInfo.phone}`}
                                        className="hover:text-primary transition-colors duration-300"
                                    >
                                        {contactInfo.phone}
                                    </a>
                                </h5>
                                <p className="text-gray-light flex items-center gap-2">
                                    <i className="fa-solid fa-phone text-primary"></i>
                                    Text/Call or WhatsApp
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
