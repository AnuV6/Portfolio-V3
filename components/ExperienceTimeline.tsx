const ExperienceTimeline = () => {
    return (
        <div className="row">
            <div className="col-lg-12">
                {/* title */}
                <h5 className="mb-8 relative flex items-end justify-between border-b border-white/10 pb-4 after:absolute after:bottom-[-1px] after:left-0 after:w-24 after:h-[2px] after:bg-primary after:shadow-neon-cyan">
                    <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">My Journey</span>
                    <i className="fas fa-route text-2xl text-gray-700" />
                </h5>
            </div>
            <div className="col-lg-6">
                {/* timeline */}
                <div className="relative border-l-2 border-primary/30 ml-4 space-y-6">
                    
                    <div
                        className="relative pl-8"
                        data-scroll
                        data-scroll-offset={40}
                    >
                        <div className="absolute top-1 left-[-9px] w-4 h-4 rounded-full bg-primary shadow-neon-cyan ring-4 ring-background animate-pulse" />
                        <div className="glass-card p-5 rounded-xl relative group hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 hover:shadow-neon-cyan">
                            <div className="flex items-start gap-3 mb-3">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-briefcase text-primary text-sm" />
                                </div>
                                <div className="flex-1">
                                    <h6 className="font-bold text-white mb-1 text-base">Associate DevOps Engineer</h6>
                                    <div className="text-primary text-xs font-medium flex items-center gap-2">
                                        <i className="fas fa-calendar-alt" />
                                        Nov 2025 - Present
                                    </div>
                                </div>
                                <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                                    Current
                                </span>
                            </div>
                            <div className="text-gray-400 text-sm leading-relaxed">
                                Currently working at <span className="text-primary font-semibold">BISTEC Global Services</span>, gaining hands-on experience in DevOps practices, CI/CD pipelines, cloud infrastructure, and containerization technologies.
                            </div>
                            <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-700/30">
                                {["Azure", "Docker", "Kubernetes", "CI/CD"].map((tech, i) => (
                                    <span key={i} className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary border border-primary/20">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div
                        className="relative pl-8"
                        data-scroll
                        data-scroll-offset={40}
                    >
                        <div className="absolute top-1 left-[-9px] w-4 h-4 rounded-full bg-primary shadow-neon-cyan ring-4 ring-background" />
                        <div className="glass-card p-5 rounded-xl relative group hover:bg-primary/5 hover:border-primary/30 transition-all duration-300">
                            <div className="flex items-start gap-3 mb-3">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-user-graduate text-primary text-sm" />
                                </div>
                                <div className="flex-1">
                                    <h6 className="font-bold text-white mb-1 text-base">Intern DevOps Engineer</h6>
                                    <div className="text-primary text-xs font-medium flex items-center gap-2">
                                        <i className="fas fa-calendar-alt" />
                                        May 2025 - Nov 2025
                                    </div>
                                </div>
                            </div>
                            <div className="text-gray-400 text-sm leading-relaxed">
                                Completed internship at <span className="text-primary font-semibold">BISTEC Global Services</span>, learning DevOps fundamentals, automation tools, and cloud platform management.
                            </div>
                        </div>
                    </div>

                    <div
                        className="relative pl-8"
                        data-scroll
                        data-scroll-offset={40}
                    >
                        <div className="absolute top-1 left-[-9px] w-4 h-4 rounded-full bg-secondary shadow-neon-pink ring-4 ring-background" />
                        <div className="glass-card p-5 rounded-xl relative group hover:bg-secondary/5 hover:border-secondary/30 transition-all duration-300">
                            <div className="flex items-start gap-3 mb-3">
                                <div className="w-10 h-10 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-graduation-cap text-secondary text-sm" />
                                </div>
                                <div className="flex-1">
                                    <h6 className="font-bold text-white mb-1 text-base">Bachelor's Degree in ICT</h6>
                                    <div className="text-secondary text-xs font-medium flex items-center gap-2">
                                        <i className="fas fa-university" />
                                        USJP | 2021 - 2026
                                    </div>
                                </div>
                            </div>
                            <div className="text-gray-400 text-sm leading-relaxed">
                                Pursuing Bachelor's degree at the <span className="text-white font-semibold">University of Sri Jayewardenepura</span>, specializing in networking with hands-on experience in multiple networking projects. Active member of the university's IT society.
                            </div>
                        </div>
                    </div>

                </div>
                {/* timeline end */}
            </div>
            <div className="col-lg-6">
                <div className="relative border-l-2 border-secondary/30 ml-4 space-y-6 mt-6 lg:mt-0">
                    <div
                        className="relative pl-8"
                        data-scroll
                        data-scroll-offset={40}
                    >
                        <div className="absolute top-1 left-[-9px] w-4 h-4 rounded-full bg-secondary shadow-neon-pink ring-4 ring-background" />
                        <div className="glass-card p-5 rounded-xl relative group hover:bg-secondary/5 hover:border-secondary/30 transition-all duration-300">
                            <div className="flex items-start gap-3 mb-3">
                                <div className="w-10 h-10 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-laptop-code text-secondary text-sm" />
                                </div>
                                <div className="flex-1">
                                    <h6 className="font-bold text-white mb-1 text-base">Freelance Developer</h6>
                                    <div className="text-secondary text-xs font-medium flex items-center gap-2">
                                        <i className="fas fa-calendar-alt" />
                                        Jan 2018 - Present
                                    </div>
                                </div>
                            </div>
                            <div className="text-gray-400 text-sm leading-relaxed">
                                Freelancing in <span className="text-white font-semibold">Full-stack Web Development</span>, <span className="text-white font-semibold">Mobile App Development</span>, and <span className="text-white font-semibold">DevOps</span>. Completed projects for clients worldwide.
                            </div>
                            <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-700/30">
                                {["React", "Node.js", "Flutter", "DevOps"].map((tech, i) => (
                                    <span key={i} className="px-2 py-0.5 text-xs rounded bg-secondary/10 text-secondary border border-secondary/20">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div
                        className="relative pl-8"
                        data-scroll
                        data-scroll-offset={40}
                    >
                        <div className="absolute top-1 left-[-9px] w-4 h-4 rounded-full bg-primary shadow-neon-cyan ring-4 ring-background" />
                        <div className="glass-card p-5 rounded-xl relative group hover:bg-primary/5 hover:border-primary/30 transition-all duration-300">
                            <div className="flex items-start gap-3 mb-3">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-flag text-primary text-sm" />
                                </div>
                                <div className="flex-1">
                                    <h6 className="font-bold text-white mb-1 text-base">CTF Player</h6>
                                    <div className="text-primary text-xs font-medium flex items-center gap-2">
                                        <i className="fas fa-calendar-alt" />
                                        Jan 2022 - Present
                                    </div>
                                </div>
                            </div>
                            <div className="text-gray-400 text-sm leading-relaxed">
                                Member of <span className="text-primary font-semibold">Team YAKUZA</span> (USJP CTF team), specializing in solving cybersecurity challenges in Capture The Flag competitions.
                            </div>
                            <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-700/30">
                                {["CTF", "Cybersecurity", "Team YAKUZA"].map((tech, i) => (
                                    <span key={i} className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary border border-primary/20">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                
                    <div
                        className="relative pl-8"
                        data-scroll
                        data-scroll-offset={40}
                    >
                        <div className="absolute top-1 left-[-9px] w-4 h-4 rounded-full bg-secondary shadow-neon-pink ring-4 ring-background" />
                        <div className="glass-card p-5 rounded-xl relative group hover:bg-secondary/5 hover:border-secondary/30 transition-all duration-300">
                            <div className="flex items-start gap-3 mb-3">
                                <div className="w-10 h-10 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-school text-secondary text-sm" />
                                </div>
                                <div className="flex-1">
                                    <h6 className="font-bold text-white mb-1 text-base">GCE Advanced Level</h6>
                                    <div className="text-secondary text-xs font-medium flex items-center gap-2">
                                        <i className="fas fa-calendar-alt" />
                                        Technology Stream - 2020
                                    </div>
                                </div>
                            </div>
                            <div className="text-gray-400 text-sm leading-relaxed">
                                Completed A Levels in <span className="text-white font-semibold">Technology Stream</span> (ICT, SFT, ET) with all A's and B's. Achieved a <span className="text-secondary font-bold">Z-score of 2.2025</span>, securing admission to USJP.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ExperienceTimeline;
