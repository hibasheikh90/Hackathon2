import React from "react";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

function AllProducts() {
  return (
    <div className="font-sans">
      
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <div className="text-xl font-bold">Avion</div>
        <ul className="hidden md:flex space-x-6 text-gray-600">
          <li>Plant pots</li>
          <li>Ceramics</li>
          <li>Tables</li>
          <li>Chairs</li>
          <li>Crockery</li>
          <li>Tableware</li>
          <li>Cutlery</li>
        </ul>
        <div className="flex space-x-4 text-gray-600">
          <div className="cursor-pointer">
            {" "}
            <CiSearch />
          </div>
          <div className="cursor-pointer">
            <MdOutlineShoppingCart />
          </div>
        </div>
      </nav>

      <div className="relative">
        <Image
          src="/f.png"
          alt="Hero"
          width={1440}
          height={510}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl text-white font-bold">
            All Products
          </h1>
        </div>
      </div>

      <div className="bg-gray-100 py-4 px-8 flex justify-between items-center">
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-white text-gray-800 rounded-md shadow-md">
            Category
          </button>
          <button className="px-4 py-2 bg-white text-gray-800 rounded-md shadow-md">
            Product type
          </button>
          <button className="px-4 py-2 bg-white text-gray-800 rounded-md shadow-md">
            Price
          </button>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-white text-gray-800 rounded-md shadow-md">
            Sorting
          </button>
          <button className="px-4 py-2 bg-white text-gray-800 rounded-md shadow-md">
            Grid view
          </button>
        </div>
      </div>

      <div>
        
        <div className= " px-8 lg:px-36 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
          {/* Product 5 */}
          <div className="text-center">
            <Image
              src="/p1.png"
              alt="The Dandy Chair"
              width={305}
              height={305}
              className="mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-lg font-medium mt-4">The Dandy Chair</h3>
            <p className="text-gray-600">£250</p>
          </div>
          {/* Product 6*/}
          <div className="text-center">
            <Image
              src="/p2.png"
              alt="Rustic Vase Set"
              width={305}
              height={305}
              className="mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-lg font-medium mt-4">Rustic Vase Set</h3>
            <p className="text-gray-600">£155</p>
          </div>
          {/* Product 7 */}
          <div className="text-center">
            <Image
              src="/p3.png"
              alt="The Silky Vase"
              width={305}
              height={305}
              className="mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-lg font-medium mt-4">The Silky Vase</h3>
            <p className="text-gray-600">£125</p>
          </div>
          {/* Product 8 */}
          <div className="text-center">
            <Image
              src="/p4.png"
              alt="The Lucy Lamp"
              width={305}
              height={305}
              className="mx-auto rounded-lg shadow-md"
            />
            <h3 className="text-lg font-medium mt-4">The Lucy Lamp</h3>
            <p className="text-gray-600">£399</p>
          </div>
        </div>
      </div>

      <div className="text-center py-8">
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-medium">
          View More Products
        </button>
      </div>
    </div>
  );
}

export default AllProducts;
