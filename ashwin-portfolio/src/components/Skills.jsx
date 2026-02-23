import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Globe, Database, PenTool } from 'lucide-react';

const SkillCard = ({ title, skills, icon: Icon }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors shadow-lg"
    >
        <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <ul className="space-y-2">
            {skills.map((skill, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-400">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {skill}
                </li>
            ))}
        </ul>
    </motion.div>
);

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming",
            icon: Code,
            skills: ["Java", "Python", "Data Structures & Algorithms"]
        },
        {
            title: "AI & Machine Learning",
            icon: Brain,
            skills: ["Machine Learning", "Generative AI", "Agentic AI"]
        },
        {
            title: "Web Technologies",
            icon: Globe,
            skills: ["HTML & CSS", "JavaScript", "React.js", "Node.js", "Express.js"]
        },
        {
            title: "Databases",
            icon: Database,
            skills: ["PostgreSQL", "MS SQL Server"]
        },
        {
            title: "Tools",
            icon: PenTool,
            skills: ["Git & GitHub", "VS Code", "Jupyter"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
                    <p className="text-slate-400"> Technologies and tools I work with</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <SkillCard {...category} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
