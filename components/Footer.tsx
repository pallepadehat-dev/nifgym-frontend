"use client";
export default function Footer() {
  return (
    <div className="bg-gray-800 py-6 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-6">
        <div className="flex flex-col space-y-4 md:space-y-2">
          <h2 className="text-xl font-semibold text-white">
            Næstved Idrætsforening Gymnastik
          </h2>
          <p className="text-gray-400">Sct Jørgens Park 6, 4700 Næstved</p>
          <p className="text-gray-400">+45 56 36 14 85</p>
        </div>
        <div className="md:col-span-2 md:ml-auto">
          <div className="flex flex-col md:flex-row justify-between md:gap-20 pt-5 md:pt-0">
            <div className="flex flex-col gap-2">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Hjem
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition mt-2 md:mt-0"
              >
                Hold
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition mt-2 md:mt-0 "
              >
                Kontakt
              </a>
            </div>
            <div className="flex flex-col mt-4 md:mt-0 gap-2 md:gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Persondatapolitik
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition mt-2 md:mt-0 "
              >
                Vilkår og betingelser
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
