"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPhp, FaJs, FaReact, FaDatabase, FaLinux, FaChartLine, FaPython, FaServer, FaCogs, FaBitcoin } from 'react-icons/fa';
import { SiNextdotjs, SiMysql, SiPostgresql, SiApache, SiTailwindcss, SiSpringboot, SiUbuntu } from 'react-icons/si';

const words = ["Proyectos principales"];

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
            <section id="projects" className="flex flex-col w-full max-w-[1400px] mx-auto px-10 py-16 gap-12 mt-20 scroll-mt-24 rounded-3xl border border-green-500/20 hover:border-green-500/30 transition-colors relative overflow-hidden">
                {/* Eliminated blue glow background */}

                <div className="flex flex-col items-start text-left w-full gap-8 relative z-10">
                    <h1 className="text-4xl md:text-3xl lg:text-5xl text-[#ff0000ff] font-extrabold mb-2 tracking-tight uppercase min-h-[4rem] md:min-h-[3rem] lg:min-h-[4rem]">
                        {text}
                        <span className="animate-pulse text-green-500 font-smold"></span>
                    </h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-300 text-lg leading-relaxed mb-6 max-w-full">
                        Desarrollamos soluciones modernas, escalables y de alto rendimiento centradas en el desarrollo de software, la infraestructura de servidores y los sistemas inteligentes.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 w-full relative z-10">
                    {/* AcademiaTradingPro */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="col-span-1 lg:col-span-2 flex flex-col p-6 rounded-2xl bg-black/40 border border-green-500/20 hover:border-green-500/30 transition-colors">
                        <h3 className="text-lg font-bold text-green-500 mb-4 uppercase tracking-wider flex items-center gap-3">AcademiaTradingPro</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow text-left">
                            Plataforma profesional de formación en trading desarrollada con Java, Spring Boot, JSP y MySQL.
                            Incluye autenticación de usuarios, gestión de cursos, control de acceso por roles, clases en vivo y simulador de trading.
                        </p>
                        <div className="flex flex-wrap gap-3 max-w-full">
                            {[
                                { name: "Java", icon: <FaJava className="text-lg" /> },
                                { name: "Spring Boot", icon: <SiSpringboot className="text-lg" /> },
                                { name: "JSP", icon: <FaJs className="text-lg" /> },
                                { name: "MySQL", icon: <SiMysql className="text-lg" /> }
                            ].map((tech, idx) => (
                                <span key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/10 text-green-500 text-sm hover:bg-green-500/10 transition-all duration-300 cursor-default shadow-sm hover:-translate-y-0.5 hover:text-green-400 hover:border-green-500/30">
                                    {tech.icon}
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Carnicería César */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="col-span-1 lg:col-span-2 flex flex-col p-6 rounded-2xl bg-black/40 border border-orange-500/20 hover:border-orange-500/30 transition-colors">
                        <h3 className="text-lg font-bold text-orange-500 mb-4 uppercase tracking-wider flex items-center gap-3">Carnicería</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow text-left">
                            Sistema web de ventas online desarrollado con PHP, JavaScript y MySQL.
                            Cuenta con catálogo dinámico, gestión de productos, simulación de compras, administración de clientes y módulo de ventas.
                        </p>
                        <div className="flex flex-wrap gap-3 max-w-full">
                            {[
                                { name: "PHP", icon: <FaPhp className="text-lg" /> },
                                { name: "JavaScript", icon: <FaJs className="text-lg" /> },
                                { name: "MySQL", icon: <SiMysql className="text-lg" /> }
                            ].map((tech, idx) => (
                                <span key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/10 text-orange-500 text-sm hover:bg-orange-500/10 transition-all duration-300 cursor-default shadow-sm hover:-translate-y-0.5 hover:text-orange-400 hover:border-orange-500/30">
                                    {tech.icon}
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Sistema de Citas Médicas */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="col-span-1 lg:col-span-2 flex flex-col p-6 rounded-2xl bg-black/40 border border-teal-500/20 hover:border-teal-500/30 transition-colors">
                        <h3 className="text-lg font-bold text-teal-500 mb-4 uppercase tracking-wider flex items-center gap-3">Sistema de Citas Médicas</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow text-left">
                            Aplicación administrativa desarrollada con Spring Boot y MySQL enfocada en la gestión de usuarios, autenticación segura y administración médica.
                        </p>
                        <div className="flex flex-wrap gap-3 max-w-full">
                            {[
                                { name: "Spring Boot", icon: <SiSpringboot className="text-lg" /> },
                                { name: "MySQL", icon: <SiMysql className="text-lg" /> }
                            ].map((tech, idx) => (
                                <span key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/10 text-teal-500 text-sm hover:bg-teal-500/10 transition-all duration-300 cursor-default shadow-sm hover:-translate-y-0.5 hover:text-teal-400 hover:border-teal-500/30">
                                    {tech.icon}
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Portafolio Premium Next.js */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="col-span-1 lg:col-span-2 flex flex-col p-6 rounded-2xl bg-black/40 border border-blue-500/20 hover:border-blue-500/30 transition-colors">
                        <h3 className="text-lg font-bold text-blue-500 mb-4 uppercase tracking-wider flex items-center gap-3">Portafolio Premium Next.js</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow text-left">
                            Sitio web profesional desarrollado con Next.js, React y Tailwind CSS.
                            Diseñado con enfoque moderno, minimalista y responsive para mostrar proyectos, habilidades y experiencia profesional.
                        </p>
                        <div className="flex flex-wrap gap-3 max-w-full">
                            {[
                                { name: "Next.js", icon: <SiNextdotjs className="text-lg" /> },
                                { name: "React", icon: <FaReact className="text-lg" /> },
                                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-lg" /> }
                            ].map((tech, idx) => (
                                <span key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/10 text-blue-500 text-sm hover:bg-blue-500/10 transition-all duration-300 cursor-default shadow-sm hover:-translate-y-0.5 hover:text-blue-400 hover:border-blue-500/30">
                                    {tech.icon}
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Trading Analysis Systems */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="col-span-1 lg:col-span-2 flex flex-col p-6 rounded-2xl bg-black/40 border border-yellow-500/20 hover:border-yellow-500/30 transition-colors">
                        <h3 className="text-lg font-bold text-yellow-500 mb-4 uppercase tracking-wider flex items-center gap-3">Trading Analysis Systems</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow text-left">
                            Desarrollo de herramientas de análisis financiero y automatización para mercados como Forex, Oro, Bitcoin y S&P 500 utilizando Python y MetaTrader 5.
                        </p>
                        <div className="flex flex-wrap gap-3 max-w-full">
                            {[
                                { name: "Python", icon: <FaPython className="text-lg" /> },
                                { name: "MetaTrader 5", icon: <FaChartLine className="text-lg" /> },
                                { name: "Forex", icon: <FaChartLine className="text-lg" /> },
                                { name: "Bitcoin", icon: <FaBitcoin className="text-lg" /> }
                            ].map((tech, idx) => (
                                <span key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/10 text-yellow-500 text-sm hover:bg-yellow-500/10 transition-all duration-300 cursor-default shadow-sm hover:-translate-y-0.5 hover:text-yellow-400 hover:border-yellow-500/30">
                                    {tech.icon}
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Administración de Servidores Linux */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="col-span-1 lg:col-span-2 flex flex-col p-6 rounded-2xl bg-black/40 border border-red-500/20 hover:border-red-500/30 transition-colors">
                        <h3 className="text-lg font-bold text-red-500 mb-4 uppercase tracking-wider flex items-center gap-3">Administración de Servidores</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow text-left">
                            Configuración y despliegue de servidores Ubuntu Server, Apache y entornos de desarrollo para aplicaciones web modernas y sistemas empresariales.
                        </p>
                        <div className="flex flex-wrap gap-3 max-w-full">
                            {[
                                { name: "Ubuntu Server", icon: <SiUbuntu className="text-lg" /> },
                                { name: "Apache", icon: <SiApache className="text-lg" /> },
                                { name: "Linux", icon: <FaLinux className="text-lg" /> },
                                { name: "DevOps", icon: <FaCogs className="text-lg" /> }
                            ].map((tech, idx) => (
                                <span key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/10 text-red-500 text-sm hover:bg-red-500/10 transition-all duration-300 cursor-default shadow-sm hover:-translate-y-0.5 hover:text-red-400 hover:border-red-500/30">
                                    {tech.icon}
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* EduGuard Security System */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="col-span-1 lg:col-span-2 flex flex-col p-6 rounded-2xl bg-black/40 border border-purple-500/20 hover:border-purple-500/30 transition-colors">
                        <h3 className="text-lg font-bold text-purple-500 mb-4 uppercase tracking-wider flex items-center gap-3">EduGuard Security System</h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow text-left">
                            Diseño de base de datos y arquitectura backend para un sistema de seguridad escolar utilizando PostgreSQL y modelado relacional advanced.
                        </p>
                        <div className="flex flex-wrap gap-3 max-w-full">
                            {[
                                { name: "PostgreSQL", icon: <SiPostgresql className="text-lg" /> },
                                { name: "Relational Model", icon: <FaDatabase className="text-lg" /> },
                                { name: "Backend", icon: <FaServer className="text-lg" /> }
                            ].map((tech, idx) => (
                                <span key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/10 text-purple-500 text-sm hover:bg-purple-500/10 transition-all duration-300 cursor-default shadow-sm hover:-translate-y-0.5 hover:text-purple-400 hover:border-purple-500/30">
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