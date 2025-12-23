import SpotlightCard from "@/components/SpotlightCard";

const SkillBadges = () => {
    return (
        <div className="row">
            <div className="col-lg-12">
                {/* title */}
                <h5 className="mb-10 relative flex items-end justify-between border-b border-white/10 pb-5 after:absolute after:bottom-[-1px] after:left-0 after:w-24 after:h-[2px] after:bg-primary after:shadow-neon-cyan">
                    <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">Profile Badges</span>
                    <i className="fas fa-medal text-2xl text-gray-700" />
                </h5>
            </div>

            {/* TryHackMe Badge */}
            <div className="col-lg-6 mb-8">
                <SpotlightCard
                    className="p-8 rounded-2xl h-full relative group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-neon-pink"
                    data-scroll=""
                    data-scroll-offset={40}
                >
                    <div className="flex flex-col items-center">
                        <div className="mb-6 font-bold text-2xl neon-text text-secondary tracking-wider uppercase">
                            Try Hack Me
                        </div>

                        <div className="relative mb-8 transform transition-transform duration-500 group-hover:scale-110">
                            <img
                                src="https://tryhackme-badges.s3.amazonaws.com/Coder4113n.png"
                                alt="TryHackMe"
                                className="drop-shadow-[0_0_15px_rgba(255,0,85,0.5)]"
                            />
                        </div>

                        <ul className="space-y-3 w-full border-t border-gray-800 pt-6">
                            <li className="flex items-center text-sm text-gray-300">
                                <span className="w-2 h-2 rounded-full bg-secondary mr-3 shadow-[0_0_5px_#ff0055]"></span>
                                In the top 8% of THM users
                            </li>
                            <li className="flex items-center text-sm text-gray-300">
                                <span className="w-2 h-2 rounded-full bg-secondary mr-3 shadow-[0_0_5px_#ff0055]"></span>
                                Hacker level
                            </li>
                            <li className="flex items-center text-sm text-gray-300">
                                <span className="w-2 h-2 rounded-full bg-secondary mr-3 shadow-[0_0_5px_#ff0055]"></span>
                                Completed 67 rooms
                            </li>
                            <li className="flex items-center text-sm text-gray-300">
                                <span className="w-2 h-2 rounded-full bg-secondary mr-3 shadow-[0_0_5px_#ff0055]"></span>
                                Achieved 13 badges
                            </li>
                        </ul>

                        <a href="https://tryhackme.com/p/Coder4113n" target="blank" className="mt-8 px-6 py-2 rounded-full border border-secondary text-secondary font-bold text-sm hover:bg-secondary hover:text-black hover:shadow-[0_0_15px_#ff0055] transition-all duration-300">
                            View Profile <i className="fas fa-arrow-right ml-2" />
                        </a>
                    </div>
                </SpotlightCard>
            </div>

            {/* HackTheBox Badge */}
            <div className="col-lg-6 mb-8">
                <SpotlightCard
                    className="p-8 rounded-2xl h-full relative group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-neon-cyan"
                    data-scroll=""
                    data-scroll-offset={40}
                >
                    <div className="flex flex-col items-center">
                        <div className="mb-6 font-bold text-2xl neon-text text-primary tracking-wider uppercase">
                            Hack The Box
                        </div>

                        <div className="relative mb-8 transform transition-transform duration-500 group-hover:scale-110">
                            <img
                                src="https://www.hackthebox.eu/badge/image/1746923"
                                alt="HackTheBox"
                                className="drop-shadow-[0_0_15px_rgba(0,242,234,0.5)]"
                            />
                        </div>

                        <ul className="space-y-3 w-full border-t border-gray-800 pt-6">
                            <li className="flex items-center text-sm text-gray-300">
                                <span className="w-2 h-2 rounded-full bg-primary mr-3 shadow-[0_0_5px_#00f2ea]"></span>
                                877<sup>th</sup> rank in the world
                            </li>
                            <li className="flex items-center text-sm text-gray-300">
                                <span className="w-2 h-2 rounded-full bg-primary mr-3 shadow-[0_0_5px_#00f2ea]"></span>
                                Noob level
                            </li>
                            <li className="flex items-center text-sm text-gray-300">
                                <span className="w-2 h-2 rounded-full bg-primary mr-3 shadow-[0_0_5px_#00f2ea]"></span>
                                0.2% of Hack The Box Pwned
                            </li>
                            <li className="flex items-center text-sm text-gray-300">
                                <span className="w-2 h-2 rounded-full bg-primary mr-3 shadow-[0_0_5px_#00f2ea]"></span>
                                4.4% towards Script Kiddie
                            </li>
                        </ul>

                        <a href="https://app.hackthebox.com/profile/1746923" target="blank" className="mt-8 px-6 py-2 rounded-full border border-primary text-primary font-bold text-sm hover:bg-primary hover:text-black hover:shadow-[0_0_15px_#00f2ea] transition-all duration-300">
                            View Profile <i className="fas fa-arrow-right ml-2" />
                        </a>
                    </div>
                </SpotlightCard>
            </div>
        </div>
    );
};
export default SkillBadges;
