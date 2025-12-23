import Preloader from "../components/Preloader";
import ErrorBoundary from "../components/ErrorBoundary";
import "../public/css/plugins/bootstrap.min.css";
import "../public/css/plugins/font-awesome.min.css";
import "../public/css/plugins/locomotive-scroll.css";
import "../public/css/plugins/swiper.min.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./globals.css";
import State from "../context/context";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Anupa Dinuranga",
    description: "Anupa Dinuranga is a DevOps Engineer, Web Developer, and Cyber Security Researcher. He specializes in cloud computing, automation, and continuous integration/continuous deployment (CI/CD). He is proficient in AWS, Azure, and Google Cloud Platform (GCP). He is also a Web Security Expert, Fullstack Developer, and CTF Enthusiast.",
    keywords: "Anupa Dinuranga, DevOps Engineer, Cloud Computing, AWS, Azure, GCP, CI/CD, Automation, Docker, Web Developer, Portfolio, React, Next.js, Cyber Security, Ethical Hacking, Penetration Testing, Web Design, Web Security, Fullstack Developer, Frontend Developer, Backend Developer, MERN Stack Developer, CTF player",
    openGraph: {
        title: "Anupa Dinuranga",
        description: "Anupa Dinuranga is a DevOps Engineer, Web Developer, and Cyber Security Researcher.",
        url: "https://www.anupa.live",
        siteName: "Anupa Dinuranga Portfolio",
        images: [
            {
                url: "https://www.anupa.live/img/avatar.avif",
                width: 800,
                height: 600,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Anupa Dinuranga",
        description: "Anupa Dinuranga is a DevOps Engineer, Web Developer, and Cyber Security Researcher.",
        images: ["https://www.anupa.live/img/avatar.avif"],
    },
};

import { Inter, Outfit } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
            <body suppressHydrationWarning={true}>
                {/* Skip Navigation Links */}
                <a href="#main-content" className="skip-link">
                    Skip to main content
                </a>
                <a href="#contact" className="skip-link">
                    Skip to contact
                </a>
                
                <State>
                    <ErrorBoundary>
                        <div className="min-h-screen bg-transparent text-white overflow-x-hidden relative">
                            <Preloader />
                            <div id="trm-dynamic-content" className="w-full relative transition-opacity duration-500 ease-in-out">
                                <div
                                    id="main-content"
                                    className="w-full min-h-screen transition-opacity duration-300"
                                    role="main"
                                >
                                    {children}
                                </div>
                            </div>
                        </div>
                    </ErrorBoundary>
                </State>
            </body>
        </html>
    );
}
