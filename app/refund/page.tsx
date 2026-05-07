"use client";

import { motion } from "framer-motion";

export default function RefundPolicyPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Refund and Cancellation Policy
        </h1>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          Due to the custom, time-intensive nature of creative design and marketing strategy, our refund policy reflects project milestones.
        </p>
        
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-brand-teal">1. Service Deposits</h2>
            <p className="text-brand-gray leading-relaxed">
              All projects require a non-refundable upfront deposit (typically 50%) to secure your spot in our production schedule and cover initial strategy and research.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-brand-teal">2. Digital Products</h2>
            <p className="text-brand-gray leading-relaxed">
              Downloadable assets (such as templates or strategy guides) are final sale and non-refundable once the file has been downloaded.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-brand-teal">3. Retainer Cancellations</h2>
            <p className="text-brand-gray leading-relaxed">
              Monthly retainers require a 30-day written notice for cancellation. You will be billed for any work completed up to the date of cancellation.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3 text-brand-teal">4. Dispute Resolution</h2>
            <p className="text-brand-gray leading-relaxed">
              If you are unsatisfied with a deliverable, you must notify us within 5 business days of receipt. We include specific revision rounds in all our contracts to ensure the final product meets your expectations.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}