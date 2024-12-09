import React from "react";

function Signup() {
  return (
    <div className="py-12 px-6 bg-slate-50">
      <div>
        <h3 className="text-center text-2xl font-medium">
          Join the club and get the benefits
        </h3>
        <p className="text-center py-4 text-gray-600">
          Sign up for our newsletter and receive exclusive offers on new <br />
          ranges, sales, pop-up stores, and more.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-5">
        <input
          type="email"
          placeholder="Your@email.com"
          className="w-full sm:w-96 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-md">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Signup;
