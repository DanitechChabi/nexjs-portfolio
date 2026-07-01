"use client";
import React from "react";
import { motion } from "framer-motion";
import { BLOG_POSTS, PROJECTS } from "@/data/portfolio";
import { ArrowRight, BookOpen } from "lucide-react";

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-institutional"
          >
            Réflexions & Analyses
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
            Partage de connaissances sur les enjeux de la transformation digitale et de la gouvernance de l'information.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-pearl border border-slate-100 hover:border-amber-200 transition-all shadow-sm hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1485827404703-be64ca5a6a34?auto=format&fit=crop&q=80&w=800" }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-institutional text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                  <BookOpen className="w-3 h-3" />
                  {post.date}
                </div>
                <h3 className="text-xl font-bold text-institutional font-serif group-hover:text-amber-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-institutional group-hover:gap-3 transition-all"
                >
                  Lire l'article <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
