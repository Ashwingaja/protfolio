import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, tags, link, github, highlights }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-colors shadow-lg flex flex-col h-full"
    >
        <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-md">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="space-y-2 mb-6 flex-1">
                {highlights.map((highlight, index) => (
                    <p key={index} className="text-slate-400 text-sm flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        {highlight}
                    </p>
                ))}
            </div>

            <div className="flex gap-4 mt-auto">
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                        <ExternalLink size={16} />
                        Live Demo
                    </a>
                )}
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-300 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                        <Github size={16} />
                        Code
                    </a>
                )}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "Student Satisfaction Web Dashboard",
            tags: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
            link: "https://student-satif-web-dashbord-front-en.vercel.app/",
            highlights: [
                "Improved UI/UX through analytics-driven insights",
                "Debugged backend and optimized SQL queries",
                "Boosted overall system performance by 50%"
            ]
        },
        {
            title: "Poultry Farm Feed Management System",
            tags: ["Python", "Flask", "ML", "HTML/CSS"],
            github: "https://github.com/Ashwingaja/Ashwingaja-Poultry-farm-feed-management-web-application",
            highlights: [
                "Built ML-based feed prediction system",
                "Achieved 92% accuracy in predictions",
                "Automated workflow reducing manual work by 50%"
            ]
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <p className="text-slate-400">Some of my best work</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
