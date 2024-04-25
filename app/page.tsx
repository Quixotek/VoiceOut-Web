import FAQ from "@/components/landing-page/FAQ";
import HeroSection from "@/components/landing-page/HeroSection";
import Navigation from "@/components/landing-page/Navigation";
import SignedFeatures from "@/components/landing-page/SignedFeatures";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <SignedFeatures />
      <FAQ />
    </main>
  );
}
