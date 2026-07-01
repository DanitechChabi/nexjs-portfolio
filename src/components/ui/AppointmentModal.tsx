"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MessageCircle } from "lucide-react";
import { PERSONA } from "@/data/portfolio";

export default function AppointmentModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-amber-500 text-white font-bold rounded-full hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/30 flex items-center gap-2"
      >
        <Calendar className="w-5 h-5" />
        Prendre Rendez-vous
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>

              <div className="flex flex-col md:flex-row h-[600px]">
                <div className="w-full md:w-1/3 bg-institutional p-8 text-white flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Planifions votre transformation digitale</h3>
                  <p className="text-blue-100 font-light leading-relaxed">
                    Discutons de vos besoins en archivage, dématérialisation ou analyse de données.
                  </p>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-amber-500 rounded-full" />
                      <span>Audit documentaire</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-amber-500 rounded-full" />
                      <span>Déploiement SAE/GED</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3 h-full bg-slate-50 flex flex-col items-center justify-center p-8 text-center">
                   <div className="max-w-sm space-y-6">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                         <MessageCircle className="w-10 h-10 text-green-600" />
                      </div>
                      <h4 className="text-2xl font-bold text-slate-800">Contact Direct via WhatsApp</h4>
                      <p className="text-slate-500 font-light">Pour une réponse rapide et une prise de rendez-vous simplifiée, contactez-moi directement sur WhatsApp.</p>
                      <a
                        href={PERSONA.contact.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-green-600 text-white font-bold rounded-2xl hover:bg-green-700 transition-all shadow-xl shadow-green-600/20 flex items-center justify-center gap-3 mx-auto w-full"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Démarrer la conversation
                      </a>
                      <p className="text-xs text-slate-400">Réponse garantie sous 24h</p>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
