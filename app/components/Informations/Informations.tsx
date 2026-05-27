"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaServer, FaBrain, FaRocket } from "react-icons/fa";

const words = ["Mi Información", "Sobre Mí", "Perfil Profesional"];

const Informations = () => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

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

    return (
        <section id="informations" className="flex flex-col w-full max-w-[1400px] mx-auto px-10 py-16 gap-12 mt-20 scroll-mt-24 rounded-3xl border border-green-500/20 hover:border-green-500/30 transition-colors relative overflow-hidden bg-black/20 backdrop-blur-sm">
            
            {/* Header Section */}
            <div className="flex flex-col items-start text-left w-full gap-8 relative z-10">
                <h1 className="text-4xl md:text-3xl lg:text-5xl text-[#ff0000ff] font-extrabold mb-2 tracking-tight uppercase min-h-[4rem] md:min-h-[3rem] lg:min-h-[4rem]">
                    {text}
                    <span className="animate-pulse text-green-500 font-smold">|</span>
                </h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-300 text-lg leading-relaxed mb-6 max-w-full">
                    Detalles sobre mi enfoque profesional, trayectoria de desarrollo de software, pasiones tecnológicas e intereses actuales en el sector de la ingeniería.
                </motion.p>
            </div>

            {/* Information Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full relative z-10">
                
                {/* Card 1: Especialidad */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-col p-8 rounded-2xl bg-black/40 border border-green-500/20 hover:border-green-500/30 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4 text-green-500">
                        <FaGraduationCap className="text-3xl" />
                        <h3 className="text-xl font-bold uppercase tracking-wider">Especialización</h3>
                    </div>
                    <p className="text-gray-300 text-base leading-relaxed text-left flex-grow">
                        Estudiante de Ingeniería de Software especializado en Desarrollo Full Stack, Administración de Servidores y Tecnología Financiera.
                    </p>
                </motion.div>

                {/* Card 2: Desarrollo y Servidores */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col p-8 rounded-2xl bg-black/40 border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4 text-blue-500">
                        <FaServer className="text-3xl" />
                        <h3 className="text-xl font-bold uppercase tracking-wider">Desarrollo y Servidores</h3>
                    </div>
                    <p className="text-gray-300 text-base leading-relaxed text-left flex-grow">
                        Experiencia en el desarrollo de aplicaciones web modernas con React, Next.js, Spring Boot, PHP y MySQL, combinada con administración de servidores Linux e implementación de infraestructura en la nube.
                    </p>
                </motion.div>

                {/* Card 3: Pasiones Tecnológicas */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col p-8 rounded-2xl bg-black/40 border border-orange-500/20 hover:border-orange-500/30 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4 text-orange-500">
                        <FaBrain className="text-3xl" />
                        <h3 className="text-xl font-bold uppercase tracking-wider">Áreas de Interés</h3>
                    </div>
                    <p className="text-gray-300 text-base leading-relaxed text-left flex-grow">
                        Apasionado por la ciberseguridad, la automatización, la inteligencia artificial y los sistemas de trading cuantitativo.
                    </p>
                </motion.div>

                {/* Card 4: Enfoque y Visión */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col p-8 rounded-2xl bg-black/40 border border-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4 text-purple-500">
                        <FaRocket className="text-3xl" />
                        <h3 className="text-xl font-bold uppercase tracking-wider">Enfoque y Visión</h3>
                    </div>
                    <p className="text-gray-300 text-base leading-relaxed text-left flex-grow">
                        Actualmente, desarrollo soluciones digitales escalables que integran ingeniería de software, computación en la nube y análisis financiero inteligente.
                    </p>
                </motion.div>

            </div>

        </section>
    );
};

export default Informations;
