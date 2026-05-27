"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPrint, FaEnvelope, FaGithub, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaWrench, FaCheck, FaPhoneAlt, FaCode } from "react-icons/fa";

const CV = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div id="cv" className="w-full max-w-[1200px] mx-auto px-4 md:px-10 py-10 flex flex-col gap-8 relative z-10 mt-20 scroll-mt-24 print:px-0 print:py-0 print:m-0 print:max-w-full">
            
            {/* Top Action Button - Hidden in Print */}
            <div className="flex justify-end no-print">
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 shadow-lg active:scale-95"
                >
                    <FaPrint className="text-lg" />
                    Print / Save as PDF
                </button>
            </div>

            {/* Resume Page Container */}
            <div className="flex flex-col gap-10 p-10 md:p-16 rounded-3xl border border-green-500/20 bg-black/40 backdrop-blur-sm print:bg-white print:text-black print:border-none print:p-0 print:shadow-none shadow-2xl">
                
                {/* Embedded Print Styling */}
                <style dangerouslySetInnerHTML={{ __html: `
                    @media print {
                        body {
                            background: white !important;
                            color: black !important;
                        }
                        header, nav, footer, .no-print {
                            display: none !important;
                        }
                        .print\\:text-black {
                            color: black !important;
                        }
                        .print\\:border-gray-300 {
                            border-color: #d1d5db !important;
                        }
                        .print\\:bg-gray-100 {
                            background-color: #f3f4f6 !important;
                        }
                    }
                `}} />

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8 print:border-gray-300 print:pb-6 print:text-black">
                    <div className="flex flex-col gap-2 text-left">
                        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight print:text-black print:text-4xl">
                            Anselmo Almerco
                        </h1>
                        <h2 className="text-lg md:text-xl font-bold text-green-500 uppercase tracking-wider print:text-gray-700">
                            Full Stack Developer | Server Administrator | Trading Systems Analyst
                        </h2>
                    </div>

                    {/* Contact Details */}
                    <div className="flex flex-col gap-2 text-left md:text-right text-gray-300 text-sm print:text-black">
                        <div className="flex items-center md:justify-end gap-2">
                            <FaEnvelope className="text-green-500 print:text-gray-600" />
                            <a href="mailto:anselmo.almerco@gmail.com" className="hover:text-green-400 print:hover:text-black">
                                anselmo.almerco@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center md:justify-end gap-2">
                            <FaMapMarkerAlt className="text-red-500 print:text-gray-600" />
                            <span>Lima, Perú</span>
                        </div>
                        <div className="flex items-center md:justify-end gap-2">
                            <FaGithub className="text-purple-500 print:text-gray-600" />
                            <a href="https://github.com/AnselmoAlmerco" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 print:hover:text-black">
                                github.com/AnselmoAlmerco
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Body - 2 Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 print:grid-cols-12 print:gap-8">
                    
                    {/* Left Column: Profile, Projects, Interests */}
                    <div className="lg:col-span-8 flex flex-col gap-8 text-left print:col-span-8">
                        
                        {/* Professional Profile */}
                        <section className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 border-b border-white/5 pb-2 print:border-gray-300">
                                <FaBriefcase className="text-green-500 text-xl print:text-black" />
                                <h3 className="text-xl font-bold text-white uppercase tracking-wider print:text-black">
                                    Professional Profile
                                </h3>
                            </div>
                            <div className="flex flex-col gap-4 text-gray-300 text-sm leading-relaxed print:text-black">
                                <p>
                                    Software Engineering student with experience in Full Stack web development, Linux server administration and modern cloud-based technologies.
                                </p>
                                <p>
                                    Specialized in building scalable web applications using React, Next.js, Spring Boot, PHP and MySQL, combined with infrastructure management on Linux environments and deployment of modern systems.
                                </p>
                                <p>
                                    Passionate about cybersecurity, automation, cloud computing and quantitative financial systems. Focused on continuous learning, problem solving and building high-performance digital solutions.
                                </p>
                            </div>
                        </section>

                        {/* Core Projects */}
                        <section className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 border-b border-white/5 pb-2 print:border-gray-300">
                                <FaCode className="text-green-500 text-xl print:text-black" />
                                <h3 className="text-xl font-bold text-white uppercase tracking-wider print:text-black">
                                    Core Projects
                                </h3>
                            </div>
                            <div className="flex flex-col gap-6">
                                {[
                                    {
                                        title: "AcademiaTradingPro",
                                        desc: "Professional trading academy platform developed with Spring Boot, JSP and MySQL including authentication, role management, live classes and trading simulator."
                                    },
                                    {
                                        title: "Carnicería César",
                                        desc: "Online sales management system developed with PHP, JavaScript and MySQL featuring product catalog, user management and purchase simulation."
                                    },
                                    {
                                        title: "Medical Appointment System",
                                        desc: "Administrative web system built with Spring Boot and MySQL focused on secure authentication and user administration."
                                    },
                                    {
                                        title: "Premium Portfolio Next.js",
                                        desc: "Modern responsive portfolio developed with Next.js and Tailwind CSS using a premium minimalist design."
                                    },
                                    {
                                        title: "Trading Analysis Systems",
                                        desc: "Development of financial analysis and automation tools for Forex, Gold, Bitcoin and S&P 500 markets."
                                    }
                                ].map((project, idx) => (
                                    <div key={idx} className="flex flex-col gap-1">
                                        <h4 className="font-bold text-gray-100 text-base print:text-black">
                                            {project.title}
                                        </h4>
                                        <p className="text-gray-300 text-xs leading-relaxed print:text-black">
                                            {project.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* Right Column: Skills, Education, Strengths */}
                    <div className="lg:col-span-4 flex flex-col gap-8 text-left print:col-span-4">
                        
                        {/* Technical Skills */}
                        <section className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 border-b border-white/5 pb-2 print:border-gray-300">
                                <FaWrench className="text-green-500 text-xl print:text-black" />
                                <h3 className="text-xl font-bold text-white uppercase tracking-wider print:text-black">
                                    Skills
                                </h3>
                            </div>
                            
                            <div className="flex flex-col gap-4 text-xs">
                                {[
                                    { category: "Frontend", items: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
                                    { category: "Backend", items: ["Java", "Spring Boot", "PHP", "JSP", "REST APIs"] },
                                    { category: "Databases", items: ["MySQL", "SQL", "Modeling", "CRUD"] },
                                    { category: "Infrastructure", items: ["Linux Ubuntu", "Apache", "Git & GitHub", "Oracle Cloud", "Deployment"] },
                                    { category: "Trading", items: ["Python", "MetaTrader 5", "Risk Mgmt", "Automation"] }
                                ].map((skillGroup, idx) => (
                                    <div key={idx} className="flex flex-col gap-1.5">
                                        <span className="font-bold text-green-500 uppercase tracking-wider print:text-gray-800">
                                            {skillGroup.category}
                                        </span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {skillGroup.items.map((item, sIdx) => (
                                                <span key={sIdx} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-gray-300 print:text-black print:bg-gray-100 print:border-gray-300">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Education */}
                        <section className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 border-b border-white/5 pb-2 print:border-gray-300">
                                <FaGraduationCap className="text-green-500 text-xl print:text-black" />
                                <h3 className="text-xl font-bold text-white uppercase tracking-wider print:text-black">
                                    Education
                                </h3>
                            </div>
                            <div className="flex flex-col gap-1 text-xs">
                                <h4 className="font-bold text-gray-100 print:text-black">Software Engineering</h4>
                                <p className="text-gray-300 print:text-black leading-relaxed">
                                    Currently studying Software Engineering with focus on software development, databases, cloud infrastructure and intelligent systems.
                                </p>
                            </div>
                        </section>

                        {/* Strengths */}
                        <section className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 border-b border-white/5 pb-2 print:border-gray-300">
                                <FaCheck className="text-green-500 text-xl print:text-black" />
                                <h3 className="text-xl font-bold text-white uppercase tracking-wider print:text-black">
                                    Strengths
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2 text-xs">
                                {[
                                    "Problem Solving", "Strategic Thinking", "Fast Learning", 
                                    "Adaptability", "Collaboration", "Analytical Mindset", "Innovation"
                                ].map((strength, idx) => (
                                    <span key={idx} className="flex items-center gap-1.5 px-3 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-400 print:text-black print:border-gray-300 print:bg-gray-100">
                                        ✔ {strength}
                                    </span>
                                ))}
                            </div>
                        </section>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default CV;
