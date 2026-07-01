import React from "react";
import { BLOG_POSTS } from "@/data/portfolio";
import { notFound } from "next/navigation";
import { ChevronLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import SafeImage from "@/components/ui/SafeImage";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find(p => p.slug === resolvedParams.slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-pearl pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-institutional font-medium mb-8 hover:text-amber-600 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Retour au portfolio
        </Link>

        <header className="space-y-6 mb-12">
          <div className="flex items-center gap-3 text-amber-600 font-bold text-xs uppercase tracking-widest">
            <BookOpen className="w-4 h-4" />
            {post.category}
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-institutional leading-tight">
            {post.title}
          </h1>
          <div className="text-slate-400 text-sm font-medium">
            Publié le {post.date}
          </div>
          <div className="h-1 w-20 bg-amber-500 rounded-full" />
        </header>

        <div className="rounded-3xl overflow-hidden shadow-2xl mb-12 aspect-video relative">
          <SafeImage
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="prose prose-slate max-w-none text-slate-600 font-light leading-relaxed text-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
