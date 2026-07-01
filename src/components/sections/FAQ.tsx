"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ_DATA = [
  {
    question: "Qu'est-ce que la GED et pourquoi est-ce important ?",
    answer: "La Gestion Électronique des Documents (GED) est un ensemble de techniques permettant de gérer la création, la conservation et la diffusion des documents numériques. Elle est cruciale pour réduire les coûts de stockage, sécuriser l'information et accélérer les processus de décision."
  },
  {
    question: "Comment se déroule un audit documentaire ?",
    answer: "Un audit documentaire commence par une analyse des flux d'information existants, l'identification des points de blocage et l'évaluation des risques de perte de données. Il aboutit à un plan de recommandation stratégique pour optimiser votre chaîne documentaire."
  },
  {
    question: "Quelles sont les étapes d'un projet de dématérialisation ?",
    answer: "Le processus comprend généralement : l'audit initial, la définition du schéma directeur, le choix des outils technologiques, la numérisation des archives et enfin la mise en place d'un workflow de validation et de consultation."
  },
  {
    question: "Travaillez-vous avec des logiciels spécifiques ?",
    answer: "Je suis agnostique vis-à-vis des outils. Je conseille la solution la mieux adaptée à vos besoins, qu'il s'agisse de solutions Open Source ou de logiciels propriétaires leaders du marché."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-pearl relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-institutional"
          >
            Questions Fréquentes
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
            Toutes les réponses à vos interrogations sur la transformation digitale.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-institutional font-serif">{item.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-slate-600 font-light leading-relaxed border-t border-slate-50 mt-2">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
