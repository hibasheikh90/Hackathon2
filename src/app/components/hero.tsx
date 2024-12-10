"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-white px-6 md:px-20 py-16 w-full">
      <div className="bg-purple-950 text-white min-h-screen flex items-center">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 md:px-12">
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-lg md:text-2xl mb-6 text-center lg:text-left">
              The furniture brand for the <br />
              future, with timeless designs
            </h1>
            <div className="flex justify-center md:justify-start">
              <button className="w-[170px] h-[56px] bg-transparent text-white border border-gray-600 font-bold mt-12">
                View collection
              </button>
            </div>
            <p className="text-gray-300 mt-12 lg:mt-48 text-center lg:text-left">
              A new era in eco-friendly furniture with Axelon, the French luxury
              retail brand with nice fonts, tasteful colors, and a beautiful way
              to display things digitally using modern web technologies.
            </p>
          </div>
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <Image
              src="/hero.png"
              alt="Furniture Chair"
              width={900}
              height={900}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
