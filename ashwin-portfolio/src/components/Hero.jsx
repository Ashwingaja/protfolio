import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                        Available for Hire
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Ashwin G</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-slate-400 mb-8 font-light">
                        AI-Focused Software Engineer
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Building intelligent systems, scalable backend solutions, and full-stack AI-driven applications.
                        Passionate about transforming complex problems into elegant code.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all duration-300 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group"
                        >
                            View Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium border border-slate-700 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
