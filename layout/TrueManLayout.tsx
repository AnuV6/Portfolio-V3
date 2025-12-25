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

    // Initialise Fancybox (excluding portfolio items which have their own binding)
    useEffect(() => {
        Fancybox.bind("[data-fancybox]:not([data-fancybox='portfolio'])", {
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
            Fancybox.unbind("[data-fancybox]:not([data-fancybox='portfolio'])");
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
                <section id="home" className="relative w-full">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 pt-24 pb-4">
                            {/* Sidebar - Visible on mobile (stacked) and desktop */}
                            {!noSidebar && (
                                <aside className="w-full lg:w-[280px] xl:w-[320px] flex-shrink-0 order-1 lg:order-none mb-6 lg:mb-0">
                                    <div className="lg:sticky lg:top-32">
                                        <ProfileSidebar />
                                    </div>
                                </aside>
                            )}

                            {/* Banner - Full width on mobile, flex-1 on desktop */}
                            <div className="w-full lg:flex-1 min-h-[450px] lg:h-[600px] flex items-center order-2 lg:order-none">
                                <HeroBanner centerTitle={noSidebar} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content area - Full width, no sidebar */}
                <div className="w-full relative">
                    <div className="container mx-auto px-4 md:px-8">
                        <main className="w-full relative" id="main-content" role="main">
                            <div className="mt-12 md:mt-16 lg:mt-20">
                                {children}
                            </div>
                            <Footer />
                        </main>
                    </div>
                </div>
            </div>

            {/* Back‑to‑top button */}
            {/* Back‑to‑top button - Glassmorphic Style */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-xl bg-black/40 backdrop-blur-md border border-primary/50 text-primary flex items-center justify-center shadow-[0_0_15px_rgba(0,212,204,0.3)] hover:bg-primary hover:text-black hover:shadow-[0_0_30px_rgba(0,212,204,0.6)] hover:-translate-y-1 active:scale-95 transition-all duration-300 group ${showBackToTop ? "translate-y-0 opacity-100 visible" : "translate-y-10 opacity-0 invisible"}`}
                aria-label="Back to top"
            >
                <i className="fas fa-chevron-up text-lg group-hover:animate-bounce" />
            </button>
        </Fragment>
    );
};

export default TrueManLayout;
