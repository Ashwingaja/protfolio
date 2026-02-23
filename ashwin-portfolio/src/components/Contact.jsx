import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
                    <p className="text-slate-400">Feel free to reach out for collaborations or just a friendly hello</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <a href="mailto:ashwin07.g@gmail.com" className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors group">
                                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm">Email Me</p>
                                    <p className="font-medium">ashwin07.g@gmail.com</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 text-slate-400">
                                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm">Location</p>
                                    <p className="font-medium">Chennai, Tamil Nadu</p>
                                </div>
                            </div>

                            <div className="pt-8 flex gap-4">
                                <a href="https://www.linkedin.com/in/ashwin-g-755220255" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                                    <Linkedin size={24} />
                                </a>
                                <a href="https://github.com/Ashwingaja" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                                    <Github size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium flex items-center justify-center gap-2 transition-colors"
                            >
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>

                </div>

                <div className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} Ashwin G. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
