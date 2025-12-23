"use client";
import HeroBanner from "@/components/HeroBanner";
import Footer from "@/components/Footer";
import ProfileSidebar from "@/components/ProfileSidebar";
import NavigationBar from "@/components/NavigationBar";
import { trueManUtility } from "@/utility";
import { Fancybox } from "@fancyapps/ui";
import { Fragment, useEffect, useState, ReactNode } from "react";

interface TrueManLayoutProps {
    children?: ReactNode;
    noSidebar?: boolean;
    onePage?: boolean;
}

const TrueManLayout = ({ children, noSidebar, onePage }: TrueManLayoutProps) => {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    // Initialise scroll animation utility
    useEffect(() => {
        trueManUtility.scrollAnimation();
    }, []);

    // Initialise Fancybox
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
            // Animation settings
            animationEffect: "zoom-in-out",
            animationDuration: 400,
            transitionEffect: "slide",
            transitionDuration: 350,
            
            // Image settings
            Image: {
                zoom: true,
                click: "toggleZoom",
                wheel: "zoom",
            },
            
            // Toolbar buttons
            Toolbar: {
                display: {
                    left: ["infobar"],
                    middle: [],
                    right: ["slideshow", "thumbs", "zoom", "download", "close"],
                },
                autoEnable: true,
            },
            
            // Thumbnails
            Thumbs: {
                autoStart: true,
                axis: "x",
            },
            
            // Caption settings
            caption: function (fancybox: any, carousel: any, slide: any) {
                return slide.caption || "";
            },
            
            // UI settings
            dragToClose: true,
            closeButton: "top",
            mainClass: "fancybox-custom",
            keyboard: {
                Escape: "close",
                Delete: "close",
                Backspace: "close",
                ArrowLeft: "prev",
                ArrowRight: "next",
            },
            
            // Appearance
            backdropClick: "close",
            hideScrollbar: true,
            idle: false,
            compact: false,
            
        } as any);
        
        return () => {
            Fancybox.unbind("[data-fancybox]");
            Fancybox.close();
        };
    }, []);

    // Scroll handling – back‑to‑top button and sidebar visibility
    useEffect(() => {
        const checkScroll = () => {
            setShowBackToTop(window.scrollY > window.innerHeight * 0.5);
            const homeBanner = document.getElementById("home");
            if (homeBanner) {
                const rect = homeBanner.getBoundingClientRect();
                setShowSidebar(rect.bottom <= 0);
            }
        };
        const intervalId = setInterval(checkScroll, 100);
        checkScroll(); // initial check
        return () => clearInterval(intervalId);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Fragment>
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>

            <NavigationBar onePage={onePage} />

            {/* Main scroll container */}
            <div id="trm-scroll-container">
                {/* Home banner section with sidebar */}
                <section id="home" className="relative w-full min-h-screen">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 min-h-screen pt-24 pb-4">
                            {/* Sidebar - Shares space with banner, sticky within home section */}
                            {!noSidebar && (
                                <aside className="hidden lg:block lg:w-[280px] xl:w-[320px] flex-shrink-0">
                                    <div className="sticky top-32">
                                        <ProfileSidebar />
                                    </div>
                                </aside>
                            )}
                            
                            {/* Banner - Shares space with sidebar */}
                            <div className="flex-1 w-full min-h-screen flex items-center">
                                <HeroBanner centerTitle={noSidebar} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content area - Full width, no sidebar */}
                <div className="w-full relative">
                    <div className="container mx-auto px-4 md:px-8">
                        <main className="w-full relative" id="main-content" role="main">
                            {children}
                            <div className="w-full h-px bg-white/10 my-10" />
                            <Footer />
                        </main>
                    </div>
                </div>
            </div>

            {/* Back‑to‑top button */}
            <button
                onClick={scrollToTop}
                className={`back-to-top ${showBackToTop ? "visible" : ""} w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center shadow-neon-cyan hover:scale-110 transition-transform duration-300`}
                aria-label="Back to top"
            >
                <i className="fas fa-arrow-up" />
            </button>
        </Fragment>
    );
};

export default TrueManLayout;
