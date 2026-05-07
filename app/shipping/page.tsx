"use client";

import { motion } from "framer-motion";

export default function ShippingPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Digital Delivery Policy
        </h1>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          Effective Date: May 7, 2026
        </p>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          Atv King provides digital services and products. We do not ship physical items.
        </p>
        
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-brand-teal">1. Delivery of Services</h2>
            <p className="text-brand-gray leading-relaxed">
              Custom design files, website access, and marketing reports will be delivered digitally via email, shared cloud drives (Google Drive/Dropbox), or our client portal.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-brand-teal">2. Digital Downloads</h2>
            <p className="text-brand-gray leading-relaxed">
              For instant-purchase digital products (e.g., templates), a secure download link will be provided immediately upon successful payment and sent to your registered email address.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-brand-teal">3. Project Timelines</h2>
            <p className="text-brand-gray leading-relaxed">
              Delivery timelines for custom services are highly variable and will be clearly outlined in your individual project contract and onboarding documentation.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}