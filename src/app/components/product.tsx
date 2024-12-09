import React from "react";
import Image from "next/image";

function PopularProducts() {
  return (
    <div className="px-8 lg:px-36 py-9">
      <h2 className=" text-2xl font-medium mb-12 ">
        Our popular products
      </h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-">
        
        <div className="">
          <Image
            src="/Large.png" 
            alt="The Poplar Suede Sofa"
            width={900} 
            height={575} 
            className="mx-auto rounded-lg shadow-md object-cover"
          />
          <h3 className="text-lg font-medium mt-4">The Poplar suede sofa</h3>
          <p className="text-gray-600 ">£980</p>
        </div>

        
        <div className="">
          <Image
            src="/hero.png" 
            alt="The Dandy Chair"
            width={305} 
            height={375} 
            className="mx-auto rounded-lg shadow-md object-cover"
          />
          <h3 className="text-lg font-medium mt-4 px-9">The Dandy chair</h3>
          <p className="text-gray-600 px-9 ">£250</p>
        </div>

        
        <div className="">
          <Image
            src="/0.png" 
            alt="The Dandy Chair"
            width={305} 
            height={375} 
            className="mx-auto rounded-lg shadow-md object-cover"
          />
          <h3 className="text-lg font-medium mt-4 px-9">The Dandy chair</h3>
          <p className="text-gray-600 px-11">£250</p>
        </div>
      </div>
      <div className="text-center mt-12">
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-medium">
          View collection
        </button>
      </div>
    </div>
  );
}
export default PopularProducts; 