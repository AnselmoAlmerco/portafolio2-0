"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaFilePdf, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("presentation");

    useEffect(() => {
        const sections = ["presentation", "projects", "informations", "contact", "cv"];
        
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // Offset for navbar height
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Call it initially to set correct state
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { name: "Presentation", href: "/#presentation", id: "presentation" },
        { name: "Projects", href: "/#projects", id: "projects" },
        { name: "Informations", href: "/#informations", id: "informations" },
        { name: "Contact", href: "/#contact", id: "contact" },
        { name: "CV", href: "/#cv", id: "cv" }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-green-500/20">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
                <Link href="/presentation" className="text-xl font-bold text-white tracking-tighter">
                    Mi <span className="text-red-500">| Portafolio</span>
                </Link>

                {/* Botón Hamburguesa para Móviles */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-300 hover:text-white transition-colors"
                >
                    {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                </button>

                {/* Menú Desktop */}
                <div className="hidden md:flex space-x-8">
                    {menuItems.map((item) => (
                        <Link 
                            key={item.id}
                            href={item.href} 
                            onClick={() => setActiveSection(item.id)}
                            className={`text-sm font-medium transition-colors ${activeSection === item.id ? "text-red-500" : "text-white hover:text-red-500"}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Redes Desktop */}
                <div className="hidden md:flex space-x-6">
                    <a href="https://github.com/AnselmoAlmerco" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-red-500 transition-colors">
                        <FaGithub className="text-lg" /> Github
                    </a>
                    <Link 
                        href="/#cv" 
                        onClick={() => setActiveSection("cv")}
                        className={`flex items-center gap-2 text-sm font-medium transition-colors ${activeSection === "cv" ? "text-red-500" : "text-gray-300 hover:text-red-500"}`}
                    >
                        <FaFilePdf className="text-lg" /> CV
                    </Link>
                </div>
            </div>

            {/* Menú Móvil Desplegable */}
            {isOpen && (
                <div className="md:hidden bg-black border-b border-green-500/20 px-6 py-4 flex flex-col space-y-4 shadow-xl">
                    {menuItems.slice(0, 4).map((item) => (
                        <Link 
                            key={item.id}
                            onClick={() => {
                                setIsOpen(false);
                                setActiveSection(item.id);
                            }} 
                            href={item.href} 
                            className={`text-base font-medium transition-colors ${activeSection === item.id ? "text-red-500" : "text-gray-300 hover:text-red-500"}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <hr className="border-white/10 my-2" />
                    <div className="flex space-x-6">
                        <a onClick={() => setIsOpen(false)} href="https://github.com/AnselmoAlmerco" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base font-medium text-gray-300 hover:text-red-500 transition-colors">
                            <FaGithub className="text-lg" /> Github
                        </a>
                        <Link 
                            onClick={() => {
                                setIsOpen(false);
                                setActiveSection("cv");
                            }} 
                            href="/#cv" 
                            className={`flex items-center gap-2 text-base font-medium transition-colors ${activeSection === "cv" ? "text-red-500" : "text-gray-300 hover:text-red-500"}`}
                        >
                            <FaFilePdf className="text-lg" /> CV
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;