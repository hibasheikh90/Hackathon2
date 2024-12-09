import React from "react";
import Image from "next/image";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

function ShoppingCart() {
  return (
    <div className="font-sans">
      {/* Navbar */}
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
          <div className="cursor-pointer"><CiSearch /></div>
          <div className="cursor-pointer"><MdOutlineShoppingCart /></div>
        </div>
      </nav>

      <div className="px-8 lg:px-36 py-16">
        <h2 className="text-2xl font-medium mb-8">Your shopping cart</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center space-x-4">
              <Image
                src="/p (2).png" 
                alt="Canyon stone vase"
                width={100}
                height={100}
                className="rounded-lg shadow-md object-cover"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-medium">Canyon stone vase</h3>
                <p className="text-gray-600">£85</p>
              </div>
              <div>
                <span>1</span>
              </div>
              <div>
                <p className="text-lg font-medium">£85</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Image
                src="/p.png" 
                alt="Basil water vase"
                width={100}
                height={100}
                className="rounded-lg shadow-md object-cover"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-medium">Basil water vase</h3>
                <p className="text-gray-600">£65</p>
              </div>
              <div>
                <span>1</span>
              </div>
              <div>
                <p className="text-lg font-medium">£65</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-4">Summary</h3>
            <div className="flex justify-between text-gray-600 mb-2">
              <p>Subtotal</p>
              <p>£150</p>
            </div>
            <div className="text-sm text-gray-500 mb-4">
              Taxes and shipping are calculated at checkout
            </div>
            <button className="bg-purple-700 text-white w-full py-3 rounded-md font-medium hover:bg-purple-800">
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
