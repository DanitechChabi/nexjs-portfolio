"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Jean-Pierre M.",
    role: "Directeur Administratif",
    content: "L'expertise de Daniel en GED a permis de transformer notre gestion documentaire. Un gain de productivité remarquable et une approche très professionnelle.",
    avatar: "https://i.pravatar.cc/150?u=jp"
  },
  {
    name: "Marie Claire S.",
    role: "Responsable Archivage",
    content: "Sa maîtrise des normes d'archivage numérique est impressionnante. Daniel sait allier les contraintes légales et les besoins opérationnels.",
    avatar: "https://i.pravatar.cc/150?u=mc"
  },
  {
    name: "Marc Antoine L.",
    role: "Chef de Projet IT",
    content: "Un consultant rigoureux et passionné. Son intervention sur notre stratégie de dématérialisation a été le moteur de la réussite de notre projet.",
    avatar: "https://i.pravatar.cc/150?u=ma"
  }
];

export default function Testimonials() {
  return (
    <section id="témoignages" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-institutional"
          >
            Témoignages
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
            La satisfaction de mes clients est le meilleur indicateur de la qualité de mon travail.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-pearl border border-slate-100 relative group hover:border-amber-200 transition-all"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-amber-500/20 group-hover:text-amber-500/40 transition-colors" />

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-amber-500 p-0.5"
                />
                <div>
                  <h4 className="font-bold text-institutional">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>

              <p className="text-slate-600 font-light italic leading-relaxed">
                "{t.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
