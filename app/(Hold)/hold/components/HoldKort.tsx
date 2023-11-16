import client from "@/tina/__generated__/client";
import Image from "next/image";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const HoldKort = async () => {
  const data = await client.queries.createholdConnection();

  return (
    <div>
      {data.data.createholdConnection.edges?.map((item) => {
        return (
          <Link key={item?.node?.title} href={`/hold/${item?.node?.id}`}>
            <div
              className="bg-white p-6 shadow-2xl rounded-lg cursor-pointer hover:scale-105 transition-all duration-300"
              key={item?.node?.title}
            ></div>
          </Link>
        );
      })}
    </div>
  );
};

export default HoldKort;
