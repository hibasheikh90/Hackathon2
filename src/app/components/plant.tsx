"use client";

import Image from "next/image";

export default function Plant() {
  return (
    <div className="bg-white px-20 py-16 w-full">
      <div className=" text-black min-h-screen flex items-center">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 md:px-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-1xl md:text-2xl  mb-6">
            From a studio in London to a global brand with <br />
            over 400 outlets
            </h1>

            <p className="text-black mb-6 pt-20">
             When we started Avion, the idea was simple. Make high quality furniture <br />
             affordable and available for the mass market. <br/> <br />
              Handmade, and lovingly crafted furniture and homeware is what we live, <br />
               breathe and design so our Chelsea boutique become the hotbed for the <br />
                London interior design community.
            </p>
            <button className="bg-gray-300 hover:bg-white px-4 py-2 rounded-md text-black font-medium self-start">
              View collection
            </button>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/image.png"
              alt="Furniture Chair"
              width={1100}
              height={1100}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
