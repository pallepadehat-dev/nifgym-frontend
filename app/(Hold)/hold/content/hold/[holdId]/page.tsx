import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { client } from "@/tina/__generated__/client";
import Image from "next/image";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface HoldPageProps {
  params: { holdId: string };
}

const HoldDescription: React.FC<HoldPageProps> = async ({ params }) => {
  const { holdId } = params;

  const data = await client.queries.createhold({ relativePath: holdId });
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 sm:p-8 md:p-12 lg:p-16">
        <div
          key={data.data.createhold.id}
          className="grid grid-cols-2 gap-2 sm:grid-cols-1"
        >
          <div className="">
            <div></div>
          </div>
          <div className="">
            <h1>{data.data.createhold.title}</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HoldDescription;
