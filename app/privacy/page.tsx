"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Privacy Policy
        </h1>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          Effective Date: [Insert Date]
        </p>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          At Kavora Creative Agency, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.
        </p>
        
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-brand-teal">1. Information Collection</h2>
            <p className="text-brand-gray leading-relaxed">
              We collect personal information such as your name, email, company details, and billing information when you engage our services, fill out a contact form, or subscribe to our newsletter. We also collect non-identifying browsing data via cookies.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-brand-teal">2. How We Use Your Data</h2>
            <p className="text-brand-gray leading-relaxed">
              Your information is used strictly to deliver our marketing and design services, process payments, improve our website, and send relevant project updates.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-brand-teal">3. Data Security &amp; Sharing</h2>
            <p className="text-brand-gray leading-relaxed">
              We implement strict security protocols to protect your data. We do not sell or rent your information. We only share data with trusted third-party platforms (like payment gateways or CRM software) necessary to run our business.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-brand-teal">4. Your Rights</h2>
            <p className="text-brand-gray leading-relaxed">
              You may request access to, correction of, or deletion of your personal data at any time by contacting us directly.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}