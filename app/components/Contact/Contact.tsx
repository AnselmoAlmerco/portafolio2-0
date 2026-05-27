"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaMapMarkerAlt, FaCode, FaLinux, FaCloud, FaCogs, FaPaperPlane } from "react-icons/fa";

const words = ["Contact", "Get in Touch", "Let's Connect"];
const WHATSAPP_PHONE = "51972805067";

const Contact = () => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://w.app/widget-v1/Zx8qS2.js';
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const textMessage = `Hola Anselmo, te escribo desde tu portafolio.\n\n` +
            `*Nombre:* ${formState.name}\n` +
            `*Correo:* ${formState.email}\n` +
            `*Asunto:* ${formState.subject}\n\n` +
            `*Mensaje:*\n${formState.message}`;
            
        const encodedText = encodeURIComponent(textMessage);
        const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedText}`;
        
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");

        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormState({ name: "", email: "", subject: "", message: "" });
        }, 5000);
    };

    return (
        <section id="contact" className="flex flex-col w-full max-w-[1400px] mx-auto px-10 py-16 gap-12 mt-20 scroll-mt-24 rounded-3xl border border-green-500/20 hover:border-green-500/30 transition-colors relative overflow-hidden bg-black/20 backdrop-blur-sm">

            {/* Header Section */}
            <div className="flex flex-col items-start text-left w-full gap-4 relative z-10">
                <h1 className="text-4xl md:text-3xl lg:text-5xl text-[#ff0000ff] font-extrabold tracking-tight uppercase min-h-[4rem] md:min-h-[3rem] lg:min-h-[4rem]">
                    {text}
                    <span className="animate-pulse text-green-500 font-smold">|</span>
                </h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-300 text-lg leading-relaxed max-w-2xl text-left">
                    Interested in working together, collaborating on innovative projects or discussing technology, servers and software development? Feel free to get in touch.
                </motion.p>
            </div>

            {/* Content Section - 2 Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full relative z-10 mt-4">

                {/* Column 1: Info & Services */}
                <div className="lg:col-span-5 flex flex-col gap-8 text-left">

                    {/* Focus Areas Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="p-6 rounded-2xl bg-black/40 border border-green-500/20 hover:border-green-500/30 transition-colors flex flex-col gap-6">
                        <h3 className="text-xl font-bold text-green-500 uppercase tracking-wider">Focus Areas</h3>

                        <div className="flex flex-col gap-4">
                            {[
                                { name: "Full Stack Development", icon: <FaCode className="text-green-500" /> },
                                { name: "Linux Server Administration", icon: <FaLinux className="text-blue-400" /> },
                                { name: "Cloud & Infrastructure", icon: <FaCloud className="text-purple-400" /> },
                                { name: "Trading Systems & Automation", icon: <FaCogs className="text-orange-400" /> }
                            ].map((service, idx) => (
                                <div key={idx} className="flex items-center gap-4 py-2 border-b border-white/5 last:border-b-0">
                                    <div className="text-2xl p-2 rounded-lg bg-white/5 border border-white/10">
                                        {service.icon}
                                    </div>
                                    <span className="text-gray-200 font-medium text-base">{service.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Direct Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col gap-4">

                        <div className="flex items-center gap-4 text-gray-300">
                            <FaEnvelope className="text-green-500 text-xl" />
                            <a href="mailto:anselmo.almerco@gmail.com" className="hover:text-green-400 transition-colors">
                                anselmo.almerco@gmail.com
                            </a>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300">
                            <FaMapMarkerAlt className="text-red-500 text-xl" />
                            <span>Huancayo, Perú</span>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300">
                            <FaGithub className="text-purple-500 text-xl" />
                            <a href="https://github.com/AnselmoAlmerco" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                                github.com/AnselmoAlmerco
                            </a>
                        </div>

                    </motion.div>
                </div>

                {/* Column 2: Contact Form */}
                <div className="lg:col-span-7">
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col p-8 rounded-2xl bg-black/40 border border-green-500/20 hover:border-green-500/30 transition-colors gap-6 text-left relative">

                        <h3 className="text-xl font-bold text-green-500 uppercase tracking-wider mb-2">Send Message</h3>

                        {isSubmitted && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium">
                                Message sent successfully! I will get back to you soon.
                            </motion.div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-400 text-xs font-bold uppercase tracking-wider" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="px-4 py-3 rounded-lg bg-black/50 border border-white/10 focus:border-green-500/50 text-white text-sm outline-none transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-400 text-xs font-bold uppercase tracking-wider" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="px-4 py-3 rounded-lg bg-black/50 border border-white/10 focus:border-green-500/50 text-white text-sm outline-none transition-colors"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-400 text-xs font-bold uppercase tracking-wider" htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                required
                                value={formState.subject}
                                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                className="px-4 py-3 rounded-lg bg-black/50 border border-white/10 focus:border-green-500/50 text-white text-sm outline-none transition-colors"
                                placeholder="Project Proposal / Collaboration Inquiry"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-400 text-xs font-bold uppercase tracking-wider" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                required
                                rows={5}
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                className="px-4 py-3 rounded-lg bg-black/50 border border-white/10 focus:border-green-500/50 text-white text-sm outline-none transition-colors resize-none"
                                placeholder="Let's build something cool..."
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="flex items-center justify-center gap-2 mt-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 font-bold active:scale-[0.98]">
                            <FaPaperPlane className="text-sm" />
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>

        </section>
    );
};

export default Contact;
