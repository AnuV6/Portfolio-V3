"use client";

import { useState, ChangeEvent, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [errors, setErrors] = useState({
        user_name: "",
        user_email: "",
        message: "",
    });
    const [charCount, setCharCount] = useState(0);
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Update character count for message
        if (name === "message") {
            setCharCount(value.length);
        }

        // Clear error for this field
        if (errors[name as keyof typeof errors]) {
            setErrors({
                ...errors,
                [name]: "",
            });
        }
    };

    const validateForm = () => {
        const newErrors = {
            user_name: "",
            user_email: "",
            message: "",
        };

        let isValid = true;

        if (!formData.user_name.trim()) {
            newErrors.user_name = "Name is required";
            isValid = false;
        } else if (formData.user_name.trim().length < 2) {
            newErrors.user_name = "Name must be at least 2 characters";
            isValid = false;
        }

        if (!formData.user_email.trim()) {
            newErrors.user_email = "Email is required";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
            newErrors.user_email = "Please enter a valid email";
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
            isValid = false;
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleRecaptchaChange = (token: string | null) => {
        setRecaptchaToken(token);
    };

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        if (!recaptchaToken) {
            toast.error("Please complete the reCAPTCHA verification ⚠️");
            return;
        }

        setLoading(true);

        const templateParams = {
            name: formData.user_name,
            email: formData.user_email,
            message: formData.message,
        };


        emailjs
            .send(
                "service_ezoya0g",
                "template_cs7j7xd",
                templateParams,
                "4_mYOXiLFhfgP63-V"
            )
            .then(
                () => {
                    setShowSuccess(true);
                    setFormData({ user_name: "", user_email: "", message: "" });
                    setCharCount(0);
                    setRecaptchaToken(null);
                    recaptchaRef.current?.reset();
                    setTimeout(() => setShowSuccess(false), 5000);
                },
                () => {
                    toast.error("Failed to send message. Please try again. ❌");
                    setRecaptchaToken(null);
                    recaptchaRef.current?.reset();
                }
            )
            .finally(() => setLoading(false));
    };

    return (
        <section className="row relative" aria-labelledby="contact-heading" id="contact">
            <div className="col-lg-12">
                <h2 id="contact-heading" className="mb-10 relative flex items-end justify-between border-b border-white/10 pb-5 after:absolute after:bottom-[-1px] after:left-0 after:w-24 after:h-[2px] after:bg-primary after:shadow-neon-cyan">
                    <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">Contact Me</span>
                    <i className="fas fa-paper-plane text-2xl text-gray-700" aria-hidden="true" />
                </h2>

                {/* Email Section */}
                <div className="mb-8 text-center md:text-left">
                    <p className="text-gray-400 text-base mb-3">
                        Send me a message through the form below or reach out directly:
                    </p>
                    <a
                        href="mailto:contact@anupa.live"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-primary/10 border-2 border-primary/30 text-primary hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 group"
                    >
                        <i className="fas fa-envelope text-lg group-hover:scale-110 transition-transform" />
                        <span className="font-semibold">contact@anupa.live</span>
                        <i className="fas fa-external-link-alt text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="glass-card p-6 md:p-10 rounded-2xl relative overflow-hidden shadow-glass" data-scroll data-scroll-offset={40}>
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/20 to-transparent rounded-tr-2xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/10 to-transparent rounded-bl-2xl pointer-events-none" />

                    <form onSubmit={sendEmail} className="relative z-10 space-y-6" noValidate>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Your Name *"
                                    value={formData.user_name}
                                    onChange={handleChange}
                                    aria-label="Your name"
                                    aria-invalid={!!errors.user_name}
                                    aria-describedby={errors.user_name ? "name-error" : undefined}
                                    className={`w-full bg-surface/50 backdrop-blur-sm border-2 rounded-xl px-5 py-3.5 text-white focus:outline-none transition-all duration-300 placeholder-gray-500 ${errors.user_name
                                        ? 'border-secondary/50 focus:border-secondary focus:shadow-neon-pink'
                                        : 'border-white/10 focus:border-primary focus:shadow-neon-cyan hover:border-white/20'
                                        }`}
                                />
                                {errors.user_name && (
                                    <p id="name-error" className="text-secondary text-sm mt-1.5 flex items-center gap-1.5 pl-1">
                                        <i className="fas fa-exclamation-circle" />
                                        {errors.user_name}
                                    </p>
                                )}
                            </div>
                            <div className="space-y-1">
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Your Email *"
                                    value={formData.user_email}
                                    onChange={handleChange}
                                    aria-label="Your email"
                                    aria-invalid={!!errors.user_email}
                                    aria-describedby={errors.user_email ? "email-error" : undefined}
                                    className={`w-full bg-surface/50 backdrop-blur-sm border-2 rounded-xl px-5 py-3.5 text-white focus:outline-none transition-all duration-300 placeholder-gray-500 ${errors.user_email
                                        ? 'border-secondary/50 focus:border-secondary focus:shadow-neon-pink'
                                        : 'border-white/10 focus:border-primary focus:shadow-neon-cyan hover:border-white/20'
                                        }`}
                                />
                                {errors.user_email && (
                                    <p id="email-error" className="text-secondary text-sm mt-1.5 flex items-center gap-1.5 pl-1">
                                        <i className="fas fa-exclamation-circle" />
                                        {errors.user_email}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="space-y-1">
                            <textarea
                                rows={7}
                                name="message"
                                placeholder="Your Message *"
                                value={formData.message}
                                onChange={handleChange}
                                maxLength={1000}
                                aria-label="Your message"
                                aria-invalid={!!errors.message}
                                aria-describedby={errors.message ? "message-error" : "message-hint"}
                                className={`w-full bg-surface/50 backdrop-blur-sm border-2 rounded-xl px-5 py-3.5 text-white focus:outline-none transition-all duration-300 placeholder-gray-500 resize-none ${errors.message
                                    ? 'border-secondary/50 focus:border-secondary focus:shadow-neon-pink'
                                    : 'border-white/10 focus:border-primary focus:shadow-neon-cyan hover:border-white/20'
                                    }`}
                            />
                            <div className="flex justify-between items-center mt-2 px-1">
                                {errors.message ? (
                                    <p id="message-error" className="text-secondary text-sm flex items-center gap-1.5">
                                        <i className="fas fa-exclamation-circle" />
                                        {errors.message}
                                    </p>
                                ) : (
                                    <p id="message-hint" className="text-gray-500 text-sm">Minimum 10 characters</p>
                                )}
                                <span className={`text-sm font-mono ${charCount > 900 ? 'text-secondary' : 'text-gray-500'}`}>
                                    {charCount}/1000
                                </span>
                            </div>
                        </div>



                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-2">
                            <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-auto">
                                {/* reCAPTCHA - Mobile optimized */}
                                <div className="w-full flex justify-center md:justify-start">
                                    <div className="transform scale-[0.85] sm:scale-90 md:scale-100 origin-center md:origin-left">
                                        <ReCAPTCHA
                                            ref={recaptchaRef}
                                            sitekey="6LdZijUsAAAAAJywmY_KABHEYcRW_V9shKFSND6Q"
                                            onChange={handleRecaptchaChange}
                                            theme="dark"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full md:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/50 text-primary font-bold uppercase tracking-wider hover:bg-primary hover:text-black hover:border-primary hover:shadow-neon-cyan transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                                    disabled={loading}
                                    aria-live="polite"
                                    aria-busy={loading}
                                >
                                    {loading ? (
                                        <>
                                            <span className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" aria-hidden="true"></span>
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <i className="fas fa-paper-plane group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                        </>
                                    )}
                                </button>
                            </div>

                            <div className="text-gray-400 text-sm text-center md:text-right italic flex items-center gap-2">
                                <i className="fas fa-lock text-primary" />
                                I promise the confidentiality of your personal information
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Success Modal Overlay */}
            {showSuccess && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/60 animate-fade-in"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                    onClick={() => setShowSuccess(false)}
                >
                    <div
                        className="glass-card p-10 md:p-12 rounded-2xl flex flex-col items-center text-center shadow-2xl max-w-md mx-4 transform scale-100 animate-bounce-in border-2 border-primary/50 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setShowSuccess(false)}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                            aria-label="Close success message"
                        >
                            <i className="fas fa-times" />
                        </button>

                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-6 shadow-neon-cyan relative">
                            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                            <i className="fas fa-check text-5xl text-primary relative z-10" aria-hidden="true" />
                        </div>
                        <h4 className="text-3xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
                            Message Sent Successfully!
                        </h4>
                        <p className="text-gray-300 mb-8 text-base leading-relaxed">
                            Thank you for reaching out! I'll get back to you as soon as possible.
                        </p>
                        <button
                            onClick={() => setShowSuccess(false)}
                            className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/50 text-primary font-semibold hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 flex items-center gap-2 group"
                            aria-label="Close success message"
                        >
                            Got it
                            <i className="fas fa-check-circle group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>
            )}

            {/* Toast Notifications (Backup for errors) */}
            <ToastContainer position="top-right" autoClose={3000} theme="dark" />
        </section>
    );
};

export default ContactForm;
