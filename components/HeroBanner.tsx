"use client";
import { context } from "@/context/context";
import { sliderProps } from "@/utility/sliderProps";
import { typing } from "@/utility/typing";
import { useContext, useEffect } from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

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
            className="relative w-full min-h-[600px] h-full overflow-hidden rounded-2xl shadow-2xl shadow-primary/20"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed={-1}
            aria-label="Hero banner"
        >
            {/* banner slideshow cover */}
            <Swiper
                {...sliderProps.homeSlider}
                className="swiper-container w-full h-full absolute top-0 left-0 rounded-2xl"
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed={-4}
            >
                <SwiperSlide className="swiper-slide w-full h-full">
                    <div className="relative w-full h-full">
                        <Image
                            src="/img/banner.webp"
                            alt="Professional tech environment"
                            fill
                            className="object-cover rounded-2xl"
                            data-swiper-parallax-y={-100}
                            data-swiper-parallax-scale="1.2"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                            quality={85}
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 pointer-events-none rounded-2xl" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide w-full h-full">
                    <div className="relative w-full h-full">
                        <Image
                            src="/img/banner2.webp"
                            alt="Professional workspace background"
                            fill
                            className="object-cover rounded-2xl"
                            data-swiper-parallax-y={-100}
                            data-swiper-parallax-scale="1.2"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                            quality={85}
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 pointer-events-none rounded-2xl" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide w-full h-full">
                    <div className="relative w-full h-full">
                        <Image
                            src="/img/banner3.avif"
                            alt="Technology and coding background"
                            fill
                            className="object-cover rounded-2xl"
                            data-swiper-parallax-y={-100}
                            data-swiper-parallax-scale="1.2"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                            quality={85}
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 pointer-events-none rounded-2xl" />
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* banner slideshow cover end */}
            {/* banner content */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none p-6 md:p-8 lg:p-10">
                <div
                    className="w-full pointer-events-auto"
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed={1}
                >
                    {/* banner title */}
                    <div className={noSidebar ? 'text-center mx-auto max-w-4xl' : ''}>
                        <div className={`inline-block px-5 py-2.5 mb-6 rounded-full border border-primary/50 bg-primary/10 text-primary font-mono text-xs md:text-sm tracking-wider shadow-neon-cyan backdrop-blur-sm ${noSidebar ? 'mx-auto' : ''}`}>
                            <span className="inline-flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                Available for Hire
                            </span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-5 lg:mb-6 leading-tight drop-shadow-[0_4px_20px_rgba(0,212,204,0.3)]">
                            Building Secure,
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-neon-cyan to-primary neon-text animate-gradient bg-[length:200%_auto]">
                                Scalable Systems
                            </span>
                        </h1>
                        <div className="text-gray-200 text-base md:text-lg lg:text-xl font-medium tracking-wide mb-6 md:mb-7 lg:mb-8 min-h-[28px] flex items-center">
                            <span className="mr-2">I'm a</span>
                            <span className="neon-typed-text font-bold text-base md:text-lg lg:text-xl relative">
                                {/* Typewriter effect - Words from typing.ts */}
                                <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-pulse"></span>
                            </span>
                        </div>
                        <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-7 md:mb-8 lg:mb-10 max-w-2xl leading-relaxed font-medium">
                            DevOps Engineer • Cyber Security Enthusiast • Cloud Automation Specialist
                        </p>
                        <div className={`flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 ${noSidebar ? 'justify-center' : ''}`}>
                            <a
                                data-fancybox
                                href="#video-resume"
                                className="group inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-sm md:text-base font-bold tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:border-white hover:scale-110"
                                aria-label="Watch video resume"
                            >
                                <i className="fas fa-play text-xs md:text-sm group-hover:scale-125 transition-transform duration-300" />
                                Video Resume
                            </a>
                            <a
                                href="#portfolio"
                                onClick={handleScrollToPortfolio}
                                className="group inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full border border-primary/60 bg-primary/15 backdrop-blur-md text-primary text-sm md:text-base font-bold tracking-wider uppercase transition-all duration-300 hover:bg-primary hover:text-black hover:shadow-[0_0_40px_rgba(0,212,204,0.6)] hover:border-primary hover:scale-110"
                                aria-label="View my work"
                            >
                                <i className="fas fa-arrow-right text-xs md:text-sm group-hover:translate-x-1 transition-transform duration-300" />
                                See My Work
                            </a>
                        </div>
                    </div>
                    {/* banner title end */}
                </div>
            </div>
            {/* banner content end */}
        </div>
    );
};
