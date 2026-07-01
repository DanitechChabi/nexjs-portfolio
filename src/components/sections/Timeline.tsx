"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase, GraduationCap, Award } from "lucide-react";

const TIMELINE_DATA = [
  {
    year: "2018 - 2020",
    title: "Fondations Académiques & Premières Expériences",
    description: "Spécialisation en gestion de l'information et systèmes documentaires. Mise en place des premières bases de données d'archives numériques.",
    icon: GraduationCap,
    category: "Études",
    color: "bg-blue-100 text-blue-600"
  },
  {
    year: "2021 - 2022",
    title: "Expertise en GED et Archivage",
    description: "Accompagnement d'institutions publiques dans la mise en œuvre de systèmes de Gestion Électronique des Documents, réduisant le temps de traitement des dossiers de 40%.",
    icon: Briefcase,
    category: "Professionnel",
    color: "bg-amber-100 text-amber-600"
  },
  {
    year: "2023 - 2024",
    title: "Consultant en Transformation Digitale",
    description: "Pilotage de projets de dématérialisation complexe, audit de flux documentaires et déploiement de solutions de conservation pérenne.",
    icon: Award,
    category: "Expertise",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    year: "2025 - Présent",
    title: "Architecte de Solutions Informationnelles",
    description: "Conception d'architectures hybrides mêlant archivage physique et numérique, avec une intégration poussée d'outils d'analyse de données.",
    icon: Calendar,
    category: "Actuel",
    color: "bg-emerald-100 text-emerald-600"
  }
];

export default function Timeline() {
  return (
    <section id="parcours" className="py-24 bg-pearl relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-institutional"
          >
            Mon Parcours
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-amber-500 mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 font-light text-lg"
          >
            Une évolution constante guidée par la passion de l'organisation de l'information et l'innovation technologique.
          </motion.p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-200 hidden md:block" />

          <div className="space-y-12">
            {TIMELINE_DATA.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center justify-between w-full ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
              >
                {/* Content Card */}
                <div className="w-full md:w-5/12">
                  <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-bold text-institutional">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2 font-serif">{item.title}</h3>
                    <p className="text-slate-600 font-light leading-relaxed text-sm">
                      {item.description}
                    </p>
                    <div className="mt-4">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Center Point */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border-4 border-amber-500 rounded-full items-center justify-center z-10 shadow-sm">
                   <div className="w-2 h-2 bg-institutional rounded-full" />
                </div>

                {/* Empty space for opposite side */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
