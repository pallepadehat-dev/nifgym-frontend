"use client";
import HoldCards from "@/app/(Root)/components/HoldCards";
import { Button } from "./ui/button";

const HoldSection = () => {
  return (
    <div className="w-full h-auto py-5">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl">Vores Gymnastik Hold</h1>
          <p className="text-gray-600 mt-2">
            Udforsk vores forskellige gymnastikhold og find det perfekte match
            for dig.
          </p>
          <div className="mt-6 gap-5 flex flex-row items-center justify-center">
            <Button>Læs Mere</Button>
            <Button>Kontakt Os</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <HoldCards />
        </div>
      </div>
    </div>
  );
};

export default HoldSection;
