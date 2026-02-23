import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">About Me</h2>
                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        A dedicated <span className="text-blue-400 font-medium">AI-focused Software Engineer</span> skilled in Python, Machine Learning, backend API development, and full-stack application building.
                    </p>
                    <p className="text-lg text-slate-300 leading-relaxed">
                        Experienced in ML pipelines, data preprocessing, debugging, and optimizing performance of real-world systems. Passionate about <span className="text-blue-400">Generative AI</span>, LLMs, agentic systems, scalable microservices, and end-to-end model integration.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
