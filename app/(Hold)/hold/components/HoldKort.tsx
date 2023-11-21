import { Button } from "@/components/ui/button";
import client from "@/tina/__generated__/client";
import Image from "next/image";
import Link from "next/link";

const HoldKort = async () => {
  const data = await client.queries.holdConnection();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-10 px-4 sm:px-8 lg:px-16">
      {data.data.holdConnection.edges?.map((item) => {
        return (
          <div
            className="bg-white p-5 shadow-2xl rounded-lg"
            key={item?.node?.title}
          >
            <div className="relative h-48">
              {item?.node?.coverImage ? (
                <Image
                  src={item.node.coverImage}
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              ) : (
                <div className="flex items-center justify-center h-full rounded-lg bg-gray-200">
                  <p>No image available</p>
                </div>
              )}
            </div>
            <h2 className="text-xl lg:text-sm font-semibold mt-4">
              {item?.node?.title}
            </h2>
            <Link key={item?.node?.title} href={`/hold/${item?.node?.id}`}>
              <Button className="w-full mt-4 hover:scale-105 transition-all duration-300">
                Læs mere
              </Button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default HoldKort;
