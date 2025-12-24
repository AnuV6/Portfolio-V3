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
            <head>
                {/* Mobile browser theme color - set to black instead of cyan */}
                <meta name="theme-color" content="#0a0a0a" />
                <meta name="msapplication-navbutton-color" content="#0a0a0a" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                
                {/* Suppress hydration warnings caused by browser extensions in development */}
                {process.env.NODE_ENV === 'development' && (
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                (function() {
                                    const originalError = console.error;
                                    console.error = function(...args) {
                                        if (
                                            typeof args[0] === 'string' && 
                                            (args[0].includes('Hydration') || 
                                             args[0].includes('hydrated') ||
                                             args[0].includes('bis_skin_checked'))
                                        ) {
                                            return;
                                        }
                                        originalError.apply(console, args);
                                    };
                                })();
                            `,
                        }}
                    />
                )}
            </head>
            <body suppressHydrationWarning={true}>
                {/* Skip Navigation Links */}
                <a href="#main-content" className="skip-link" suppressHydrationWarning>
                    Skip to main content
                </a>
                <a href="#contact" className="skip-link" suppressHydrationWarning>
                    Skip to contact
                </a>
                
                <State>
                    <ErrorBoundary>
                        <div className="min-h-screen bg-transparent text-white overflow-x-hidden relative" suppressHydrationWarning>
                            <Preloader />
                            <div id="trm-dynamic-content" className="w-full relative transition-opacity duration-500 ease-in-out" suppressHydrationWarning>
                                <div
                                    id="main-content"
                                    className="w-full min-h-screen transition-opacity duration-300"
                                    role="main"
                                    suppressHydrationWarning
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
