"use client";
import { context } from "@/context/context";
import { typing } from "@/utility/typing";
import { useContext, useEffect } from "react";
import React from "react";

interface BannerProps {
    centerTitle?: boolean;
}

const HeroBanner = ({ centerTitle }: BannerProps) => {
    const contextValue = useContext(context);
    const banner_type = contextValue ? contextValue.banner_type : "";

    switch (banner_type) {
        case "slider":
            return <SliderBanner noSidebar={centerTitle} />;
        default:
            return null;
    }
};
export default HeroBanner;

// Action buttons component
const ActionButtons = ({ noSidebar, onPortfolioClick }: { noSidebar?: boolean; onPortfolioClick: (e: React.MouseEvent<HTMLAnchorElement>) => void }) => (
    <div className={`flex flex-col sm:flex-row flex-wrap gap-4 md:gap-5 ${noSidebar ? 'justify-center' : ''}`}>
        <a
            data-fancybox
            href="#video-resume"
            className="group inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-md text-white text-sm md:text-base font-bold tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] hover:border-white hover:scale-105 active:scale-95"
            aria-label="Watch video resume"
        >
            <i className="fas fa-play text-xs md:text-sm group-hover:scale-125 transition-transform duration-300" />
            Video Resume
        </a>
        <a
            href="#portfolio"
            onClick={onPortfolioClick}
            className="group inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 rounded-full border-2 border-primary/60 bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-md text-primary text-sm md:text-base font-bold tracking-wider uppercase transition-all duration-300 hover:bg-primary hover:text-black hover:shadow-[0_0_40px_rgba(0,212,204,0.7)] hover:border-primary hover:scale-105 active:scale-95"
            aria-label="View my work"
        >
            <i className="fas fa-arrow-right text-xs md:text-sm group-hover:translate-x-1 transition-transform duration-300" />
            See My Work
        </a>
    </div>
);

const SliderBanner = ({ noSidebar }: { noSidebar?: boolean }) => {
    // Initialize typewriter effect
    useEffect(() => {
        typing();
    }, []);

    // Smooth scroll handler matching navigation behavior
    const handleScrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        e.stopPropagation();

        // Update URL hash
        window.history.pushState(null, '', '#portfolio');

        // Smooth scroll to portfolio section with offset
        const element = document.getElementById('portfolio');
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

    return (
        <div
            className="relative w-full min-h-[650px] md:min-h-[750px] lg:min-h-[850px] h-screen max-h-[950px] overflow-hidden rounded-2xl shadow-2xl shadow-primary/20"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed={-1}
            aria-label="Hero banner"
        >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
                {/* Base gradient layer with animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black animate-gradient-shift"></div>
                
                {/* Animated gradient orbs with smoother transitions */}
                <div className="absolute top-0 left-0 w-full h-full">
                    {/* Primary orb - top left */}
                    <div className="absolute top-1/4 -left-1/4 w-[30rem] h-[30rem] bg-gradient-to-br from-primary/25 to-cyan-500/15 rounded-full blur-[120px] animate-float-slow opacity-60"></div>
                    
                    {/* Secondary orb - bottom right */}
                    <div className="absolute bottom-1/4 -right-1/4 w-[35rem] h-[35rem] bg-gradient-to-tl from-cyan-400/20 to-primary/10 rounded-full blur-[130px] animate-float-slower opacity-50" style={{ animationDelay: '2s' }}></div>
                    
                    {/* Tertiary orb - center */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25rem] h-[25rem] bg-gradient-to-r from-primary/15 via-cyan-500/20 to-primary/15 rounded-full blur-[140px] animate-pulse-slow opacity-40"></div>
                    
                    {/* Additional accent orbs */}
                    <div className="absolute top-[15%] right-[20%] w-[15rem] h-[15rem] bg-primary/15 rounded-full blur-[100px] animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-[20%] left-[15%] w-[18rem] h-[18rem] bg-cyan-400/12 rounded-full blur-[110px] animate-float-slower opacity-35" style={{ animationDelay: '3s' }}></div>
                </div>

                {/* Animated mesh gradient overlay */}
                <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-cyan-500/10 animate-gradient-rotate"></div>
                </div>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `
                        linear-gradient(rgba(0, 212, 204, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 212, 204, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }}></div>

                {/* Animated particles with glow */}
                <div className="absolute inset-0">
                    <div className="absolute top-[18%] left-[12%] w-2.5 h-2.5 bg-primary rounded-full animate-float-particle shadow-[0_0_10px_rgba(0,212,204,0.6)]" style={{ animationDuration: '4s' }}></div>
                    <div className="absolute top-[65%] left-[78%] w-2 h-2 bg-cyan-400 rounded-full animate-float-particle shadow-[0_0_8px_rgba(0,212,204,0.5)]" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
                    <div className="absolute top-[45%] left-[55%] w-1.5 h-1.5 bg-primary/80 rounded-full animate-float-particle shadow-[0_0_6px_rgba(0,212,204,0.4)]" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
                    <div className="absolute top-[75%] left-[25%] w-2 h-2 bg-cyan-400/80 rounded-full animate-float-particle shadow-[0_0_8px_rgba(0,212,204,0.5)]" style={{ animationDuration: '5.5s', animationDelay: '0.5s' }}></div>
                    <div className="absolute top-[30%] left-[85%] w-1.5 h-1.5 bg-primary rounded-full animate-float-particle shadow-[0_0_6px_rgba(0,212,204,0.4)]" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}></div>
                </div>

                {/* Subtle noise texture for depth */}
                <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
                }}></div>
            </div>

            {/* Banner Content */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none p-6 md:p-10 lg:p-12">
                <div
                    className="w-full pointer-events-auto"
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed={1}
                >
                    <div className={noSidebar ? 'text-center mx-auto max-w-4xl' : ''}>
                        {/* Status Badge */}
                        <div className={`inline-block px-6 py-3 mb-7 rounded-full border-2 border-primary/50 bg-primary/10 text-primary font-mono text-xs md:text-sm tracking-wider shadow-lg shadow-primary/30 backdrop-blur-md hover:shadow-primary/50 transition-all duration-300 ${noSidebar ? 'mx-auto' : ''}`}>
                            <span className="inline-flex items-center gap-2">
                                <span className="relative w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse">
                                    <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></span>
                                </span>
                                Available for Hire
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-5 md:mb-6 lg:mb-7 leading-tight drop-shadow-[0_4px_30px_rgba(0,212,204,0.4)]">
                            Building Secure,
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-neon-cyan to-primary neon-text animate-gradient bg-[length:200%_auto] drop-shadow-[0_0_30px_rgba(0,212,204,0.8)]">
                                Scalable Systems
                            </span>
                        </h1>

                        {/* Typewriter Effect */}
                        <div className={`text-gray-200 text-lg md:text-xl lg:text-2xl font-medium tracking-wide mb-0 min-h-[32px] flex items-center ${noSidebar ? 'justify-center' : 'justify-start'}`}>
                            <span className="mr-2">I'm a</span>
                            <span className="neon-typed-text font-bold text-lg md:text-xl lg:text-2xl relative">
                                {/* Typewriter effect - Words from typing.ts */}
                                <span className="inline-block w-0.5 h-6 bg-primary ml-0.5 animate-pulse"></span>
                            </span>
                        </div>

                        {/* Subtitle */}
                        <p className={`text-base md:text-lg lg:text-xl text-gray-300 mt-3 mb-6 md:mb-8 ${noSidebar ? 'mx-auto' : ''} max-w-3xl leading-relaxed font-medium`}>
                            DevOps Engineer • Cyber Security Enthusiast • Cloud Automation Specialist
                        </p>

                        {/* Action Buttons */}
                        <ActionButtons
                            noSidebar={noSidebar}
                            onPortfolioClick={handleScrollToPortfolio}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
