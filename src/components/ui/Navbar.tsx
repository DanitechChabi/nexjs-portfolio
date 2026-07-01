"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AppointmentModal from "./AppointmentModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-institutional tracking-tight">
          D. CHABI <span className="text-amber-500">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["Expertise", "Projets", "Parcours", "Témoignages"].map((item) => (
            <Link
              key={item}
              href={`#${item === "Parcours" ? "parcours" : item.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 hover:text-institutional transition-colors"
            >
              {item}
            </Link>
          ))}
          <Link
            href="/blog"
            className="text-sm font-medium text-slate-600 hover:text-institutional transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/cv"
            className="text-sm font-bold text-amber-600 hover:text-amber-700 underline underline-offset-4"
          >
            Mon CV
          </Link>
          <AppointmentModal />
        </div>
      </div>
    </nav>
  );
}
