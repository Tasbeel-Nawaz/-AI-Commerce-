import React from "react";

const IShopping = () => {
  return (
    <div className=" bg-gray-900 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-gray-800 shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-300 mb-4">Welcome to Ai-Shopping</h1>
        <p className="text-lg text-white mb-6">
          Your one-stop destination for the best online shopping experience.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition">
          Start Shopping
        </button>
        
        <div className="mt-8 border-t pt-6">
          <h2 className="text-2xl font-semibold text-white mb-2">Contact Us</h2>
          <p className="text-gray-300">Email: ransomwarehacker6@gmaail.com</p>
          <p className="text-gray-300">Phone: 03348461030 | 03088509253</p>
        </div>
      </div>
    </div>
  );
};

export default IShopping;
