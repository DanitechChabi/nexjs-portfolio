import type { Metadata } from "next"; 
import "./globals.css"; 
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = { 
  title: "Daniel CHABI BOUKO | Spécialiste Transformation Digitale", 
  description: "Expert en Archivage, GED et Développement Web Backend" 
};

export default function RootLayout({ children }: { children: React.ReactNode }) { 
  return (
    <html lang="fr">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  ); 
}
