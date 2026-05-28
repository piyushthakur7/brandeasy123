import Link from "next/link";
import Image from "next/image";
import heroImage from "@/public/hero.png";

export default function HeroSection() {
  return (
    <section className="w-full min-h-[520px]">
      <Link
        href="/products"
        className="relative block w-full min-h-[520px]"
      >
        <Image
          src={heroImage}
          alt="BrandEasy Promotion"
          fill
          priority
          className="object-cover"
        />
      </Link>
    </section>
  );
}
