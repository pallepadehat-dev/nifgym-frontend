import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HoldSection from "@/components/HoldSection";
import KontaktForm from "@/components/KontaktForm";
import Navbar from "@/components/Navbar";
import client from "@/tina/__generated__/client";

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
