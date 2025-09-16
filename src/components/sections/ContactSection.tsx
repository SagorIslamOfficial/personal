import React, { useState } from 'react';
import {
    contactInfo,
    contactFormInitialData,
    type ContactFormData,
} from '../../data/contact';
import { BiMailSend } from 'react-icons/bi';
import { SlLocationPin } from 'react-icons/sl';
import { VscCallIncoming } from 'react-icons/vsc';
import { TbWorldShare } from 'react-icons/tb';

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
        <section id="getInTouch" className="scroll-mt-16 py-20">
            <div className="max-w-7xl mx-auto">
                {/* Main Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get In Touch <span className="text-yellow-500 animate-pulse">!</span>
                    </h2>
                    <p className="text-white opacity-60 text-md max-w-md mx-auto">
                        I'm always open to discussing new projects, creative
                        ideas or opportunities. Feel free to reach out.
                    </p>
                </div>

                <div className="grid grid-cols-5 gap-8">
                    {/* Send a Message Form */}
                    <div className="col-span-3">
                        <div className="bg-[#2d2d39] rounded-lg p-8">
                            <h3 className="text-2xl font-semibold text-white mb-2 leading-[20px]">
                                Send a Message
                            </h3>

                            <div className="w-20 h-[2px] bg-yellow-500 mb-8"></div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name and Email Row */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-300 text-sm mb-1">
                                            Name{' '}
                                            <span className="text-yellow-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            className={`w-full px-4 py-2 border border-gray-600 rounded-lg text-white placeholder:text-md placeholder-gray-400 focus:outline-none focus:border-yellow-600/50 transition-colors duration-300 ${errors.name ? 'border-red-500' : ''}`}
                                            name="name"
                                            id="name"
                                            placeholder="e.g. Amin Muhammad"
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
                                        <label className="block text-gray-300 text-sm mb-1">
                                            Email{' '}
                                            <span className="text-yellow-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="email"
                                            className={`w-full px-4 py-2 border border-gray-600 rounded-lg text-white placeholder:text-md placeholder-gray-400 focus:outline-none focus:border-yellow-600/50 transition-colors duration-300 ${errors.email ? 'border-red-500' : ''}`}
                                            name="email"
                                            id="email"
                                            placeholder="e.g. amin@example.com"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                        {errors.email && (
                                            <div className="text-red-500 text-sm mt-1">
                                                {errors.email}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="block text-gray-300 text-sm mb-1">
                                        Subject{' '}
                                        <span className="text-yellow-500">
                                            *
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        className={`w-full px-4 py-2 border border-gray-600 rounded-lg text-white placeholder:text-md placeholder-gray-400 focus:outline-none focus:border-yellow-600/50 transition-colors duration-300 ${errors.subject ? 'border-red-500' : ''}`}
                                        name="subject"
                                        id="subject"
                                        placeholder="Regarding your project..."
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                    />
                                    {errors.subject && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {errors.subject}
                                        </div>
                                    )}
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-gray-300 text-sm mb-1">
                                        Message{' '}
                                        <span className="text-yellow-500">
                                            *
                                        </span>
                                    </label>
                                    <textarea
                                        className={`w-full px-4 py-2 border border-gray-600 rounded-lg text-white placeholder:text-md placeholder-gray-400 focus:outline-none focus:border-yellow-600/50 transition-colors duration-300 resize-none ${errors.message ? 'border-red-500' : ''}`}
                                        name="message"
                                        id="message"
                                        rows={5}
                                        placeholder="Write your message here..."
                                        value={formData.message}
                                        onChange={handleInputChange}
                                    />
                                    {errors.message && (
                                        <div className="text-red-500 text-sm mt-1">
                                            {errors.message}
                                        </div>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-yellow-500 hover:bg-transparent text-black hover:text-yellow-500 border border-yellow-500 font-bold px-5 py-2 rounded transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-4 cursor-pointer"
                                    >
                                        {isSubmitting
                                            ? 'Sending...'
                                            : 'Send Message'}

                                        <BiMailSend className="text-xl" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="col-span-2 bg-[#2d2d39] rounded-lg p-8">
                        <h3 className="text-2xl font-semibold text-white mb-2 leading-[20px]">
                            Contact Information
                        </h3>

                        <div className="w-20 h-[2px] bg-yellow-500 mb-8"></div>

                        <div className="space-y-4">
                            {/* Address */}
                            <div className="bg-[#2d2d35] border border-gray-700 rounded-xl p-5 flex items-start gap-6">
                                <div className="border-2 relative border-gray-700 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                    <div className="absolute top-8 left-0 flex items-center justify-center">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75 animate-ping"></span>
                                        <span className="relative inline-flex h-3 w-3 bg-yellow-500 rounded-full"></span>
                                    </div>
                                    <SlLocationPin className="text-xl font-black" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-lg">
                                        Mirpur, Dhaka, Bangladesh
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        Current Address
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="bg-[#2d2d35] border border-gray-700 rounded-xl p-5 flex items-start gap-6">
                                <div className="border-2 relative border-gray-700 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                    <div className="absolute top-8 left-0 flex items-center justify-center">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75 animate-ping"></span>
                                        <span className="relative inline-flex h-3 w-3 bg-yellow-500 rounded-full"></span>
                                    </div>
                                    <BiMailSend className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-lg">
                                        <a
                                            href={`mailto:${contactInfo.email}`}
                                            className="hover:text-yellow-500 transition-colors duration-300"
                                        >
                                            sagor_islam@icloud.com
                                        </a>
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        Mail Address
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="bg-[#2d2d35] border border-gray-700 rounded-xl p-5 flex items-start gap-6">
                                <div className="border-2 relative border-gray-700 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                    <div className="absolute top-8 left-0 flex items-center justify-center">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75 animate-ping"></span>
                                        <span className="relative inline-flex h-3 w-3 bg-yellow-500 rounded-full"></span>
                                    </div>
                                    <VscCallIncoming className="text-xl font-black" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-lg">
                                        <a
                                            href={`tel:${contactInfo.phone}`}
                                            className="hover:text-yellow-500 transition-colors duration-300"
                                        >
                                            +880 1933-126-160
                                        </a>
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        Text/Call or WhatsApp
                                    </p>
                                </div>
                            </div>

                            {/* Website */}
                            <div className="bg-[#2d2d35] border border-gray-700 rounded-xl p-5 flex items-start gap-6">
                                <div className="border-2 relative border-gray-700 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                    <div className="absolute top-8 left-0 flex items-center justify-center">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75 animate-ping"></span>
                                        <span className="relative inline-flex h-3 w-3 bg-yellow-500 rounded-full"></span>
                                    </div>
                                    <TbWorldShare className="text-xl font-black" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-lg">
                                        <a
                                            href="https://www.sagorislam.dev"
                                            className="hover:text-yellow-500 transition-colors duration-300"
                                        >
                                            www.sagorislam.dev
                                        </a>
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        Portfolio Website
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
