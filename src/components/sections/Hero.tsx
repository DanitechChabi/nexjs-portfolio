"use client";
import React from "react";
import { motion } from "framer-motion";
import AppointmentModal from "../ui/AppointmentModal";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pearl pt-20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-institutional/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-amber-600 font-medium tracking-wide uppercase text-sm font-sans">
                Expert en Transformation Digitale
              </h2>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-institutional leading-tight">
                Daniel Chabi <span className="text-amber-500">Bouko</span>
              </h1>
              <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Accompagner les organisations dans la modernisation de leur patrimoine informationnel.
                Spécialiste en <span className="font-semibold text-institutional">Archivage numérique</span>,
                <span className="font-semibold text-institutional"> GED</span> et
                <span className="font-semibold text-institutional">stratégies de dématérialisation</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <AppointmentModal />
              <a
                href="#expertise"
                className="px-8 py-3 text-institutional font-semibold hover:text-amber-600 transition-colors"
              >
                Découvrir mon expertise →
              </a>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                {/* Image frame with artistic border */}
                <div className="absolute inset-0 border-4 border-amber-500 translate-x-4 translate-y-4 rounded-2xl" />
                <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl bg-slate-200">
                  <img
                    src="/pictures/daniel.png"
                    alt="Daniel Chabi Bouko"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b9aC663956d?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-4 -right-4 md:bottom-0 md:-right-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 bg-institutional rounded-full flex items-center justify-center text-white">
                <span className="text-xs font-bold">EXP</span>
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 font-medium">Expérience</p>
                <p className="text-sm font-bold text-institutional">10+ Ans</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
