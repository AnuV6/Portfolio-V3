import { Fragment } from "react";
import SpotlightCard from "@/components/SpotlightCard";

const Skills = () => {
    return (
        <Fragment>
            <LanguageSkills />
            <div className="h-12" />
            <HardSkills />
        </Fragment>
    );
};
export default Skills;

const softSkills = [
    { name: "Communication", level: "", icon: "fa-comments" },
    { name: "Critical Thinking", level: "", icon: "fa-lightbulb" },
    { name: "Team Collaboration", level: "", icon: "fa-users" },
    { name: "Problem Solving", level: "", icon: "fa-puzzle-piece" },
    { name: "Adaptability", level: "", icon: "fa-sync-alt" },
    { name: "Time Management", level: "", icon: "fa-clock" },
];

const LanguageSkills = () => {
    return (
        <section className="row" aria-labelledby="soft-skills-heading">
            <div className="col-lg-12">
                {/* title */}
                <h2 id="soft-skills-heading" className="mb-6 relative flex items-end justify-between border-b border-white/10 pb-4">
                    <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">Soft Skills</span>
                    <i className="fas fa-brain text-2xl text-gray-700" aria-hidden="true" />
                </h2>
            </div>
            <div className="col-lg-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {softSkills.map((skill, index) => (
                        <SpotlightCard
                            key={index}
                            className="p-5"
                            data-scroll
                            data-scroll-offset={40}
                        >
                            <div className="flex items-start gap-3">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                                    <i className={`fas ${skill.icon} text-primary text-xl`} aria-hidden="true" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-white text-lg mb-2">{skill.name}</h3>
                                    <div className="flex gap-1">
                                        {[...Array(skill.level === "Expert" ? 5 : 4)].map((_, i) => (
                                            <div key={i} className="h-1.5 w-full bg-primary/30 rounded-full">
                                                <div className="h-full bg-primary rounded-full" />
                                            </div>
                                        ))}
                                        {skill.level === "Advanced" && (
                                            <div className="h-1.5 w-full bg-gray-700 rounded-full" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

const hardSkills = [
    {
        name: "DevOps Practices",
        level: "Advanced",
        icon: "fa-infinity",
        years: "2+ years",
        tools: ["Docker", "Kubernetes", "Terraform"]
    },
    {
        name: "Cloud Computing",
        level: "Advanced",
        icon: "fa-cloud",
        years: "2+ years",
        tools: ["AWS", "Azure", "GCP"]
    },
    {
        name: "Web Development",
        level: "Expert",
        icon: "fa-code",
        years: "4+ years",
        tools: ["React", "Node.js", "Next.js"]
    },
    {
        name: "CI/CD Pipelines",
        level: "Advanced",
        icon: "fa-project-diagram",
        years: "2+ years",
        tools: ["GitHub Actions", "Azure DevOps", "Jenkins"]
    },
    {
        name: "Application Security",
        level: "Intermediate",
        icon: "fa-shield-alt",
        years: "2+ years",
        tools: ["OWASP", "Penetration Testing", "Security Audits"]
    },
    {
        name: "Networking",
        level: "Advanced",
        icon: "fa-network-wired",
        years: "3+ years",
        tools: ["TCP/IP", "DNS", "Load Balancing"]
    },
];

const HardSkills = () => {
    return (
        <section className="row" aria-labelledby="hard-skills-heading">
            <div className="col-lg-12">
                {/* title */}
                <h2 id="hard-skills-heading" className="mb-6 relative flex items-end justify-between border-b border-white/10 pb-4">
                    <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">Technical Skills</span>
                    <i className="fas fa-terminal text-2xl text-gray-700" aria-hidden="true" />
                </h2>
            </div>
            <div className="col-lg-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    {hardSkills.map((skill, index) => (
                        <SpotlightCard
                            key={index}
                            className="p-5"
                            data-scroll
                            data-scroll-offset={40}
                        >
                            <div className="flex items-start gap-3 mb-3">
                                <div className="w-12 h-12 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center justify-center flex-shrink-0">
                                    <i className={`fas ${skill.icon} text-secondary text-xl`} aria-hidden="true" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-white text-lg mb-1">{skill.name}</h3>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={`px-2 py-1 text-xs rounded font-medium ${skill.level === "Expert" ? "bg-secondary/20 text-secondary" :
                                            skill.level === "Advanced" ? "bg-primary/20 text-primary" :
                                                "bg-gray-700/50 text-gray-300"
                                            }`}>
                                            {skill.level}
                                        </span>
                                        <span className="text-xs text-gray-500">{skill.years}</span>
                                    </div>
                                    <div className="flex gap-1">
                                        {[...Array(
                                            skill.level === "Expert" ? 5 :
                                                skill.level === "Advanced" ? 4 : 3
                                        )].map((_, i) => (
                                            <div key={i} className="h-1.5 w-full bg-secondary/30 rounded-full">
                                                <div className="h-full bg-secondary rounded-full" />
                                            </div>
                                        ))}
                                        {[...Array(
                                            skill.level === "Expert" ? 0 :
                                                skill.level === "Advanced" ? 1 : 2
                                        )].map((_, i) => (
                                            <div key={`empty-${i}`} className="h-1.5 w-full bg-gray-700 rounded-full" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* Tools */}
                            <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-gray-700/30">
                                {skill.tools.map((tool, toolIndex) => (
                                    <span
                                        key={toolIndex}
                                        className="px-2 py-0.5 text-xs rounded bg-surface text-gray-400 border border-gray-700/50"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
