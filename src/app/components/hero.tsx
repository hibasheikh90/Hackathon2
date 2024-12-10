"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-purple-950 text-white min-h-screen flex items-center">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 sm:px-12 md:px-20 py-16">
        
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-2xl md:text-3xl font-serif font-semibold mb-6">
            The furniture brand for the <br />
            future, with timeless designs
          </h1>
          <div className="flex justify-center md:justify-start mb-6">
            <button className="bg-transparent text-white border border-white py-3 px-6 rounded-md hover:bg-white hover:text-purple-950 font-medium">
              View Collection
            </button>
          </div>
          <p className="text-gray-300 font-serif">
            A new era in eco-friendly furniture with Axelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way
            to display things digitally using modern web technologies.
          </p>
        </div>

        
        <div className="flex justify-center items-center mt-8 lg:mt-0">
          <Image
            src="/hero.png" 
            alt="Furniture Chair"
            width={600}
            height={600}
            className="object-contain max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
