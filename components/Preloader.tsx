"use client";
import { Fragment, useEffect, useState } from "react";

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setIsLoading(false), 300);
        }, 500); // Show loader for 0.5 seconds (optimized)
        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <Fragment>
            <div className={`fixed inset-0 z-[9999] bg-gradient-to-br from-black via-[#0a0a0a] to-black flex items-center justify-center transition-all duration-500 ${fadeOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <div className="flex flex-col items-center gap-8">
                    {/* Animated Logo/Icon */}
                    <div className="relative w-24 h-24">
                        {/* Outer rotating ring */}
                        <div className="absolute inset-0 border-4 border-transparent border-t-primary border-r-primary rounded-full animate-spin shadow-[0_0_20px_rgba(0,212,204,0.5)]"></div>

                        {/* Middle rotating ring (opposite direction) */}
                        <div className="absolute inset-2 border-4 border-transparent border-b-secondary border-l-secondary rounded-full animate-spin-reverse shadow-[0_0_20px_rgba(255,26,110,0.5)]" style={{ animationDuration: '1.5s' }}></div>

                        {/* Inner pulsing circle */}
                        <div className="absolute inset-4 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse shadow-[0_0_30px_rgba(0,212,204,0.8)]"></div>

                        {/* Center icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <i className="fas fa-code text-white text-2xl animate-pulse"></i>
                        </div>
                    </div>

                    {/* Loading Text */}
                    <div className="flex flex-col items-center gap-3">
                        <div className="text-2xl font-bold text-white tracking-wider">
                            Coder<span className="text-primary neon-text">Allen</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce shadow-neon-cyan" style={{ animationDelay: '0s' }}></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce shadow-neon-cyan" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce shadow-neon-cyan" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                        <p className="text-gray-400 text-sm tracking-widest uppercase">Loading Portfolio</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Preloader;
