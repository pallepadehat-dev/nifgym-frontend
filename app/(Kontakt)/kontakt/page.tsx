import Footer from "@/components/Footer";
import KontaktForm from "@/components/KontaktForm";
import Navbar from "@/components/Navbar";

const KontaktPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <KontaktForm />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default KontaktPage;
