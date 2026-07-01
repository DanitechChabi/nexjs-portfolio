"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileText, Database, Cpu, Layout, ShieldCheck, BarChart3 } from "lucide-react";

const EXPERTISE_DATA = [
  {
    title: "Archivage Numérique",
    description: "Conception et mise en œuvre de stratégies d'archivage pérenne pour garantir l'intégrité et la disponibilité des documents sur le long terme.",
    icon: FileText,
    color: "bg-blue-50 text-institutional"
  },
  {
    title: "Systèmes de GED",
    description: "Déploiement et optimisation de solutions de Gestion Électronique des Documents (GED) pour fluidifier les processus métier.",
    icon: Database,
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "Transformation Digitale",
    description: "Accompagnement stratégique dans la transition vers le numérique, optimisant l'efficacité opérationnelle et l'expérience utilisateur.",
    icon: Cpu,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Développement Backend",
    description: "Architecture de systèmes robustes et scalables, avec une expertise particulière dans la gestion des flux de données complexes.",
    icon: Layout,
    color: "bg-slate-50 text-slate-600"
  },
  {
    title: "Audit Documentaire",
    description: "Analyse approfondie des flux d'information et diagnostic des risques liés à la conservation des documents administratifs.",
    icon: ShieldCheck,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Analyse de Données",
    description: "Transformation de données brutes en insights stratégiques pour faciliter la prise de décision au sein des organisations.",
    icon: BarChart3,
    color: "bg-rose-50 text-rose-600"
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-institutional"
          >
            Domaines d'Expertise
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
            Une approche multidisciplinaire alliant rigueur archivistique et innovation technologique pour relever vos défis numériques.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERTISE_DATA.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl border border-slate-100 bg-pearl hover:border-amber-200 hover:shadow-xl hover:shadow-amber-500/5 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-institutional mb-3 font-serif">
                {item.title}
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
