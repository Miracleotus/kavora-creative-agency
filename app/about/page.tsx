"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-brand-teal tracking-[0.3em] uppercase text-xs mb-4">Our Story</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-10 leading-tight">
          The Agency Built for Challengers
        </h1>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          Atv King was founded by a team of digital natives who were tired of the traditional, bloated agency model. We saw too many businesses paying premium retainers for mediocre, template-driven results. We decided to build an agency that acts as a true extension of your team—agile, hungry, and deeply invested in your success.
        </p>
        
        <h2 className="font-display text-3xl font-bold mt-12 mb-6 text-brand-teal">Our Mission</h2>
        <p className="text-brand-gray text-lg leading-relaxed mb-12">
          To empower ambitious brands to cut through the digital noise. We deliver world-class design and razor-sharp marketing strategies that turn everyday businesses into industry leaders.
        </p>
        
        <h2 className="font-display text-3xl font-bold mb-6 text-brand-teal">What We Stand For</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-display text-xl font-bold mb-2">Impact Over Output</h3>
            <p className="text-brand-gray leading-relaxed">We don't just deliver files; we deliver results. Everything we create is designed to solve a business problem.</p>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold mb-2">Fearless Design</h3>
            <p className="text-brand-gray leading-relaxed">We aren't afraid to push boundaries and challenge industry norms to help you stand out.</p>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold mb-2">Partnership</h3>
            <p className="text-brand-gray leading-relaxed">When you win, we win. We treat your budget as if it were our own.</p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}