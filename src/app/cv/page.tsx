"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PERSONA } from "@/data/portfolio";
import { Mail, Phone, MapPin, GraduationCap, Briefcase, Award, User, Eye, EyeOff } from "lucide-react";

export default function CVPage() {
  const [showReferences, setShowReferences] = useState(false);

  return (
    <div className="min-h-screen bg-pearl pt-24 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -mr-16 -mt-16 blur-2xl" />

          <div className="flex flex-col md:flex-row items-start gap-8 relative z-10">
            <div className="w-32 h-32 rounded-2xl bg-institutional flex-shrink-0 overflow-hidden shadow-lg border-4 border-white">
              <img
                src="/pictures/daniel.png"
                alt={PERSONA.name}
                className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b9aC663956d?auto=format&fit=crop&q=80&w=200" }}
              />
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-4xl font-serif font-bold text-institutional">{PERSONA.name}</h1>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full uppercase tracking-wider">
                    {PERSONA.experienceYears} Ans d'Expérience
                  </span>
                </div>
              </div>

              <p className="text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
                {PERSONA.objective}
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-slate-500 pt-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-500" />
                  {PERSONA.contact.email}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-500" />
                  {PERSONA.contact.phone}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  {PERSONA.contact.location}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Skills & Education */}
          <div className="space-y-8">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-50 rounded-lg">
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-institutional font-serif">Compétences</h3>
              </div>

              <div className="space-y-6">
                {PERSONA.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600 font-medium">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-institutional"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-50 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-institutional font-serif">Éducation</h3>
              </div>

              <div className="space-y-6">
                {PERSONA.education.map((edu, i) => (
                  <div key={i} className="relative pl-4 border-l-2 border-slate-100">
                    <p className="text-sm font-bold text-slate-800">{edu.degree}</p>
                    <p className="text-xs text-slate-500">{edu.school} • {edu.year}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-50 rounded-lg">
                  <User className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-institutional font-serif">Langues</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {PERSONA.languages.map((lang, i) => (
                  <div key={i} className="p-3 bg-pearl rounded-xl border border-slate-100 flex justify-between items-center">
                    <span className="text-sm text-slate-600">{lang.name}</span>
                    <span className="text-[10px] font-bold text-institutional uppercase">{lang.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Experience */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-amber-50 rounded-lg">
                  <Briefcase className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-institutional font-serif">Expériences Professionnelles</h3>
              </div>

              <div className="space-y-10">
                {PERSONA.experience.map((exp, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-amber-500">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-white border-4 border-amber-500 rounded-full" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <h4 className="text-xl font-bold text-slate-800 font-serif">{exp.role}</h4>
                      <span className="text-xs font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-amber-600 font-semibold text-sm mb-3">{exp.company}</div>
                    <p className="text-slate-600 font-light text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.tasks.map((task, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-slate-500 font-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-institutional mt-1.5 flex-shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* References with Blur */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-50 rounded-lg">
                    <Award className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-institutional font-serif">Références</h3>
                </div>
                <button
                  onClick={() => setShowReferences(!showReferences)}
                  className="flex items-center gap-2 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors"
                >
                  {showReferences ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                  {showReferences ? "Masquer" : "Afficher"}
                </button>
              </div>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-500 ${!showReferences ? "blur-md select-none pointer-events-none" : "blur-0"}`}>
                {PERSONA.references.map((ref, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-pearl border border-slate-100">
                    <p className="text-sm font-bold text-slate-800">{ref.name}</p>
                    <p className="text-xs text-slate-500 mb-2">{ref.role}</p>
                    <div className="flex items-center gap-2 text-xs text-institutional font-medium">
                      <Phone className="w-3 h-3" />
                      {ref.phone}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
