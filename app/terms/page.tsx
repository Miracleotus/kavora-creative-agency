"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Terms and Conditions
        </h1>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          Effective Date: May 7, 2026
        </p>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          Welcome to Atv King. These terms and conditions outline the rules and regulations for the use of our website and services.
        </p>
        
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-brand-teal">1. Introduction</h2>
            <p className="text-brand-gray leading-relaxed">
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use Atv King if you do not agree to take all of the terms and conditions stated on this page.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-brand-teal">2. Intellectual Property Rights</h2>
            <p className="text-brand-gray leading-relaxed">
              Other than the content you own, under these terms, Atv King and/or its licensors own all the intellectual property rights and materials contained in this website. You are granted limited license only for purposes of viewing the material contained on this website.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-brand-teal">3. Restrictions</h2>
            <p className="text-brand-gray leading-relaxed">
              You are specifically restricted from publishing any website material in any other media; selling, sublicensing, and/or otherwise commercializing any website material; publicly performing and/or showing any website material without prior consent.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-brand-teal">4. Limitation of Liability</h2>
            <p className="text-brand-gray leading-relaxed">
              In no event shall Atv King, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}