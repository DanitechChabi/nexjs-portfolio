"use client";
import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/portfolio";
import { ExternalLink, FolderSearch, Layout, Database, ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projets" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-institutional"
          >
            Réalisations & Projets
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
            Mise en œuvre concrète de solutions d'archivage et de systèmes d'information pour optimiser la gestion documentaire.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-pearl border border-slate-100 hover:border-amber-200 transition-all shadow-sm hover:shadow-xl flex flex-col relative"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1460925895917-afbe6eda23ca?auto=format&fit=crop&q=80&w=800" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-institutional/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm text-institutional group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-1.5 bg-amber-100 rounded-lg text-amber-600">
                    <Database className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Étude de cas</span>
                </div>
                <h3 className="text-xl font-bold text-institutional font-serif mb-3 group-hover:text-amber-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded-md uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-institutional group-hover:text-amber-600 transition-colors"
                >
                  Voir les détails <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
