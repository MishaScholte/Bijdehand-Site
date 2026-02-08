import { HeroSection } from "@/components/hero-section";


import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Footer />
    </main>
  );
}
