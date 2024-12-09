import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-10">
      <div className="container mx-auto px-4 md:px-20 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h3 className="text-lg">Menu</h3>
          <p className="mt-3">New arrivals</p>
          <p>Best sellers</p>
          <p>Recently viewed</p>
          <p>Popular this week</p>
          <p>All products</p>
        </div>

        <div>
          <h3 className="text-lg">Categories</h3>
          <p className="mt-3">Crockery</p>
          <p className="mt-3">Furniture</p>
          <p className="mt-1">Homeware</p>
          <p className="mt-1">Plant pots</p>
          <p className="mt-1">Chairs</p>
          <p className="mt-1">Crockery</p>
        </div>

        <div>
          <h3 className="text-lg">Our company</h3>
          <ul className="mt-3 space-y-2">
            <li>About us</li>
            <li>Vacancies</li>
            <li>Contact us</li>
            <li>Privacy</li>
            <li>Returns policy</li>
          </ul>
        </div>

        <div>
          <p>Join our mailing list</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-5">
            <input
              type="email"
              placeholder="Your@email.com"
              className="w-full sm:w-96 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button className="bg-white hover:bg-purple-80 px-6 text-black rounded-md">
              Sign Up
            </button>
          </div>

          <div className="flex gap-4 mt-4 py-6">
            <FaFacebook className="text-xl cursor-pointer hover:text-gray-400" />
            <FaTwitter className="text-xl cursor-pointer hover:text-gray-400" />
            <FaInstagram className="text-xl cursor-pointer hover:text-gray-400" />
            <FaLinkedin className="text-xl cursor-pointer hover:text-gray-400" />
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-10">
        © Copyright Rimel 2024 Avion LTD
      </div>
    </footer>
  );
}

export default Footer;
