"use client";
import SpotlightCard from "@/components/SpotlightCard";
import { typing } from "@/utility/typing";
import { useEffect } from "react";
import Image from "next/image";

const ProfileSidebar = () => {
    useEffect(() => {
        typing();
    }, []);

    return (
        <div className="w-full" aria-label="Profile information">
            {/* main card */}
            <div className="w-full relative z-10">
                <SpotlightCard
                    className="p-6 xl:p-7 overflow-hidden relative shadow-[0_20px_60px_0_rgba(0,212,204,0.15)] hover:shadow-[0_20px_80px_0_rgba(0,212,204,0.25)] transition-shadow duration-500"
                >
                    {/* card header */}
                    <div className="flex flex-col items-center text-center relative z-20 pt-6">
                        <div className="relative mb-6 group">
                            <div className="relative w-[100px] h-[100px] rounded-full p-1 ring-2 ring-primary/50 shadow-neon-cyan overflow-hidden group-hover:ring-primary transition-all duration-300">
                                <Image
                                    className="rounded-full object-cover w-full h-full"
                                    src="/img/avatar.avif"
                                    alt="Avatar"
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#1a1a1a]" />
                        </div>

                        <h5 className="text-2xl font-bold mb-3 text-white neon-text">
                            Anupa Dinuranga
                        </h5>

                        <div className="text-gray-400 text-sm font-medium tracking-wide mb-2">
                            I'm{" "}
                            <span className="text-primary neon-typed-text font-bold">
                                {/* Words for rotation: js/main.js line 34 */}
                            </span>
                        </div>
                    </div>
                    {/* card header end */}

                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent my-5" />

                    {/* sidebar social */}
                    <div className="flex flex-row justify-center items-center gap-3 flex-nowrap" aria-label="Social media links">
                        <a
                            href="https://www.linkedin.com/in/anupadinuranga/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-lg inline-flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/10 transition-all duration-300 group flex-shrink-0"
                            aria-label="LinkedIn profile"
                        >
                            <i className="fab fa-linkedin-in text-base group-hover:scale-110 transition-transform" aria-hidden="true" />
                        </a>
                        <a
                            href="https://www.github.com/AnuV6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-lg inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 group flex-shrink-0"
                            aria-label="GitHub profile"
                        >
                            <i className="fab fa-github text-base group-hover:scale-110 transition-transform" aria-hidden="true" />
                        </a>
                        <a
                            href="https://stackoverflow.com/users/12830080/coder-allen"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-lg inline-flex items-center justify-center text-gray-400 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-300 group flex-shrink-0"
                            aria-label="Stack Overflow profile"
                        >
                            <i className="fab fa-stack-overflow text-base group-hover:scale-110 transition-transform" aria-hidden="true" />
                        </a>
                        <a
                            href="https://www.facebook.com/anupadinuranga3/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-lg inline-flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300 group flex-shrink-0"
                            aria-label="Facebook profile"
                        >
                            <i className="fab fa-facebook-f text-base group-hover:scale-110 transition-transform" aria-hidden="true" />
                        </a>
                    </div>

                    {/* sidebar social end */}
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent my-4" />

                    {/* info */}
                    <ul className="space-y-2.5 relative z-20">
                        {/* country */}
                        <li className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">Residence:</span>
                            <span className="text-white font-medium">Sri Lanka</span>
                        </li>
                        {/* city */}
                        <li className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">City:</span>
                            <span className="text-white font-medium">Homagama</span>
                        </li>
                        {/* age */}
                        <li className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">Age:</span>
                            <span className="text-white font-medium">{new Date().getFullYear() - 2001}</span>
                        </li>
                    </ul>
                    {/* info end */}

                    {/* action button */}
                    <div className="text-center mt-6 cursor-pointer z-50 relative">
                        <a 
                            href="#contact" 
                            className="inline-block px-7 py-2.5 rounded-full bg-gradient-to-r from-primary to-blue-500 text-black font-bold text-sm uppercase tracking-wider hover:shadow-neon-cyan transition-all duration-300 transform hover:scale-105"
                            aria-label="Contact me"
                        >
                            Contact me <i className="far fa-envelope ml-2" aria-hidden="true" />
                        </a>
                    </div>

                    {/* Download CV Button */}
                    <div className="text-center mt-3 z-50 relative">
                        <a 
                            href="/files/AnupaDinuranga_cv.pdf" 
                            download="AnupaDinuranga_CV.pdf"
                            className="inline-block px-7 py-2.5 rounded-full border-2 border-primary/30 text-primary bg-primary/10 font-bold text-sm uppercase tracking-wider hover:bg-primary hover:text-black hover:border-primary hover:shadow-neon-cyan transition-all duration-300 transform hover:scale-105"
                            aria-label="Download CV"
                        >
                            Download CV <i className="fas fa-download ml-2" aria-hidden="true" />
                        </a>
                    </div>
                </SpotlightCard>
            </div>
            {/* main card end */}
        </div>
    );
};
export default ProfileSidebar;
