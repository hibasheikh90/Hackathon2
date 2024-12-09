import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { LuSprout } from "react-icons/lu";

function Brand() {
  return (
    <div className="px-4 py-16">
      <h3 className="text-center font-normal text-2xl mb-12">
        What makes our brand different
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        <div className="text-center">
          <CiDeliveryTruck className="text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-bold py-2">Next day as standard</h2>
          <p>
            Order before 3pm and get your order <br />
            the next day as standard
          </p>
        </div>
        <div className="text-center">
          <IoIosCheckmarkCircleOutline className="text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-bold py-2">Made by true artisans</h2>
          <p>
            Handmade crafted goods made with <br />
            real passion and craftsmanship
          </p>
        </div>
        <div className="text-center">
          <MdOutlineFeaturedPlayList className="text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-bold py-2">Unbeatable prices</h2>
          <p>
            For our materials and quality you <br />
            won&apos;t find better prices anywhere
          </p>
        </div>
        <div className="text-center">
          <LuSprout className="text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-bold py-2">Recycled packaging</h2>
          <p>
            We use 100% recycled packaging to <br />
            ensure our footprint is manageable
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brand;
