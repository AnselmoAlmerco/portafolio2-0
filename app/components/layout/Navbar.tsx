"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaGithub, FaFilePdf, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                    <Link href="/presentation" className="text-sm font-medium text-white hover:text-red-500 transition-colors">
                        Presentation
                    </Link>
                    <Link href="/projects" className="text-sm font-medium text-white hover:text-red-500 transition-colors">
                        Projects
                    </Link>
                    <Link href="#informations" className="text-sm font-medium text-white hover:text-red-500 transition-colors">
                        Informations
                    </Link>
                    <Link href="#contact" className="text-sm font-medium text-white hover:text-red-500 transition-colors">
                        Contact
                    </Link>
                    <Link href="#cv" className="text-sm font-medium text-white hover:text-red-500 transition-colors">
                        CV
                    </Link>
                </div>

                {/* Redes Desktop */}
                <div className="hidden md:flex space-x-6">
                    <Link href="#github" className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-red-500 transition-colors">
                        <FaGithub className="text-lg" /> Github
                    </Link>
                    <Link href="#cv" className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-red-500 transition-colors">
                        <FaFilePdf className="text-lg" /> CV
                    </Link>
                </div>
            </div>

            {/* Menú Móvil Desplegable */}
            {isOpen && (
                <div className="md:hidden bg-black border-b border-green-500/20 px-6 py-4 flex flex-col space-y-4 shadow-xl">
                    <Link onClick={() => setIsOpen(false)} href="/presentation" className="text-base font-medium text-gray-300 hover:text-red-500 transition-colors">
                        Presentation
                    </Link>
                    <Link onClick={() => setIsOpen(false)} href="/projects" className="text-base font-medium text-gray-300 hover:text-red-500 transition-colors">
                        Projects
                    </Link>
                    <Link onClick={() => setIsOpen(false)} href="#informations" className="text-base font-medium text-gray-300 hover:text-red-500 transition-colors">
                        Informations
                    </Link>
                    <Link onClick={() => setIsOpen(false)} href="#contact" className="text-base font-medium text-gray-300 hover:text-red-500 transition-colors">
                        Contact
                    </Link>
                    <hr className="border-white/10 my-2" />
                    <div className="flex space-x-6">
                        <Link onClick={() => setIsOpen(false)} href="#github" className="flex items-center gap-2 text-base font-medium text-gray-300 hover:text-red-500 transition-colors">
                            <FaGithub className="text-lg" /> Github
                        </Link>
                        <Link onClick={() => setIsOpen(false)} href="#cv" className="flex items-center gap-2 text-base font-medium text-gray-300 hover:text-red-500 transition-colors">
                            <FaFilePdf className="text-lg" /> CV
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;