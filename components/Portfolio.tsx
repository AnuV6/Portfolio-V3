"use client";
import Image from "next/image";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";

const portfolioItems = [
    { 
        id: 1, 
        img: "/img/portfolio/gobus.webp", 
        title: "GoBus Application", 
        description: "Real-time bus tracking system with route optimization and notifications",
        techStack: ["React Native", "Firebase", "Google Maps API"],
        role: "Full Stack Developer",
        timeline: "3 months",
        githubUrl: "https://github.com/AnuV6/GoBus-App",
        liveUrl: null
    },
    { 
        id: 2, 
        img: "/img/portfolio/ui.webp", 
        title: "UrbenEats UI Design", 
        description: "Modern food delivery app interface with intuitive user experience",
        techStack: ["Figma", "UI/UX Design", "Prototyping"],
        role: "UI/UX Designer",
        timeline: "2 weeks",
        githubUrl: "https://github.com/AnuV6/UrbenEatsApp-UI-Design",
        liveUrl: null
    },
    { 
        id: 3, 
        img: "/img/portfolio/qr.webp", 
        title: "QR Attendance System", 
        description: "Contactless attendance tracking with QR code scanning and analytics",
        techStack: ["React", "Node.js", "QR Code analysis"],
        role: "Solo Project",
        timeline: "1 week",
        githubUrl: "https://github.com/AnuV6/QRscanner",
        liveUrl: null
    },
    { 
        id: 4, 
        img: "/img/portfolio/mobileapp.webp", 
        title: "CareerPulse Mobile App", 
        description: "Career guidance platform with skill assessments and job matching",
        techStack: ["Flutter", "Python API", "Firebase Auth"],
        role: "Mobile App Developer",
        timeline: "4 months",
        githubUrl: "https://github.com/AnuV6/CareerPulse-Mobile-App",
        liveUrl: null
    },
    { 
        id: 5, 
        img: "/img/portfolio/portfolio.webp", 
        title: "Next.js Personal Portfolio", 
        description: "Modern portfolio website with glassmorphism design and animations",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
        role: "Solo Project",
        timeline: "3 weeks",
        githubUrl: "https://github.com/AnuV6/portfolio-v2",
        liveUrl: "https://www.anupa.live"
    },
    { 
        id: 6, 
        img: "/img/portfolio/redesign.webp", 
        title: "SLTMobitel App Redesign", 
        description: "Complete UI/UX overhaul of telecom self-care application",
        techStack: ["Figma", "UI/UX Design", "User Research"],
        role: "UI/UX Designer",
        timeline: "2 weeks",
        githubUrl: "https://www.linkedin.com/posts/anupadinuranga_redesign-of-the-sltmobitel-selfcare-app-activity-7230859867144515584-S6uG?utm_source=share&utm_medium=member_desktop",
        liveUrl: null
    },
];

import { useContext } from "react";
import SpotlightCard from "@/components/SpotlightCard";

const Portfolio = () => {
    // Reinitialize Fancybox when component mounts (for lazy-loaded components)
    useEffect(() => {
        Fancybox.bind("[data-fancybox='portfolio']", {
            animationEffect: "zoom-in-out",
            animationDuration: 400,
            transitionEffect: "slide",
            transitionDuration: 350,
            Image: {
                zoom: true,
                click: "toggleZoom",
                wheel: "zoom",
            },
            Toolbar: {
                display: {
                    left: ["infobar"],
                    middle: [],
                    right: ["slideshow", "thumbs", "zoom", "download", "close"],
                },
                autoEnable: true,
            },
            Thumbs: {
                autoStart: true,
                axis: "x",
            },
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
            backdropClick: "close",
            hideScrollbar: true,
        } as any);

        return () => {
            Fancybox.unbind("[data-fancybox='portfolio']");
        };
    }, []);

    return (
        <section id="portfolio" className="row" aria-labelledby="portfolio-heading">
            <div className="col-lg-12">
                {/* title */}
                <h2 id="portfolio-heading" className="mb-10 relative flex items-end justify-between border-b border-white/10 pb-5 after:absolute after:bottom-[-1px] after:left-0 after:w-24 after:h-[2px] after:bg-primary after:shadow-neon-cyan">
                    <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">Selected Work</span>
                    <i className="fas fa-briefcase text-2xl text-gray-700" aria-hidden="true" />
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full p-4">
                {portfolioItems.map((item) => (
                    <SpotlightCard
                        className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-glass"
                        key={item.id}
                        data-scroll
                        data-scroll-offset={40}
                    >
                        {/* Image Container - Click triggers Lightbox */}
                        <a
                            data-fancybox="portfolio"
                            data-caption={`
                                <div class="flex flex-col gap-2 text-left">
                                    <h3 class="text-xl font-bold text-white mb-1">${item.title}</h3>
                                    <p class="text-sm text-gray-300 mb-2">${item.description}</p>
                                    <div class="flex flex-wrap gap-2 mb-2">
                                        ${item.techStack.map(tech => `<span class="px-2 py-1 text-xs rounded bg-primary/20 text-primary">${tech}</span>`).join('')}
                                    </div>
                                    <div class="flex gap-4 text-xs text-gray-400">
                                        <span><i class="fas fa-user-circle mr-1"></i>${item.role}</span>
                                        <span><i class="fas fa-clock mr-1"></i>${item.timeline}</span>
                                    </div>
                                </div>
                            `}
                            href={item.img}
                            className="block relative w-full aspect-[4/3] overflow-hidden cursor-zoom-in"
                            title={`Click to view ${item.title} in full size`}
                        >
                            <Image
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                src={item.img}
                                alt={item.title}
                                fill
                            />
                            {/* Overlay with Zoom Icon */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                <span className="w-14 h-14 rounded-full bg-primary/20 border-2 border-primary text-primary flex items-center justify-center shadow-neon-cyan">
                                    <i className="fas fa-search-plus text-lg" aria-hidden="true" />
                                </span>
                            </div>
                        </a>

                        {/* Content */}
                        <div className="p-6 space-y-4">
                            <div>
                                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                                    {item.description}
                                </p>
                                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                                    <span>{item.role}</span>
                                    <span>•</span>
                                    <span>{item.timeline}</span>
                                </div>
                            </div>
                            
                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {item.techStack.slice(0, 3).map((tech, index) => (
                                    <span 
                                        key={index}
                                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {item.techStack.length > 3 && (
                                    <span className="px-3 py-1 text-xs rounded-full bg-gray-700/30 text-gray-400">
                                        +{item.techStack.length - 3}
                                    </span>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 pt-2 border-t border-gray-700/50">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.open(item.githubUrl, '_blank');
                                    }}
                                    className="flex-1 px-4 py-2 rounded-lg bg-surface border border-gray-700 hover:border-primary hover:text-primary hover:shadow-neon-cyan flex items-center justify-center gap-2 transition-all duration-300 z-20 text-sm font-medium"
                                    aria-label={`View ${item.title} source code`}
                                >
                                    <i className="fab fa-github" />
                                    Code
                                </button>
                                {item.liveUrl && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(item.liveUrl, '_blank');
                                        }}
                                        className="flex-1 px-4 py-2 rounded-lg bg-primary/10 border border-primary/50 text-primary hover:bg-primary hover:text-black hover:shadow-neon-cyan flex items-center justify-center gap-2 transition-all duration-300 z-20 text-sm font-medium"
                                        aria-label={`View ${item.title} live demo`}
                                    >
                                        <i className="fas fa-external-link-alt" />
                                        Live
                                    </button>
                                )}
                            </div>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </section>
    );
};
export default Portfolio;
