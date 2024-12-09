"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-white px-20 py-16 w-full">
      <div className="bg-purple-950 text-white min-h-screen flex items-center">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 md:px-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-1xl md:text-2xl  mb-6">
              The furniture brand for the <br />
              future, with timeless designs
            </h1>
            <button className="bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-md text-white font-medium self-start">
              View collection
            </button>

            <p className="text-gray-300 mb-6 pt-48">
              A new era in eco-friendly furniture with Axelon, the French luxury
              retail brand with nice fonts, tasteful colors, and a beautiful way
              to display things digitally using modern web technologies.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/hero.png" 
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
