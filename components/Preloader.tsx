"use client";
import { Fragment, useEffect, useState } from "react";

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + Math.random() * 30;
            });
        }, 100);

        const timer = setTimeout(() => {
            setProgress(100);
            setFadeOut(true);
            setTimeout(() => setIsLoading(false), 500);
        }, 1500);

        return () => {
            clearTimeout(timer);
            clearInterval(progressInterval);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <Fragment>
            <div 
                className={`fixed inset-0 z-[9999] bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center transition-all duration-500 ${
                    fadeOut ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                }`}
            >
                {/* Animated background particles */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="relative flex flex-col items-center gap-8 z-10">
                    {/* Main loader animation */}
                    <div className="relative w-32 h-32">
                        {/* Outer glowing ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-cyan-400 to-primary opacity-20 blur-xl animate-pulse"></div>
                        
                        {/* Rotating outer ring */}
                        <div className="absolute inset-0 border-[3px] border-transparent border-t-primary border-r-primary rounded-full animate-spin shadow-[0_0_25px_rgba(0,212,204,0.6)]"></div>

                        {/* Counter-rotating middle ring */}
                        <div 
                            className="absolute inset-3 border-[3px] border-transparent border-b-cyan-400 border-l-cyan-400 rounded-full animate-spin-reverse shadow-[0_0_20px_rgba(0,212,204,0.4)]" 
                            style={{ animationDuration: '2s' }}
                        ></div>

                        {/* Inner pulsing gradient */}
                        <div className="absolute inset-6 bg-gradient-to-br from-primary/30 to-cyan-500/30 rounded-full animate-pulse shadow-[0_0_40px_rgba(0,212,204,0.4)]"></div>

                        {/* Center icon with glow */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 blur-md bg-primary/50 rounded-full"></div>
                                <i className="fas fa-code text-white text-3xl relative z-10 animate-pulse"></i>
                            </div>
                        </div>

                        {/* Orbiting dots */}
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full shadow-neon-cyan"></div>
                        </div>
                        <div className="absolute inset-0 animate-spin-reverse" style={{ animationDuration: '4s' }}>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-neon-cyan"></div>
                        </div>
                    </div>

                    {/* Brand text with typing effect */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="text-3xl font-bold text-white tracking-wider">
                            <span className="inline-block animate-fade-in">A</span>
                            <span className="inline-block animate-fade-in" style={{ animationDelay: '0.1s' }}>n</span>
                            <span className="inline-block animate-fade-in" style={{ animationDelay: '0.2s' }}>u</span>
                            <span className="inline-block animate-fade-in" style={{ animationDelay: '0.3s' }}>p</span>
                            <span className="inline-block animate-fade-in" style={{ animationDelay: '0.4s' }}>a</span>
                            <span className="text-primary neon-text inline-block animate-fade-in ml-2" style={{ animationDelay: '0.5s' }}>D</span>
                            <span className="text-primary neon-text inline-block animate-fade-in" style={{ animationDelay: '0.6s' }}>i</span>
                            <span className="text-primary neon-text inline-block animate-fade-in" style={{ animationDelay: '0.7s' }}>n</span>
                            <span className="text-primary neon-text inline-block animate-fade-in" style={{ animationDelay: '0.8s' }}>u</span>
                            <span className="text-primary neon-text inline-block animate-fade-in" style={{ animationDelay: '0.9s' }}>r</span>
                            <span className="text-primary neon-text inline-block animate-fade-in" style={{ animationDelay: '1.0s' }}>a</span>
                            <span className="text-primary neon-text inline-block animate-fade-in" style={{ animationDelay: '1.1s' }}>n</span>
                            <span className="text-primary neon-text inline-block animate-fade-in" style={{ animationDelay: '1.2s' }}>g</span>
                            <span className="text-primary neon-text inline-block animate-fade-in" style={{ animationDelay: '1.3s' }}>a</span>
                        </div>

                        {/* Progress bar */}
                        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-gradient-to-r from-primary via-cyan-400 to-primary rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(0,212,204,0.8)]"
                                style={{ width: `${Math.min(progress, 100)}%` }}
                            ></div>
                        </div>

                        {/* Loading percentage */}
                        <div className="flex items-center gap-3">
                            <span className="text-primary font-mono text-sm font-bold">
                                {Math.floor(Math.min(progress, 100))}%
                            </span>
                            <div className="flex gap-1">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce shadow-neon-cyan" style={{ animationDelay: '0s' }}></div>
                                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce shadow-neon-cyan" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce shadow-neon-cyan" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                        </div>

                        <p className="text-gray-400 text-xs tracking-[0.3em] uppercase animate-pulse">
                            Loading Experience
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Preloader;
