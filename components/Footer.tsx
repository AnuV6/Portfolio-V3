const Footer = () => {
    return (
        <footer
            className="w-full py-8 mt-16 border-t border-white/10"
            data-scroll
            data-scroll-offset={50}
        >
            <div className="container mx-auto px-4">
                <div className="glass-card p-6 md:p-8 rounded-2xl">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Left: Brand */}
                        <div className="flex flex-col items-center md:items-start">
                            <div className="font-bold text-2xl tracking-wider text-white mb-2">
                                Coder<span className="text-primary neon-text">Allen</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-2">Building the future, one line at a time</p>
                            <a 
                                href="mailto:contact@anupa.live" 
                                className="text-primary hover:text-white transition-colors text-sm flex items-center gap-2"
                            >
                                <i className="fas fa-envelope" />
                                contact@anupa.live
                            </a>
                        </div>

                        {/* Center: Quick Links */}
                        <div className="flex gap-8">
                            <div>
                                <h6 className="text-white font-bold mb-3 text-xs uppercase tracking-wider">Navigate</h6>
                                <ul className="space-y-2 text-sm">
                                    <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
                                    <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About</a></li>
                                    <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
                                </ul>
                            </div>
                            <div>
                                <h6 className="text-white font-bold mb-3 text-xs uppercase tracking-wider">Connect</h6>
                                <ul className="space-y-2 text-sm">
                                    <li><a href="https://github.com/AnuV6" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">GitHub</a></li>
                                    <li><a href="https://www.linkedin.com/in/anupadinuranga/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">LinkedIn</a></li>
                                    <li><a href="https://twitter.com/AnuV6" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">Twitter</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Right: Social Icons */}
                        <div className="flex gap-3">
                            <a href="https://github.com/AnuV6" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-surface/50 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:shadow-neon-cyan transition-all duration-300" aria-label="GitHub">
                                <i className="fab fa-github" />
                            </a>
                            <a href="https://www.linkedin.com/in/anupadinuranga/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-surface/50 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:shadow-neon-cyan transition-all duration-300" aria-label="LinkedIn">
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a href="https://twitter.com/AnuV6" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-surface/50 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:shadow-neon-cyan transition-all duration-300" aria-label="Twitter">
                                <i className="fab fa-twitter" />
                            </a>
                        </div>
                    </div>

                    {/* Bottom: Copyright */}
                    <div className="mt-6 pt-6 border-t border-white/5 text-center">
                        <div className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Anupa Dinuranga. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
