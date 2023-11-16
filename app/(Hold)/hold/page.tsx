import Navbar from "@/components/Navbar";
import HoldKort from "./components/HoldKort";
import Footer from "@/components/Footer";

const HoldPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mt-5">
        <h1 className="text-5xl md:text-4xl font-bold">Vores Hold</h1>
        <p className="text-gray-700">
          Læs mere og tilmeld dig et af vores hold
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-10">
        <HoldKort />
      </div>
      <Footer />
    </>
  );
};

export default HoldPage;
