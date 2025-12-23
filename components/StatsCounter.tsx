
"use client";
import { useState, useEffect, useRef } from "react";

const stats = [
    { number: 20, label: "Projects Completed", icon: "fa-project-diagram", color: "primary" },
    { number: 25, label: "Certifications Obtained", icon: "fa-certificate", color: "primary" },
    { number: 15, label: "Achievement Badges", icon: "fa-award", color: "primary" },
];

const StatsCounterItem = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = stat.number / steps;
        const stepDuration = duration / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            if (currentStep >= steps) {
                setCount(stat.number);
                clearInterval(timer);
            } else {
                setCount(Math.floor(increment * currentStep));
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [isVisible, stat.number]);

    return (
        <div className="col-lg-4">
            <article
                ref={elementRef}
                className="glass-card element-hover p-6 md:p-8 rounded-2xl mb-8 flex flex-col items-center justify-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-neon-cyan"
                data-scroll
                data-scroll-offset={40}
            >
                <i className={`fas ${stat.icon} text-${stat.color} text-2xl mb-3 opacity-50`} aria-hidden="true" />
                <div className="text-4xl md:text-5xl font-bold text-white neon-text mb-2">
                    <span className="counter-number" aria-label={`${stat.number} plus`}>{count}</span>
                    <span className={`text-${stat.color}`}>+</span>
                </div>
                <div className="h-1 w-12 bg-gray-700 rounded-full mb-4" aria-hidden="true" />
                <h3 className="text-gray-400 uppercase tracking-widest text-sm text-center">{stat.label}</h3>
            </article>
        </div>
    );
};

const StatsCounter = () => {
    return (
        <section className="row" aria-label="Statistics">
            {stats.map((stat, index) => (
                <StatsCounterItem key={index} stat={stat} index={index} />
            ))}
        </section>
    );
};
export default StatsCounter;
