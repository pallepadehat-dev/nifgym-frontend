import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HoldSection from "@/components/HoldSection";
import KontaktForm from "@/components/KontaktForm";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HoldSection />
      <KontaktForm />
      <Footer />
    </>
  );
}
