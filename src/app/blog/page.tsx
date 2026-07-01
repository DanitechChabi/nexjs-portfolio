"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/portfolio";
import { ArrowRight, BookOpen, Calendar } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-pearl pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-institutional"
          >
            Réflexions & Analyses
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-1 bg-amber-500 mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-slate-600 font-light text-lg"
          >
            Exploration des enjeux de la transformation digitale, de la gouvernance de l'information et des tendances de l'archivage moderne.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-white border border-slate-100 hover:border-amber-200 transition-all shadow-sm hover:shadow-xl flex flex-col"
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

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-3">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
                <h3 className="text-xl font-bold text-institutional font-serif mb-3 group-hover:text-amber-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-institutional group-hover:gap-3 transition-all"
                >
                  Lire l'article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
