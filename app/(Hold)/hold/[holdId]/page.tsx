"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import client from "@/tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface HoldPageProps {
  params: { holdId: string };
}

const HoldDescription: React.FC<HoldPageProps> = async ({ params }) => {
  const data = await client.queries.holdConnection();
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 sm:p-8 md:p-12 lg:p-16">
        {data.data.holdConnection.edges?.map((item) => (
          <div key={item?.node?.id} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="sm:col-span-1">
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    {item?.node?.title}
                  </h1>
                  <p className="font-medium">{item?.node?.date}</p>
                  <div className="w-full  pb-5">
                    <TinaMarkdown content={item?.node?.start_adress} />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-semibold">
                    Pris: {item?.node?.belob}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default HoldDescription;
