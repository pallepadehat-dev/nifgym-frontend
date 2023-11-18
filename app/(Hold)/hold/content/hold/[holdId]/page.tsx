import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { client } from "@/tina/__generated__/client";
import { DoorClosed } from "lucide-react";
import Image from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface HoldPageProps {
  params: { holdId: string };
}

const HoldDescription: React.FC<HoldPageProps> = async ({ params }) => {
  const { holdId } = params;

  const data = await client.queries.hold({ relativePath: holdId });
  const hold = data.data.hold;

  return (
    <>
      <Navbar />
      <div className="container p-4 md:p-8 lg:p-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-4xl font-bold">{hold.title}</h1>
              <p className="text-lg font-semibold text-gray-500">{hold.date}</p>
            </div>
            <div className="lg:w-[150px] w-[45%] text-md">
              <TinaMarkdown content={hold.start_adress} />
            </div>
            {hold.plads ? (
              <div className="flex flex-col gap-4">
                {hold.betaling && hold.betaling.length > 0 ? (
                  <div className="font-bold text-xl">
                    <TinaMarkdown
                      content={
                        hold.betaling
                          ? hold.betaling[0]?.klipkortbetaling
                          : null
                      }
                    />
                  </div>
                ) : (
                  <div className="font-bold text-2xl">
                    Pris: {hold.betaling ? hold.betaling[0]?.belob : null} kr.
                  </div>
                )}

                <Button>Tilmeld</Button>
              </div>
            ) : (
              <Alert>
                <DoorClosed className="w-4 h-4" />
                <AlertTitle>Tilmelding Lukket</AlertTitle>
                <AlertDescription>
                  Vi har desværre ikke flere ledige pladser
                </AlertDescription>
              </Alert>
            )}
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-bold">Instruktør(er)</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  gap-3">
                {hold.instruktors?.map((item, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "relative h-[300px] md:h-[400px]  transition-all hover:scale-105 duration-300",
                      hold.instruktors && hold.instruktors?.length > 3
                        ? "md:w-[400px]"
                        : "md:w-[300px]"
                    )}
                  >
                    <div className="relative h-full overflow-hidden rounded-lg">
                      <Image
                        src={
                          item?.instruktorimage
                            ? item.instruktorimage
                            : "/user.png" // Provide a placeholder image
                        }
                        alt={
                          item?.instruktorname
                            ? item.instruktorname
                            : "Fallback Alt Text"
                        }
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white rounded-b-lg h-[70px] flex items-center justify-center flex-col">
                        <p className="text-xl font-semibold">
                          {item?.instruktorname
                            ? item.instruktorname
                            : "Kan ikke finde navn"}
                        </p>
                        {item?.bestyrlse ? (
                          <p className="font-medium text-sm">
                            BESTYRELSESMEDLEM
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-col hidden md:flex">
            <div className="relative h-[400px] md:h-[600px] hover:scale-105 transition-all duration-300">
              <Image
                src={hold.coverImage}
                alt={hold.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </>
  );
};

export default HoldDescription;
