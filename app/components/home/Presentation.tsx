"use client";
import React, { useState, useEffect } from 'react';
import { FaGithub, FaCheckDouble, FaJava, FaPhp, FaJs, FaReact, FaDatabase, FaCloud, FaLinux, FaChartLine, FaPython, FaDocker, FaServer, FaHtml5, FaCss3Alt, FaChartBar, FaBrain, FaShieldAlt, FaCogs, FaNetworkWired, FaRocket } from 'react-icons/fa';
import { BiCode } from 'react-icons/bi';
import { SiNextdotjs, SiMysql, SiMariadb, SiPostgresql, SiMongodb, SiApache, SiNginx, SiTailwindcss } from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';
import { TbApi } from 'react-icons/tb';
import { motion } from 'framer-motion';

const words = ["Anselmo Almerco", "Desarrollador Web", "React Developer"];

const Presentation = () => {
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

            // Más rápido al borrar, velocidad normal al escribir
            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                // Pausa antes de borrar
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === "") {
                // Siguiente palabra
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <>
            <section id="presentation" className="flex flex-col w-full max-w-[1400px] mx-auto px-10 py-16 gap-12 mt-28 scroll-mt-24 rounded-3xl border border-green-500/20 hover:border-green-500/30 transition-colors relative overflow-hidden">
                {/* Eliminated blue glow background */}

                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 relative z-10">
                    <div className="flex-1 flex flex-col items-start text-left">
                        <h1 className="text-4xl md:text-3xl lg:text-5xl text-[#ff0000ff] font-extrabold mb-6 tracking-tight uppercase min-h-[4rem] md:min-h-[3rem] lg:min-h-[4rem]">
                            {text}
                            <span className="animate-pulse text-green-500 font-smold"></span>
                        </h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
                            Desarrollador Full Stack y Administración de Servidores enfocado en crear aplicaciones modernas, escalables y de alto rendimiento. Especializado en React, Next.js, Node.js, PHP, Linux y Cloud Computing. Apasionado por la tecnología, la automatización y la innovación.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap items-center gap-4">
                            <a href="https://github.com/AnselmoAlmerco" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-[#ff0000ff] hover:text-white transition-colors">
                                <FaGithub className="text-xl" />
                                GitHub
                            </a>
                            <a href="#contact" className="px-6 py-3 border border-green-500/20 text-green-500 font-semibold rounded-lg hover:bg-black/10 hover:text-[#ff0000ff] hover:border-[#ff0000ff] transition-colors">
                                Contactame
                            </a>
                        </motion.div>
                    </div>
                    <div className="flex-1 w-full flex justify-center md:justify-end">
                        <div className="relative w-full max-w-md aspect-square md:aspect-[5/4] rounded-xl overflow-hidden shadow-2xl border border-green-500/10">
                            <img
                                src="../img/MrRoot.png"
                                alt="Coding Setup"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>

                {/* Especialidades Animadas */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col w-full max-w-full mt-8 pt-8 border-t border-green-500/20 hover:border-green-500/30 transition-colors relative z-10">
                    <h2 className="text-2xl font-bold text-green-500 mb-6 uppercase tracking-wider flex items-center justify-center gap-3 text-center">
                        Especialidades
                    </h2>
                    <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-3 md:gap-4 max-w-full">
                        {[
                            { name: "Desarrollador Web Full Stack", icon: <BiCode className="text-green-500 text-xl flex-shrink-0 group-hover:text-green-500 transition-colors" />, hoverClass: "hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:text-green-500" },
                            { name: "Backend con Java, PHP y Node.js", icon: <FaServer className="text-green-500 text-xl flex-shrink-0 group-hover:text-purple-500 transition-colors" />, hoverClass: "hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:text-purple-500" },
                            { name: "Arquitecturas MVC y API REST", icon: <TbApi className="text-green-500 text-xl flex-shrink-0 group-hover:text-blue-500 transition-colors" />, hoverClass: "hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:text-blue-500" },
                            { name: "Automatizacion con Python y MetaTrader 5", icon: <FaPython className="text-green-500 text-xl flex-shrink-0 group-hover:text-white transition-colors" />, hoverClass: "hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:text-white" },
                            { name: "Administrador de Servidores", icon: <FaLinux className="text-green-500 text-xl flex-shrink-0 group-hover:text-orange-500 transition-colors" />, hoverClass: "hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:text-orange-500" },
                            { name: "Bases de Datos MySQL, PostgreSQL, MongoDB", icon: <FaDatabase className="text-green-500 text-xl flex-shrink-0 group-hover:text-blue-500 transition-colors" />, hoverClass: "hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:text-blue-500" },
                            { name: "Aplicaciones Modernas con React y Next.js", icon: <FaReact className="text-green-500 text-xl flex-shrink-0 group-hover:text-green-500 transition-colors" />, hoverClass: "hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:text-green-500" },
                            { name: "Cloud Computing (Oracle Cloud, AWS)", icon: <FaCloud className="text-green-500 text-xl flex-shrink-0 group-hover:text-orange-500 transition-colors" />, hoverClass: "hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:text-orange-500" },
                            { name: "Trading Cuantitativo y Analisis financiero", icon: <FaChartLine className="text-green-500 text-xl flex-shrink-0 group-hover:text-[#ff0000ff] transition-colors" />, hoverClass: "hover:border-[#ff0000ff] hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:text-[#ff0000ff]" },
                            { name: "Inteligencia Artificial Aplicada", icon: <FaBrain className="text-green-500 text-xl flex-shrink-0 group-hover:text-white transition-colors" />, hoverClass: "hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:text-white" },
                            { name: "Deploy y configuración de Servidores Apache, NGINX y TomCaT", icon: <FaCogs className="text-green-500 text-xl flex-shrink-0 group-hover:text-blue-500 transition-colors" />, hoverClass: "hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:text-blue-500" }
                        ].map((tech, idx) => (
                            <motion.span
                                key={idx}
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, delay: idx * 0.15, ease: "easeInOut" }}
                                className={`group flex items-center gap-3 md:gap-2 px-5 py-3 md:py-2.5 rounded-xl md:rounded-full bg-transparent border border-green-500/20 text-green-400 font-medium text-sm hover:scale-[1.02] md:hover:scale-105 transition-all duration-300 cursor-pointer w-full md:w-auto ${tech.hoverClass}`}
                            >
                                {tech.icon}
                                <span className="text-left leading-tight">{tech.name}</span>
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </section>
            {/* Skills Section */}
            <section className="w-full max-w-[1400px] mx-auto px-10 py-12 mt-6 flex flex-col rounded-3xl border border-purple-500/20 bg-black/20 backdrop-blur-sm hover:border-purple-500/30 transition-colors duration-500">
                {/* Perfil */}
                <div className="flex flex-col w-full max-w-full">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl font-bold text-[#ff0000ff] bg-clip-text mb-4 uppercase tracking-wider flex items-center gap-3">
                        Actualmente desarrollo proyectos reales utilizando:
                    </motion.h2>
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 mt-4">
                        {/* Frontend */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="col-span-1 lg:col-span-2 flex flex-col p-6 rounded-2xl bg-black/40 border border-green-500/20 hover:border-green-500/30 transition-colors">
                            <h3 className="text-lg font-bold text-green-500 mb-4 uppercase tracking-wider flex items-center gap-3">Frontend</h3>
                            <div className="flex flex-wrap gap-3 max-w-full">
                                {[
                                    { name: "JavaScript", icon: <FaJs className="text-lg" /> },
                                    { name: "React", icon: <FaReact className="text-lg" /> },
                                    { name: "Next.js", icon: <SiNextdotjs className="text-lg" /> },
                                    { name: "Css", icon: <FaCss3Alt className="text-lg" /> },
                                    { name: "Tailwind Css", icon: <SiTailwindcss className="text-lg" /> },
                                    { name: "Html", icon: <FaHtml5 className="text-lg" /> },
                                ].map((tech, idx) => (
                                    <span key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/10 text-green-500 text-sm hover:bg-green-500/10 transition-all duration-300 cursor-default shadow-sm hover:-translate-y-0.5 hover:text-green-400 hover:border-green-500/30">
                                        {tech.icon}
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Backend */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="col-span-1 lg:col-span-2 flex flex-col p-6 rounded-2xl bg-black/40 border border-purple-500/20 hover:border-purple-500/30 transition-colors">
                            <h3 className="text-lg font-bold text-purple-500 mb-4 uppercase tracking-wider flex items-center gap-3">Backend</h3>
                            <div className="flex flex-wrap gap-3 max-w-full">
                                {[
                                    { name: "Java", icon: <FaJava className="text-lg" /> },
                                    { name: "PHP", icon: <FaPhp className="text-lg" /> },
                                    { name: "JSP", icon: <FaJs className="text-lg" /> },
                                    { name: "APIs REST", icon: <TbApi className="text-lg" /> },
                                ].map((tech, idx) => (
                                    <span key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/10 text-purple-500 text-sm hover:bg-purple-500/10 transition-all duration-300 cursor-default shadow-sm hover:-translate-y-0.5 hover:text-purple-400 hover:border-purple-500/30">
                                        {tech.icon}
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Base de Datos */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="col-span-1 lg:col-span-2 flex flex-col p-6 rounded-2xl bg-black/40 border border-blue-500/20 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-lg font-bold text-blue-500 mb-4 uppercase tracking-wider flex items-center gap-3">Base de Datos</h3>
                            <div className="flex flex-wrap gap-3 max-w-full">
                                {[
                                    { name: "MySQL", icon: <SiMysql className="text-lg" /> },
                                    { name: "MariaDB", icon: <SiMariadb className="text-lg" /> },
                                    { name: "SQL Server", icon: <DiMsqlServer className="text-lg" /> },
                                    { name: "PostgreSQL", icon: <SiPostgresql className="text-lg" /> },
                                    { name: "MongoDB", icon: <SiMongodb className="text-lg" /> },
                                ].map((tech, idx) => (
                                    <span key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/10 text-blue-500 text-sm hover:bg-blue-500/10 transition-all duration-300 cursor-default shadow-sm hover:-translate-y-0.5 hover:text-blue-400 hover:border-blue-500/30">
                                        {tech.icon}
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Infraestructura y DevOps */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="col-span-1 lg:col-span-3 flex flex-col p-6 rounded-2xl bg-black/40 border border-orange-500/20 hover:border-orange-500/30 transition-colors">
                            <h3 className="text-lg font-bold text-orange-500 mb-4 uppercase tracking-wider flex items-center gap-3">Infraestructura y DevOps</h3>
                            <div className="flex flex-wrap gap-3 max-w-full">
                                {[
                                    { name: "Linux", icon: <FaLinux className="text-lg" /> },
                                    { name: "Apache", icon: <SiApache className="text-lg" /> },
                                    { name: "NGINX", icon: <SiNginx className="text-lg" /> },
                                    { name: "Git", icon: <FaGithub className="text-lg" /> },
                                    { name: "GitHub", icon: <FaGithub className="text-lg" /> },
                                    { name: "Docker", icon: <FaDocker className="text-lg" /> },
                                    { name: "Oracle Cloud", icon: <FaCloud className="text-lg" /> },
                                    { name: "Configuracion de Servidores", icon: <FaServer className="text-lg" /> },
                                ].map((tech, idx) => (
                                    <span key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/10 text-orange-500 text-sm hover:bg-orange-500/10 transition-all duration-300 cursor-default shadow-sm hover:-translate-y-0.5 hover:text-orange-400 hover:border-orange-500/30">
                                        {tech.icon}
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Automatizacion */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="col-span-1 lg:col-span-3 flex flex-col p-6 rounded-2xl bg-black/40 border border-white/20 hover:border-white/30 transition-colors">
                            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-3">Automatizacion</h3>
                            <div className="flex flex-wrap gap-3 max-w-full">
                                {[
                                    { name: "Python", icon: <FaPython className="text-lg" /> },
                                    { name: "MetaTrader 5", icon: <FaChartLine className="text-lg" /> },
                                    { name: "Análisis Cuantitativo", icon: <FaChartBar className="text-lg" /> },
                                    { name: "Inteligencia Artificial", icon: <FaBrain className="text-lg" /> },
                                    { name: "Gestión de Riesgo", icon: <FaShieldAlt className="text-lg" /> },
                                    { name: "Automatización de Procesos", icon: <FaCogs className="text-lg" /> },
                                ].map((tech, idx) => (
                                    <span key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition-all duration-300 cursor-default shadow-sm hover:-translate-y-0.5 hover:border-white/40">
                                        {tech.icon}
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Perfil Profesional */}
            <section className="w-full max-w-[1400px] mx-auto px-10 py-12 mt-6 flex flex-col rounded-3xl border border-blue-500/20 bg-black/20 backdrop-blur-sm hover:border-blue-500/30 transition-colors duration-500">
                <div className="flex-1 flex flex-col items-start text-left">
                    <motion.h1
                        animate={{
                            color: ["#000", "#ff0000ff", "#000"]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="text-4xl md:text-3xl lg:text-5xl text-red-500 font-extrabold mb-6 tracking-tight uppercase min-h-[4rem] md:min-h-[3rem] lg:min-h-[4rem]"
                    >
                        Perfil Profesional
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            className="inline-block ml-2 text-red-500 font-bold"
                        >
                            _
                        </motion.span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-300 text-lg leading-relaxed mb-8 max-w-full">
                        Me considero una persona analítica, estratégica y orientada a resultados. Disfruto resolver problemas complejos mediante tecnología, automatización y pensamiento lógico.
                    </motion.p>
                    <motion.h4
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="text-xl font-bold text-green-500 bg-clip-text mb-4 uppercase tracking-wider flex items-center gap-3">
                        Actualmete continúo fortaleciendo mis conoimientos en:
                    </motion.h4>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="col-span-1 lg:col-span-3 flex flex-col p-6 rounded-2xl bg-black/40 border border-white/20 hover:border-white/30 transition-colors">
                        <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-3">Automatizacion</h3>
                        <div className="flex flex-wrap gap-3 max-w-full">
                            {[
                                { name: "Inteligencia Artificial", icon: <FaBrain className="text-lg" /> },
                                { name: "Ciberseguridad", icon: <FaShieldAlt className="text-lg" /> },
                                { name: "Big Data", icon: <FaDatabase className="text-lg" /> },
                                { name: "Cloud Computing", icon: <FaCloud className="text-lg" /> },
                                { name: "Trading Algorítmico", icon: <FaChartLine className="text-lg" /> },
                                { name: "Arquitecturas escalables", icon: <FaNetworkWired className="text-lg" /> },
                                { name: "Sistemas de alto rendimiento", icon: <FaRocket className="text-lg" /> },
                            ].map((tech, idx) => (
                                <span key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition-all duration-300 cursor-default shadow-sm hover:-translate-y-0.5 hover:border-white/40">
                                    {tech.icon}
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

        </>
    );
};

export default Presentation;