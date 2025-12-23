"use client";
import { context } from "@/context/context";
import { sliderProps } from "@/utility/sliderProps";
import { useContext } from "react";
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
    return (
        <div
            className="relative w-full min-h-[600px] h-full overflow-hidden rounded-2xl"
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
                            alt="banner"
                            fill
                            className="object-cover rounded-2xl"
                            data-swiper-parallax-y={-100}
                            data-swiper-parallax-scale="1.2"
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
                        <div className={`inline-block px-5 py-2 mb-4 rounded-full border border-primary/50 bg-primary/10 text-primary font-mono text-sm tracking-wider shadow-neon-cyan ${noSidebar ? 'mx-auto' : ''}`}>
                            <span className="inline-flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                Available for Hire
                            </span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 leading-tight drop-shadow-[0_4px_20px_rgba(0,212,204,0.3)]">
                            Building Secure,
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-neon-cyan to-primary neon-text animate-gradient bg-[length:200%_auto]">
                                Scalable Systems
                            </span>
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-5 md:mb-6 max-w-xl lg:max-w-2xl leading-relaxed">
                            DevOps Engineer • Cyber Security Enthusiast • Cloud Automation Specialist
                        </p>
                        <div className={`flex flex-col sm:flex-row flex-wrap gap-3 ${noSidebar ? 'justify-center' : ''}`}>
                            <a
                                data-fancybox
                                href="#video-resume"
                                className="group inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white text-sm md:text-base font-bold tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(0,212,204,0.5)] hover:border-transparent hover:scale-105"
                                aria-label="Watch video resume"
                            >
                                Video Resume
                                <i className="fas fa-play text-xs md:text-sm group-hover:scale-110 transition-transform duration-300" />
                            </a>
                            <a
                                href="#portfolio"
                                className="group inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full border border-primary/50 bg-primary/10 text-primary text-sm md:text-base font-bold tracking-wider uppercase transition-all duration-300 hover:bg-primary hover:text-black hover:shadow-[0_0_30px_rgba(0,212,204,0.5)] hover:scale-105"
                                aria-label="View my work"
                            >
                                See My Work
                                <i className="fas fa-arrow-right text-xs md:text-sm group-hover:translate-x-1 transition-transform duration-300" />
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
