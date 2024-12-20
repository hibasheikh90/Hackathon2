import React from "react";
import Image from "next/image";
import { CiDeliveryTruck } from "react-icons/ci";


function Chair() {
  return (
    <div className="font-sans">
       <div className="flex items-center justify-center bg-black text-sm py-2 text-white space-x-2">
        <CiDeliveryTruck className="text-lg" />
         <span>Free delivery on all orders over £50 with code easter at checkout</span>
       </div>
       
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 lg:px-36 py-16 items-center">
        <div>
          <Image
            src="/img Left.png" 
            alt="The Dandy Chair"
            width={600}
            height={600}
            className="rounded-lg shadow-md object-cover w-full"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">The Dandy Chair</h2>
          <p className="text-2xl text-gray-700">£250</p>
          <p className="text-gray-600 leading-relaxed">
            A timeless design, with premium materials featured as one of our
            most popular and iconic pieces. The Dandy chair is perfect for any
            stylish living space with beech legs and lambskin leather
            upholstery.
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Premium materials</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>

          <div>
            <h3 className="text-lg font-medium">Dimensions</h3>
            <p className="text-gray-600">Height: 110cm</p>
            <p className="text-gray-600">Width: 75cm</p>
            <p className="text-gray-600">Depth: 50cm</p>
          </div>

          {/* Amount and Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button className="px-4 py-2 text-gray-700">-</button>
              <span className="px-4 py-2">1</span>
              <button className="px-4 py-2 text-gray-700">+</button>
            </div>
            <button className="bg-purple-700 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-800">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chair;

