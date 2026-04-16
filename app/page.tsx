"use client";

import Link from "next/link";
import { ArrowRight, Palette, Globe, TrendingUp, PenTool, Shield, Zap, Rocket } from "lucide-react";
import { motion, Variants } from "framer-motion";

const services = [
  {
    icon: <Palette size={28} />,
    title: "Brand Identity",
    desc: "Logos, typography, and visual systems that capture your unique market position.",
  },
  {
    icon: <Globe size={28} />,
    title: "Web Design & UX",
    desc: "High-performance, responsive websites built to turn visitors into loyal customers.",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Digital Marketing",
    desc: "SEO, content, and paid campaigns engineered to dominate your niche.",
  },
  {
    icon: <PenTool size={28} />,
    title: "Content Creation",
    desc: "Compelling copy, striking graphics, and video that tells your story perfectly.",
  },
];

const advantages = [
  { icon: <Zap size={24} />, title: "Data-Backed Creativity", desc: "Every design choice is rooted in consumer psychology and market research." },
  { icon: <Shield size={24} />, title: "Radical Transparency", desc: "No hidden fees, just clear reporting, honest communication, and measurable KPIs." },
  { icon: <Rocket size={24} />, title: "Agile Execution", desc: "We move at the speed of the internet, ensuring campaigns launch on schedule." },
];

const process = [
  { step: "01", title: "Discover & Audit", desc: "We dive deep into your brand, your audience, and your current metrics to uncover hidden opportunities." },
  { step: "02", title: "Strategize", desc: "We build a custom roadmap tailored to your specific revenue goals." },
  { step: "03", title: "Create", desc: "Our designers and copywriters bring the strategy to life with scroll-stopping assets." },
  { step: "04", title: "Launch & Optimize", desc: "We deploy your campaigns, monitor the data obsessively, and refine for maximum ROI." },
];

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function HomePage() {
  return (
    <main className="bg-brand-dark text-white font-body">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(ellipse at center, rgba(45, 212, 191, 0.08) 0%, transparent 70%)" }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          <p className="text-brand-teal tracking-[0.3em] uppercase text-xs mb-6 font-body">
            Kavora Creative Agency
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
            We Build Brands That<br />
            <span className="text-brand-teal">Demand Attention.</span>
          </h1>
          <p className="text-brand-gray max-w-2xl text-lg mb-10 leading-relaxed">
            A full-service digital partner combining bold design with data-driven marketing to scale your business. Stop blending in. Start standing out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-brand-teal text-brand-dark px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-brand-teal-light transition-all inline-flex items-center gap-2 rounded-full"
            >
              Start Your Project <ArrowRight size={16} />
            </Link>
            <Link
              href="/shop"
              className="border border-brand-teal text-brand-teal px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-brand-teal hover:text-brand-dark transition-all inline-flex items-center gap-2 rounded-full"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SNIPPET */}
      <motion.section 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto px-6 py-24 text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Creativity Meets{" "}
          <span className="text-brand-teal">Conversion</span>
        </h2>
        <p className="text-brand-gray text-lg leading-relaxed">
          In today's digital landscape, a pretty design isn't enough, and data without a soul won't connect. At Kavora, we bridge the gap. We are a collective of designers, strategists, and storytellers dedicated to crafting digital experiences that not only look spectacular but actively drive measurable growth for your bottom line.
        </p>
      </motion.section>

      {/* SERVICES */}
      <section className="bg-brand-navy/30 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <p className="text-brand-teal tracking-[0.3em] uppercase text-xs text-center mb-4">How We Fuel Your Growth</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
              Core Services
            </h2>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((s) => (
              <motion.div
                variants={staggerItem}
                key={s.title}
                className="border border-white/10 p-6 hover:border-brand-teal/50 transition-all group rounded-2xl bg-white/2 hover:bg-white/5"
              >
                <div className="text-brand-teal mb-4 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-brand-gray leading-relaxed text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2 
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="font-display text-4xl font-bold text-center mb-16"
        >
          The <span className="text-brand-teal">Kavora Advantage</span>
        </motion.h2>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          {advantages.map((item) => (
            <motion.div variants={staggerItem} key={item.title} className="flex flex-col items-center gap-4">
              <div className="text-brand-teal bg-brand-teal/10 p-4 rounded-full mb-2 border border-brand-teal/20">
                {item.icon}
              </div>
              <h3 className="font-display text-xl font-bold">{item.title}</h3>
              <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="bg-brand-navy/30 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="font-display text-4xl font-bold text-center mb-16"
          >
            The Blueprint to{" "}
            <span className="text-brand-teal">Success</span>
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            {process.map((p) => (
              <motion.div variants={staggerItem} key={p.step} className="flex gap-8 items-start border-b border-white/10 pb-8">
                <span className="font-display text-5xl font-bold text-brand-teal/40 shrink-0">
                  {p.step}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2">{p.title}</h3>
                  <p className="text-brand-gray leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <motion.section 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="py-32 px-6 text-center"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Ready to Dominate Your{" "}
          <span className="text-brand-teal">Market?</span>
        </h2>
        <p className="text-brand-gray max-w-xl mx-auto mb-10 text-lg">
          Let's build something incredible together. Book a free 30-minute discovery call with our strategy team today.
        </p>
        <Link
          href="/contact"
          className="bg-brand-teal text-brand-dark px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-brand-teal-light transition-all inline-block rounded-full"
        >
          Book Your Free Strategy Call
        </Link>
      </motion.section>

    </main>
  );
}