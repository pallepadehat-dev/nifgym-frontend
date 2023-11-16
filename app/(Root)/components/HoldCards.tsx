import client from "@/tina/__generated__/client";
import Image from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const HoldCards = async () => {
  const data = await client.queries.createholdConnection();
  return (
    <>
      {data.data.createholdConnection.edges?.map((item) => {
        return (
          <div
            className="bg-white p-6 shadow-2xl rounded-lg cursor-pointer hover:scale-105 transition-all duration-300"
            key={item?.node?.id}
          >
            <div className="relative w-full h-64">
              {item?.node?.forsideholdimage ? (
                <Image
                  src={item.node.forsideholdimage} // Use the correct property
                  alt="image"
                  fill
                  className="rounded-lg"
                />
              ) : (
                <p>No image available</p>
              )}
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-2">
              {item?.node?.title}
            </h2>

            <div className="text-gray-600 text-xs md:text-sm">
              <TinaMarkdown content={item?.node?.holdbeskrivelse} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default HoldCards;
