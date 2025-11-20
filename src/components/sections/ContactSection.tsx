import React, { useState } from "react";
import {
    contactInfo,
    contactFormInitialData,
    type ContactFormData,
} from "../../data/contact";
import { BiMailSend } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { VscCallIncoming } from "react-icons/vsc";
import { TbWorldShare, TbMailCheck } from "react-icons/tb";

const ContactSection = () => {
    const [formData, setFormData] = useState<ContactFormData>(
        contactFormInitialData,
    );
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [errors, setErrors] = useState<Partial<ContactFormData>>({});

    // Handle input changes
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name as keyof ContactFormData]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    // Validate form before submit
    const validateForm = (): boolean => {
        const newErrors: Partial<ContactFormData> = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        setStatusMessage(null);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Failed to send message");
            }

            setFormData(contactFormInitialData);
            setSuccess(true);
            setStatusMessage("Thank you! Your message has been sent.");
            setTimeout(() => {
                setSuccess(false);
                setStatusMessage(null);
            }, 10000);
        } catch (error: unknown) {
            console.error("Form submission error:", error);
            const errorMessage =
                error instanceof Error
                    ? error.message
                    : "Failed to send message. Please try again.";
            setStatusMessage(errorMessage);
            setSuccess(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="getInTouch" className="scroll-mt-16 py-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get In Touch{" "}
                        <span className="text-yellow-500 animate-pulse">!</span>
                    </h2>
                    <p className="text-white opacity-60 text-md max-w-md mx-auto">
                        I'm always open to discussing new projects, creative
                        ideas or opportunities. Feel free to reach out.
                    </p>
                </div>

                <div className="grid grid-cols-5 gap-8">
                    {/* Contact Form */}
                    <div className="col-span-3">
                        <div className="bg-[#2d2d39] rounded-lg p-8">
                            <h3 className="text-2xl font-semibold text-white mb-2">
                                Send a Message
                            </h3>

                            <div className="w-20 h-[2px] bg-yellow-500 mb-8"></div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name + Email */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <InputField
                                        label="Name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        error={errors.name}
                                        placeholder="e.g. Amin Muhammad"
                                    />
                                    <InputField
                                        label="Email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        error={errors.email}
                                        placeholder="e.g. amin@example.com"
                                    />
                                </div>

                                {/* Subject */}
                                <InputField
                                    label="Subject"
                                    name="subject"
                                    type="text"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    error={errors.subject}
                                    placeholder="Regarding your project..."
                                />

                                {/* Message */}
                                <div>
                                    <label className="block text-gray-300 text-sm mb-1">
                                        Message{" "}
                                        <span className="text-yellow-500">
                                            *
                                        </span>
                                    </label>
                                    <textarea
                                        className={`w-full px-4 py-2 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-600/50 resize-none ${
                                            errors.message
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                        name="message"
                                        rows={5}
                                        placeholder="Write your message here..."
                                        value={formData.message}
                                        onChange={handleInputChange}
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                {/* Submit */}
                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-yellow-500 hover:bg-transparent text-black hover:text-yellow-500 border border-yellow-500 font-bold px-5 py-2 rounded transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-4 cursor-pointer"
                                    >
                                        {isSubmitting
                                            ? "Sending..."
                                            : success
                                              ? "Sent!"
                                              : "Send Message"}
                                        {isSubmitting ? (
                                            <BiMailSend className="text-xl" />
                                        ) : success ? (
                                            <TbMailCheck className="text-xl" />
                                        ) : (
                                            <BiMailSend className="text-xl" />
                                        )}
                                    </button>

                                    {statusMessage && (
                                        <p
                                            className={`mt-2 font-bold ${
                                                success
                                                    ? "text-green-500"
                                                    : "text-red-500"
                                            }`}
                                        >
                                            {statusMessage}
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-2 bg-[#2d2d39] rounded-lg p-8">
                        <h3 className="text-2xl font-semibold text-white mb-2">
                            Contact Information
                        </h3>

                        <div className="w-20 h-[2px] bg-yellow-500 mb-8"></div>

                        <div className="space-y-4">
                            <InfoBox
                                icon={
                                    <SlLocationPin className="text-xl font-black" />
                                }
                                title="Mirpur, Dhaka, Bangladesh"
                                subtitle="Current Address"
                            />
                            <InfoBox
                                icon={<BiMailSend className="text-xl" />}
                                title={
                                    <a
                                        href={`mailto:${contactInfo.email}`}
                                        className="hover:text-yellow-500 transition-colors duration-300"
                                    >
                                        {contactInfo.email}
                                    </a>
                                }
                                subtitle="Mail Address"
                            />
                            <InfoBox
                                icon={
                                    <VscCallIncoming className="text-xl font-black" />
                                }
                                title={
                                    <a
                                        href={`tel:${contactInfo.phone}`}
                                        className="hover:text-yellow-500 transition-colors duration-300"
                                    >
                                        {contactInfo.phone}
                                    </a>
                                }
                                subtitle="Text/Call or WhatsApp"
                            />
                            <InfoBox
                                icon={
                                    <TbWorldShare className="text-xl font-black" />
                                }
                                title={
                                    <a
                                        href="https://www.sagorislam.dev"
                                        className="hover:text-yellow-500 transition-colors duration-300"
                                    >
                                        www.sagorislam.dev
                                    </a>
                                }
                                subtitle="Portfolio Website"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Reusable Input Component
const InputField = ({
    label,
    name,
    type,
    value,
    onChange,
    error,
    placeholder,
}: {
    label: string;
    name: string;
    type: string;
    value: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void;
    error?: string;
    placeholder?: string;
}) => (
    <div>
        <label className="block text-gray-300 text-sm mb-1">
            {label} <span className="text-yellow-500">*</span>
        </label>
        <input
            type={type}
            className={`w-full px-4 py-2 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-600/50 ${
                error ? "border-red-500" : ""
            }`}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
);

// Reusable InfoBox
const InfoBox = ({
    icon,
    title,
    subtitle,
}: {
    icon: React.ReactNode;
    title: React.ReactNode;
    subtitle: string;
}) => (
    <div className="bg-[#2d2d35] border border-gray-700 rounded-xl p-5 flex items-start gap-6">
        <div className="border-2 relative border-gray-700 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
            <div className="absolute top-8 left-0 flex items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-3 w-3 bg-yellow-500 rounded-full"></span>
            </div>
            {icon}
        </div>
        <div>
            <h4 className="text-white font-semibold text-lg">{title}</h4>
            <p className="text-gray-400 text-sm">{subtitle}</p>
        </div>
    </div>
);

export default ContactSection;
