import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-slate-800/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
                    <p className="text-slate-400">My professional journey</p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative border-l-2 border-slate-700 ml-3 pl-8 pb-12"
                    >
                        {/* Timeline dot */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-slate-900"></div>

                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-sm">
                            <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                                <div>
                                    <h3 className="text-xl font-bold text-white">AI/ML Intern</h3>
                                    <p className="text-blue-400 font-medium">altruisty</p>
                                </div>
                                <span className="px-3 py-1 text-sm font-medium text-slate-400 bg-slate-700 rounded-full">
                                    2024
                                </span>
                            </div>

                            <ul className="space-y-3 text-slate-300">
                                <li className="flex gap-2">
                                    <span className="text-blue-500 mt-1.5">•</span>
                                    <span>Hands-on experience with Python-based ML workflows and development cycles.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-500 mt-1.5">•</span>
                                    <span>Built robust pipelines for data preprocessing and model evaluation.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-500 mt-1.5">•</span>
                                    <span>Learned and applied prompt engineering fundamentals for LLM optimization.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-500 mt-1.5">•</span>
                                    <span>Worked on AI strategies for extracting business insights.</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
