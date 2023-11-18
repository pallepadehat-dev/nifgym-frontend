import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import client from "@/tina/__generated__/client";
import Image from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const InstruktorPage = async () => {
  const instruktorData = await client.queries.instruktorsConnection();
  const bestyrelsesData = await client.queries.bestyrlsenConnection();

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <section>
          <div className="container mx-auto mt-5 flex flex-col items-center gap-5 px-4 sm:px-8 lg:px-16">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl lg:text-5xl font-bold">
                Vores Instruktører
              </h1>
              <p className="text-gray-700 text-xs lg:text-lg">
                Læs mere om vores skønne instruktører
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-10">
              {instruktorData.data.instruktorsConnection.edges?.map(
                (item, idx) => (
                  <div
                    className="bg-white p-5 shadow-2xl rounded-lg w-[300px]"
                    key={idx}
                  >
                    <div className="relative h-48">
                      {item?.node?.instruktorImage ? (
                        <Image
                          src={item.node.instruktorImage}
                          alt="image"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                          placeholder="empty" // Use a placeholder
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full rounded-lg bg-gray-200">
                          <p>No image available</p>
                        </div>
                      )}
                    </div>
                    <h2 className="text-xl font-semibold mt-4">
                      {item?.node?.instruktorName}
                    </h2>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full">Læs mere</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader className="flex flex-row gap-2 items-center">
                          <div className="relative w-12 h-12">
                            {item?.node?.instruktorImage && (
                              <Image
                                src={item.node.instruktorImage}
                                alt="image"
                                fill
                                objectFit="cover"
                                className="rounded-md"
                                placeholder="empty"
                              />
                            )}
                          </div>
                          <div className="flex flex-col">
                            <h1 className="font-bold text-md">
                              Navn: {item?.node?.instruktorName}
                            </h1>
                            <p className="text-gray-500 text-sm font-semibold">
                              Alder: {item?.node?.instruktorAge}
                            </p>
                          </div>
                        </DialogHeader>
                        <div className="flex flex-col">
                          <h1 className="text-xl font-bold">Beskrivelse</h1>
                          <div className="font-light text-md">
                            <TinaMarkdown
                              content={item?.node?.instruktorDescription}
                            />
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto mt-5 flex flex-col items-center gap-5 px-4 sm:px-8 lg:px-16">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl lg:text-5xl font-bold">
                Vores Bestyrelse
              </h1>
              <p className="text-gray-700 text-xs lg:text-lg">
                Lær vores bestyrelse at kende
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-10">
              {bestyrelsesData.data.bestyrlsenConnection.edges?.map(
                (item, idx) => (
                  <div
                    className="bg-white p-5 shadow-2xl rounded-lg w-[300px]"
                    key={idx}
                  >
                    <div className="relative h-48">
                      {item?.node?.bestyrlesImage ? (
                        <Image
                          src={item.node.bestyrlesImage}
                          alt="image"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                          placeholder="empty" // Use a placeholder
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full rounded-lg bg-gray-200">
                          <p>No image available</p>
                        </div>
                      )}
                    </div>
                    <h2 className="text-xl font-semibold mt-4">
                      {item?.node?.bestyrlsenName}
                    </h2>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full">Læs mere</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader className="flex flex-row gap-2 items-center">
                          <div className="relative w-12 h-12">
                            {item?.node?.bestyrlesImage && (
                              <Image
                                src={item.node.bestyrlesImage}
                                alt="image"
                                fill
                                objectFit="cover"
                                className="rounded-md"
                                placeholder="empty"
                              />
                            )}
                          </div>
                          <div className="flex flex-col">
                            <h1 className="font-bold text-md">
                              Navn: {item?.node?.bestyrlsenName}
                            </h1>
                            <p className="text-gray-500 text-sm font-semibold">
                              Alder: {item?.node?.bestyrelsesAge}
                            </p>
                          </div>
                        </DialogHeader>
                        <div className="flex flex-col">
                          <h1 className="text-xl font-bold">Beskrivelse</h1>
                          <div className="font-light text-md">
                            <TinaMarkdown
                              content={item?.node?.bestyrelsesDescription}
                            />
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default InstruktorPage;
