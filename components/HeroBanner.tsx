"use client";
import { context } from "@/context/context";
import { sliderProps } from "@/utility/sliderProps";
import { typing } from "@/utility/typing";
import { useContext, useEffect } from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Grid, Navigation, Pagination, Parallax } from "swiper/modules";

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

// Background slide configuration
const BACKGROUND_SLIDES = [
    {
        src: "/img/banner.webp",
        alt: "Professional tech environment",
        priority: true,
    },
    {
        src: "/img/banner2.webp",
        alt: "Professional workspace background",
        priority: false,
    },
    {
        src: "/img/banner3.avif",
        alt: "Technology and coding background",
        priority: false,
    },
];

// Render background slide
const BackgroundSlide = ({ src, alt, priority }: { src: string; alt: string; priority: boolean }) => (
    <SwiperSlide className="!w-full !h-full">
        <div className="relative w-full h-full">
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="100vw"
                quality={90}
                priority={priority}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
    </SwiperSlide>
);

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
            {/* Background Slideshow */}
            <div className="absolute inset-0">
                <Swiper
                    modules={[Autoplay, EffectFade, Grid, Navigation, Pagination, Parallax]}
                    {...sliderProps.homeSlider}
                    className="w-full h-full"
                >
                    {BACKGROUND_SLIDES.map((slide, index) => (
                        <BackgroundSlide
                            key={index}
                            src={slide.src}
                            alt={slide.alt}
                            priority={slide.priority}
                        />
                    ))}
                </Swiper>
            </div>

            {/* Banner Content */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none p-6 md:p-10 lg:p-12">
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
                        <p className={`text-base md:text-lg lg:text-xl text-gray-300 mt-3 mb-8 md:mb-10 lg:mb-12 ${noSidebar ? 'mx-auto' : ''} max-w-3xl leading-relaxed font-medium`}>
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
