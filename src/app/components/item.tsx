import React from "react";
import Image from "next/image";

function Item() {
  return (
    <div className="px-4 py-16">
      
      <h2 className="px-4 text-2xl font-medium mb-8">You might also like</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Product 1 */}
        <div className="text-center">
          <Image
            src="/hero.png" 
            alt="The Dandy Chair"
            width={305}
            height={305}
            className="mx-auto rounded-lg shadow-md"
          />
          <h3 className="text-lg font-medium mt-4">The Dandy chair</h3>
          <p className="text-gray-600">£250</p>
        </div>

        {/* Product 2 */}
        <div className="text-center">
          <Image
            src="/2.png" // 
            alt="Rustic Vase Set"
            width={305}
            height={306}
            className="mx-auto rounded-lg shadow-md"
          />
          <h3 className="text-lg font-medium mt-4">Rustic Vase Set</h3>
          <p className="text-gray-600">£155</p>
        </div>

        {/* Product 3 */}
        <div className="text-center">
          <Image
            src="/3.png" 
            alt="The Silky Vase"
            width={305}
            height={305}
            className="mx-auto rounded-lg shadow-md"
          />
          <h3 className="text-lg font-medium mt-4">The Silky Vase</h3>
          <p className="text-gray-600">£125</p>
        </div>

        {/* Product 4 */}
        <div className="text-center">
          <Image
            src="/4.png" 
            alt="The Lucy Lamp"
            width={305}
            height={305}
            className="mx-auto rounded-lg shadow-md"
          />
          <h3 className="text-lg font-medium mt-4">The Lucy Lamp</h3>
          <p className="text-gray-600">£399</p>
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

export default Item;

