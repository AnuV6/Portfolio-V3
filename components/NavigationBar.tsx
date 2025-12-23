"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface TopBarProps {
    onePage?: boolean;
}

const NavigationBar = ({ onePage }: TopBarProps) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sections = ["home", "about", "resume", "portfolio", "contact"];
        
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px', // Top 20% to bottom 40% of viewport
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    if (sections.includes(id)) {
                        setActiveSection(id);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const handleNavClick = (e: React.MouseEvent, section: string) => {
        e.preventDefault();
        e.stopPropagation();
        setActiveSection(section);
        setMenuOpen(false);
        
        // Smooth scroll to section
        const element = document.getElementById(section);
        if (element) {
            const offset = 100; // Offset for fixed header
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const isActive = (section: string) => {
        return activeSection === section;
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-300 ${
                scrolled 
                    ? 'bg-black/80 backdrop-blur-xl shadow-lg py-3' 
                    : 'bg-transparent py-5'
            }`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex justify-between items-center relative">

                    {/* Logo - Clickable to home */}
                    <a
                        href="/"
                        onClick={(e) => handleNavClick(e, "home")}
                        className="flex items-center gap-2 group"
                        aria-label="Go to home"
                    >
                        <div className="font-bold text-xl md:text-2xl tracking-wider text-white transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_10px_rgba(0,212,204,0.5)] flex items-center gap-2">
                            <span>Coder</span>
                            <span className="text-primary neon-text">Allen</span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {/* Nav Links */}
                        <ul className="flex items-center gap-2">
                            {onePage ? (
                                <>
                                    {['home', 'about', 'resume', 'portfolio', 'contact'].map((section) => (
                                        <li key={section}>
                                            <a
                                                href={`#${section}`}
                                                onClick={(e) => handleNavClick(e, section)}
                                                className={`
                                                    relative px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider
                                                    transition-all duration-300 group
                                                    ${isActive(section)
                                                        ? 'text-primary bg-primary/10 shadow-[0_0_20px_rgba(0,212,204,0.2)]'
                                                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                                                    }
                                                `}
                                                aria-current={isActive(section) ? 'page' : undefined}
                                            >
                                                <span className="relative z-10">
                                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                                </span>
                                                {/* Active indicator */}
                                                {isActive(section) && (
                                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-neon-cyan" />
                                                )}
                                                {/* Hover effect */}
                                                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </a>
                                        </li>
                                    ))}
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link 
                                            href="/" 
                                            className="px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-primary hover:bg-white/5 transition-all duration-300"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="/portfolio" 
                                            className="px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-primary hover:bg-white/5 transition-all duration-300"
                                        >
                                            Portfolio
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>

                        {/* Download CV Button */}
                        <a
                            href="/files/AnupaDinuranga_cv.pdf"
                            download="AnupaDinuranga_CV.pdf"
                            className="group relative px-6 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 text-primary hover:text-black hover:bg-primary hover:border-primary transition-all duration-300 text-sm font-bold tracking-wider uppercase backdrop-blur-sm flex items-center gap-2.5 overflow-hidden hover:shadow-[0_0_30px_rgba(0,212,204,0.4)] hover:scale-105"
                            aria-label="Download my CV"
                        >
                            <i className="fas fa-download relative z-10 text-xs group-hover:animate-bounce" aria-hidden="true" />
                            <span className="relative z-10">Download CV</span>
                            {/* Shine effect on hover */}
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 hover:text-primary hover:border-primary/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 z-[120]"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                    >
                        <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-lg transition-transform duration-300 ${menuOpen ? 'rotate-90' : ''}`} aria-hidden="true" />
                    </button>

                </div>

                {/* Mobile Navigation Menu */}
                <div
                    id="mobile-menu"
                    className={`
                        lg:hidden absolute top-full left-0 right-0 w-full
                        transition-all duration-300 ease-in-out
                        ${menuOpen
                            ? 'max-h-[600px] opacity-100 pointer-events-auto mt-4'
                            : 'max-h-0 opacity-0 pointer-events-none'
                        }
                    `}
                >
                    <div className="mx-4 bg-black/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_0_rgba(0,212,204,0.15)] rounded-2xl overflow-hidden">
                        <ul className="py-4">
                            {onePage ? (
                                <>
                                    {['home', 'about', 'resume', 'portfolio', 'contact'].map((section, index) => (
                                        <li key={section}>
                                            <a
                                                href={`#${section}`}
                                                onClick={(e) => handleNavClick(e, section)}
                                                className={`
                                                    flex items-center justify-between px-6 py-3.5 text-sm font-semibold uppercase tracking-wider
                                                    transition-all duration-300
                                                    ${isActive(section)
                                                        ? 'text-primary bg-primary/10 border-l-4 border-primary'
                                                        : 'text-gray-300 hover:text-white hover:bg-white/5 border-l-4 border-transparent'
                                                    }
                                                `}
                                                aria-current={isActive(section) ? 'page' : undefined}
                                            >
                                                <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                                                {isActive(section) && (
                                                    <i className="fas fa-check-circle text-primary text-sm" aria-hidden="true" />
                                                )}
                                            </a>
                                        </li>
                                    ))}
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link 
                                            href="/" 
                                            onClick={() => setMenuOpen(false)}
                                            className="block px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-primary hover:bg-white/5 transition-all duration-300"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="/portfolio" 
                                            onClick={() => setMenuOpen(false)}
                                            className="block px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-primary hover:bg-white/5 transition-all duration-300"
                                        >
                                            Portfolio
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>

                        {/* Mobile Download CV Button */}
                        <div className="p-4 border-t border-white/10">
                            <a
                                href="/files/AnupaDinuranga_cv.pdf"
                                download="AnupaDinuranga_CV.pdf"
                                onClick={() => setMenuOpen(false)}
                                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 text-primary hover:bg-primary hover:text-black transition-all duration-300 text-sm font-bold tracking-wider uppercase backdrop-blur-sm"
                                aria-label="Download my CV"
                            >
                                <i className="fas fa-download text-xs" aria-hidden="true" />
                                <span>Download CV</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
};
export default NavigationBar;
