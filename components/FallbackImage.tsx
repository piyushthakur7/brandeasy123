"use client";
import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { Package } from "lucide-react";

interface FallbackImageProps extends Omit<ImageProps, "onError" | "src"> {
  src: string;
}

export default function FallbackImage({ src, alt, className, ...props }: FallbackImageProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`w-full h-full flex flex-col items-center justify-center bg-surface/50 border border-surface-light text-text-muted absolute inset-0`}>
        <Package size={24} className="stroke-1 mb-2 opacity-50" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-center px-2 opacity-70">
          Image Coming Soon
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
