"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCreative } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";

const Achievements = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const achievements = [
        {
            image: "/img/certificates/sliit.png",
            title: "Winner of CyberShield 4.0",
            institution: "SLIIT",
            badge: "1st Place",
            badgeIcon: "trophy",
            type: "award",
            color: "primary",
            description: "Secured the 1st place in the CyberShield 4.0 CTF competition organized by SLIIT, demonstrating exceptional cybersecurity skills and problem-solving abilities."
        },
        {
            image: "/img/certificates/medusa.webp",
            title: "Champions of Medusa 1.0",
            institution: "University of Kelaniya",
            badge: "1st Place",
            badgeIcon: "trophy",
            type: "award",
            color: "secondary",
            description: "Secured the 1st place in the Medusa 1.0 CTF competition organized by the University of Kelaniya, demonstrating exceptional cybersecurity skills and problem-solving abilities."
        },
        {
            image: "/img/certificates/cicra.webp",
            title: "10th Annual Cyber Security Summit 2024",
            institution: "CICRA Campus",
            badge: "2nd Runners-up",
            badgeIcon: "medal",
            type: "award",
            color: "primary",
            description: "Achieved 2nd runners-up in the CTF Challenge at the 10th Annual Cyber Security Summit 2024, organized by CICRA Campus, competing against top cybersecurity talents."
        },
        {
            image: "/img/certificates/nsbm.webp",
            title: "Algoxplore 1.0",
            institution: "NSBM Green University",
            badge: "Participant",
            badgeIcon: "users",
            type: "award",
            color: "secondary",
            description: "Participated in the Inter-University Hackathon Algoxplore 1.0 with team Yakuza. This incredible journey was filled with challenges, learning, and teamwork."
        },
        {
            image: "/img/certificates/1.webp",
            title: "Introduction To Cybersecurity",
            institution: "TryHackMe",
            badge: "Certified",
            badgeIcon: "certificate",
            type: "certification",
            color: "primary",
            description: "Covers the basics of cybersecurity, networking, and Linux fundamentals. A comprehensive introduction to cybersecurity concepts and practical skills."
        },
        {
            image: "/img/certificates/3.webp",
            title: "Web Fundamentals",
            institution: "TryHackMe",
            badge: "Certified",
            badgeIcon: "certificate",
            type: "certification",
            color: "secondary",
            description: "Covers the basics of web security, networking, and Linux fundamentals. Essential knowledge for web application security and penetration testing."
        },
        {
            image: "/img/certificates/2.webp",
            title: "Pre Security",
            institution: "TryHackMe",
            badge: "Certified",
            badgeIcon: "certificate",
            type: "certification",
            color: "primary",
            description: "Acquired the prerequisite technical knowledge necessary to begin a career in cybersecurity, essential for both offensive and defensive security."
        },
        {
            image: "/img/certificates/4.webp",
            title: "Getting Started with Power BI Desktop",
            institution: "Coursera",
            badge: "Certified",
            badgeIcon: "certificate",
            type: "certification",
            color: "secondary",
            description: "Covers the basics of Power BI Desktop, data visualization, and data analysis. Essential skills for business intelligence and data-driven decision making."
        },
        {
            image: "/img/certificates/5.webp",
            title: "Hybrid and Azure Cloud Foundations Workshop",
            institution: "NextGen Campus",
            badge: "Certified",
            badgeIcon: "certificate",
            type: "certification",
            color: "primary",
            description: "Covers the basics of cloud computing (Azure), networking, and Linux. Foundation for cloud infrastructure and hybrid cloud solutions."
        },
        {
            image: "/img/certificates/ecu.webp",
            title: "Techno-Trek CTF 2023",
            institution: "Edith Cowan University - Sri Lanka",
            badge: "Participant",
            badgeIcon: "flag",
            type: "award",
            color: "secondary",
            description: "Participated in the Techno-Trek CTF 2023, a Capture The Flag competition organized by Edith Cowan University - Sri Lanka."
        },
        {
            image: "/img/certificates/kdu.webp",
            title: "Cypher 2.0 CTF Competition",
            institution: "AION x IEEE in KDU",
            badge: "4th Place",
            badgeIcon: "medal",
            type: "award",
            color: "primary",
            description: "Achieved 4th place in the Cypher 2.0 CTF Competition organized by AION x IEEE WIE Student Branch of General Sir John Kotelawala Defence University."
        }
    ];

    return (
        <section className="row" aria-labelledby="achievements-heading">
            <div className="col-lg-12">
                {/* title */}
                <h2 id="achievements-heading" className="mb-10 relative flex items-end justify-between border-b border-white/10 pb-4">
                    <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">Awards & Certifications</span>
                    <i className="fas fa-trophy text-2xl text-gray-700" aria-hidden="true" />
                </h2>

                {/* Full Width Card Slider */}
                <div className="relative max-w-5xl mx-auto group/slider">
                    {/* Navigation Arrows - Hidden until hover */}
                    <button
                        className="achievements-prev absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/60 flex items-center justify-center cursor-pointer hover:bg-primary hover:scale-110 hover:border-primary transition-all duration-300 shadow-neon-cyan backdrop-blur-sm group opacity-0 group-hover/slider:opacity-100"
                        aria-label="Previous slide"
                    >
                        <i className="fas fa-chevron-left text-primary group-hover:text-black text-xl md:text-2xl transition-colors" />
                    </button>
                    <button
                        className="achievements-next absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/60 flex items-center justify-center cursor-pointer hover:bg-primary hover:scale-110 hover:border-primary transition-all duration-300 shadow-neon-cyan backdrop-blur-sm group opacity-0 group-hover/slider:opacity-100"
                        aria-label="Next slide"
                    >
                        <i className="fas fa-chevron-right text-primary group-hover:text-black text-xl md:text-2xl transition-colors" />
                    </button>

                    {/* Swiper Slider */}
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectCreative]}
                        effect="creative"
                        creativeEffect={{
                            prev: {
                                shadow: false,
                                translate: ['-120%', 0, -500],
                                opacity: 0,
                            },
                            next: {
                                shadow: false,
                                translate: ['120%', 0, -500],
                                opacity: 0,
                            },
                        }}
                        slidesPerView={1}
                        spaceBetween={30}
                        navigation={{
                            prevEl: '.achievements-prev',
                            nextEl: '.achievements-next',
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                            el: '.achievements-pagination',
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        speed={1000}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        className="achievements-swiper !pb-16"
                    >
                        {achievements.map((achievement, index) => {
                            const isPrimary = achievement.color === 'primary';
                            const borderColor = isPrimary ? 'border-primary/50' : 'border-secondary/50';
                            const shadowClass = isPrimary ? 'shadow-neon-cyan' : 'shadow-neon-pink';
                            const bgColor = isPrimary ? 'bg-primary/20' : 'bg-secondary/20';
                            const textColor = isPrimary ? 'text-primary' : 'text-secondary';
                            const hoverBgColor = isPrimary ? 'hover:bg-primary' : 'hover:bg-secondary';
                            const borderHoverColor = isPrimary ? 'hover:border-primary' : 'hover:border-secondary';
                            const gradientFrom = isPrimary ? 'from-primary/20' : 'from-secondary/20';

                            return (
                                <SwiperSlide key={index} className="h-auto">
                                    <div className="glass-card p-8 md:p-10 rounded-2xl h-full relative group transform transition-all duration-300 hover:shadow-2xl overflow-hidden">
                                        {/* Decorative corner gradient */}
                                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${gradientFrom} to-transparent rounded-tr-2xl`} />

                                        {/* Main Content - Horizontal Layout */}
                                        <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
                                            {/* Large Certificate Image */}
                                            <div className={`relative w-full lg:w-1/2 aspect-[4/3] rounded-xl overflow-hidden border-2 ${borderColor} ${shadowClass} cursor-pointer transition-all duration-300 bg-surface/50 flex-shrink-0 hover:scale-105 hover:shadow-2xl group/img`}>
                                                <a data-fancybox="certificates" href={achievement.image} data-caption={`<div class="text-center"><h3 class="text-xl font-bold mb-2">${achievement.title}</h3><p class="text-sm text-primary">${achievement.institution}</p><p class="mt-3 text-sm">${achievement.description}</p></div>`} className="block w-full h-full">
                                                    <Image
                                                        src={achievement.image}
                                                        alt={achievement.title}
                                                        fill
                                                        className="object-contain p-4"
                                                        loading="lazy"
                                                    />
                                                </a>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex flex-col items-center justify-center">

                                                </div>
                                            </div>

                                            {/* Certificate Details */}
                                            <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
                                                {/* Badge */}
                                                <div className={`inline-flex items-center gap-2 px-4 py-2 ${bgColor} ${textColor} rounded-full text-sm font-bold uppercase tracking-wider mb-4 w-fit mx-auto lg:mx-0 border ${borderColor}`}>
                                                    <i className={`fas fa-${achievement.badgeIcon}`} /> {achievement.badge}
                                                </div>

                                                {/* Title */}
                                                <h3 className="font-bold text-white mb-3 text-2xl md:text-3xl leading-tight">
                                                    {achievement.title}
                                                </h3>

                                                {/* Institution */}
                                                <div className={`${textColor} text-base md:text-lg italic mb-5 flex items-center gap-2 justify-center lg:justify-start`}>
                                                    <i className={`fas fa-${achievement.type === 'certification' ? 'graduation-cap' : 'university'}`} />
                                                    {achievement.institution}
                                                </div>

                                                {/* Description */}
                                                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                                    {achievement.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Progress Indicator */}
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-xs text-gray-500">
                                            <span className="font-mono">{(index + 1).toString().padStart(2, '0')} / {achievements.length.toString().padStart(2, '0')}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* Custom Pagination */}
                    <div className="achievements-pagination mt-8 flex justify-center gap-2"></div>
                </div>
            </div>
        </section>
    );
};
export default Achievements;
