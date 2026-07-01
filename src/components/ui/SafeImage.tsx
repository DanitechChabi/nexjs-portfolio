"use client";
import React from "react";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export default function SafeImage({ src, alt, className, fallbackSrc }: SafeImageProps) {
  const defaultFallback = "https://images.unsplash.com/photo-1485827404703-be64ca5a6a34?auto=format&fit=crop&q=80&w=1200";

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        (e.target as HTMLImageElement).src = fallbackSrc || defaultFallback;
      }}
    />
  );
}
