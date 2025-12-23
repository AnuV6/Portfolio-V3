"use client";
import Contact from "@/components/Contact";
import StatsCounter from "@/components/StatsCounter";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillBadges from "@/components/SkillBadges";
import AboutSection from "@/components/AboutSection";
import Achievements from "@/components/Achievements";
import { context } from "@/context/context";
import TrueManLayout from "@/layout/TrueManLayout";
import { useContext, useEffect } from "react";
import { PortfolioCardSkeleton, SkillCardSkeleton } from "@/components/Skeleton";
import dynamic from "next/dynamic";

// Lazy load heavy components
const PortfolioLazy = dynamic(() => import("@/components/Portfolio"), {
    loading: () => (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full p-4">
            <PortfolioCardSkeleton />
            <PortfolioCardSkeleton />
            <PortfolioCardSkeleton />
        </div>
    ),
    ssr: true,
});

const SkillsLazy = dynamic(() => import("@/components/Skills"), {
    loading: () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCardSkeleton />
            <SkillCardSkeleton />
            <SkillCardSkeleton />
        </div>
    ),
    ssr: true,
});

const Index = () => {
    const contextValue = useContext(context);

    useEffect(() => {
        if (contextValue) {
            contextValue.banner_type_function("slider");
        }
    }, [contextValue?.banner_type_function]);

    return (
        <TrueManLayout onePage={true}>
            {/* Spacing for better visibility */}
            <div className="h-8" />
            
            {/* About Me */}
            <AboutSection />
            <div className="h-12" />

            {/* Stats */}
            <StatsCounter />
            <div className="h-16" />

            {/* ========== RESUME SECTION ========== */}
            {/* Resume section anchor */}
            <div
                data-scroll
                data-scroll-repeat
                data-scroll-offset={500}
                id="resume"
            />

            {/* Skills */}
            <SkillsLazy />
            <div className="h-16" />

            {/* Experience Timeline / My Journey */}
            <ExperienceTimeline />
            <div className="h-16" />

            {/* Achievements */}
            <Achievements />
            <div className="h-16" />

            {/* ========== PORTFOLIO SECTION ========== */}
            {/* Portfolio - Projects Only */}
            <PortfolioLazy />
            <div className="h-16" />

            {/* ========== CONTACT SECTION ========== */}
            {/* Contact section anchor */}
            <div
                data-scroll
                data-scroll-repeat
                data-scroll-offset={500}
                id="contact"
            />

            {/* Contact Form */}
            <Contact />
        </TrueManLayout>
    );
};
export default Index;
