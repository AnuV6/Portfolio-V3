const AboutSection = () => {
    return (
        <section 
            id="about"
            className="w-full" 
            aria-labelledby="about-heading"
            data-scroll
            data-scroll-repeat
            data-scroll-offset={300}
        >
            <div className="w-full">
                {/* title */}
                <h2 id="about-heading" className="mb-6 relative flex items-end justify-between border-b border-white/10 pb-4 after:absolute after:bottom-[-1px] after:left-0 after:w-24 after:h-[2px] after:bg-primary after:shadow-neon-cyan">
                    <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">About Me</span>
                    <i className="fas fa-user-astronaut text-2xl text-gray-700" aria-hidden="true" />
                </h2>
                {/* quote */}
                <blockquote
                    className="glass-card p-6 md:p-8 rounded-2xl relative"
                    data-scroll=""
                    data-scroll-offset={40}
                >
                    <p className="font-serif italic text-lg md:text-xl text-gray-300 leading-relaxed text-center relative z-10">
                        ICT undergraduate and Associate DevOps Engineer with a passion for Cybersecurity. Building my career in DevOps by combining technical expertise to create secure, automated systems. My goal is to integrate cybersecurity and DevOps knowledge for a future in DevSecOps.
                    </p>
                    <div className="absolute top-4 left-4 text-6xl text-primary opacity-20 font-serif" aria-hidden="true">"</div>
                    <div className="absolute bottom-4 right-4 text-6xl text-secondary opacity-20 font-serif" aria-hidden="true">"</div>
                </blockquote>
                {/* quote end */}
            </div>
        </section>
    );
};
export default AboutSection;
