"use client";
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        toggleVisibility(); // Initial check

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-[999] group transition-all duration-500 ${
                isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-20 scale-50 pointer-events-none'
            }`}
            aria-label="Scroll to top"
        >
            <div className="relative">
                {/* Outer Glow - More Intense */}
                <div className="absolute -inset-3 bg-gradient-to-r from-[#00d4cc] to-[#ff1a6e] rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 animate-pulse" />
                
                {/* Main Button Container */}
                <div className="relative">
                    {/* Gradient Border */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00d4cc] via-[#00b8d4] to-[#ff1a6e] p-[3px] shadow-2xl group-hover:scale-110 transition-all duration-300">
                        {/* Inner Dark Background */}
                        <div className="w-full h-full rounded-2xl bg-[#0a0e27] flex items-center justify-center relative overflow-hidden">
                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            {/* Icon */}
                            <div className="relative z-10">
                                <i className="fas fa-arrow-up text-3xl font-bold text-transparent bg-gradient-to-br from-[#00d4cc] to-[#ff1a6e] bg-clip-text group-hover:scale-125 transition-transform duration-300" aria-hidden="true" />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full right-0 mb-4 px-5 py-2.5 bg-gradient-to-r from-[#00d4cc] to-[#ff1a6e] rounded-xl text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-2xl transform group-hover:-translate-y-2">
                    <span className="relative z-10">Back to Top ↑</span>
                    <div className="absolute top-full right-8 w-3 h-3 bg-[#ff1a6e] transform rotate-45 -mt-1.5" />
                </div>
            </div>
        </button>
    );
};

export default ScrollToTopButton;
