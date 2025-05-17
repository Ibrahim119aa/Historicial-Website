import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0f0f0f]  text-gray-400 font-inter">
            <motion.div
                className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 border-t border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <div>
                    <h3 className="text-white text-xl font-semibold mb-4">Histopedia</h3>
                    <p className="text-sm">
                        A platform to explore blogs, quizzes, world facts, and encyclopedic knowledge with engaging design.
                    </p>
                </div>

                <div>
                    <h4 className="text-white text-md font-medium mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                        <li><a href="/quiz" className="hover:text-white transition-colors">Quiz</a></li>
                        <li><a href="/world" className="hover:text-white transition-colors">World Page</a></li>
                        <li><a href="/encyclopedia" className="hover:text-white transition-colors">Encyclopedia</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white text-md font-medium mb-3">Support</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                        <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white text-md font-medium mb-3">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                    </div>
                </div>
            </motion.div>

            <div className="border-t border-gray-800 text-center text-xs py-6 px-4">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    © {new Date().getFullYear()} Histopedia. All rights reserved.
                </motion.p>
            </div>
        </footer>
    );
};

export default Footer;
