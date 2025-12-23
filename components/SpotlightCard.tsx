"use client";
import { ReactNode, useRef, MouseEvent } from "react";

interface SpotlightCardProps {
    children: ReactNode;
    className?: string;
    spotlightColor?: string;
    [key: string]: any; // for data-scroll and other attributes
}

const SpotlightCard = ({ 
    children, 
    className = "", 
    spotlightColor = "rgba(0, 212, 204, 0.15)",
    ...props 
}: SpotlightCardProps) => {
    const divRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        divRef.current.style.setProperty("--mouse-x", `${x}px`);
        divRef.current.style.setProperty("--mouse-y", `${y}px`);
        divRef.current.style.setProperty("--spotlight-color", spotlightColor);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            className={`spotlight-card glass-card rounded-2xl relative overflow-hidden group ${className}`}
            {...props}
        >
            <div className="spotlight-effect" />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default SpotlightCard;
