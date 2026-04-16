import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <GraduationCap className="text-blue-500" size={32} />
                            <h2 className="text-3xl font-bold text-white">Education</h2>
                        </div>

                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-sm hover:border-blue-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-1">B.Tech – Artificial Intelligence & Data Science</h3>
                            <p className="text-blue-400 font-medium mb-4">Sri Venkateswaraa College of Technology</p>
                            <div className="flex justify-between items-center text-slate-400 text-sm">
                                <span>2022 – 2026</span>
                                <span className="px-3 py-1 bg-blue-500/10 rounded-full text-blue-400 font-semibold">CGPA: 8.45/10</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certifications Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Award className="text-cyan-500" size={32} />
                            <h2 className="text-3xl font-bold text-white">Achievements and Credentials</h2>
                        </div>

                        <div className="space-y-4">
                            {[
                                "Gen AI & LLM",
                                "ML & AI",
                                "JAVA Certification",
                                "TCS NQT Score 71.01% (July 2025)",
                                "IBM RAG and Agentic AI"
                            ].map((cert, index) => (
                                <div key={index} className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex items-center gap-3 hover:translate-x-2 transition-transform">
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                                    <span className="text-slate-300 font-medium">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Education;
