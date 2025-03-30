import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Fake from "../assets/ebay.png";
import Ecom from "../assets/ecom.png";
import Shop from "../assets/shop.png";
import Ban from "../assets/ban.jpg";
import { searchContext } from "./createcontext";

export default function Banner() {
  const { setSearchTerm, searchTerm, filteredProducts } = useContext(searchContext);
  
  const location = useLocation();
  const hideBannerPages = ["/about", "/content", "/ebay", "/ecom", "/shop", "/Top-Categories", "/Top-Products", "/Top-deals", "/ricy", "/Follow", "/regiser", "/Login" ];
  if (hideBannerPages.includes(location.pathname)) return null;

  return (
    <>
      <img src={Ban} alt="Banner" className="absolute  w-full h-[18rem] filter brightness-75 left-0" />
      <div className="absolute top-48 left-1/2 transform -translate-x-1/2 w-[40%]">
        <input
          type="text"
          placeholder="What Are You Shopping For?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 bg-gray-100 rounded-l-md text-black"
        />
        <button className="bg-orange-500 absolute h-10 w-20 font-bold text-1xl rounded-r-md">Search</button>
      </div>

      {searchTerm && (
  <div className=" -mb-100 z-10 mt-94 p-4 shadow-lg rounded-lg w-full max-w-8xl ">
   
    {filteredProducts.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-gray-800 ml-1 p-4 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-800">
            <img 
              src={product.thumbnail} 
              alt={product.title} 
              className="w-full h-48 object-cover rounded-md mb-3 shadow-md"
            />
            <h2 className="text-lg font-semibold text-white">{product.title}</h2>
            <p className="text-gray-400 text-sm">{product.description.substring(0, 50)}...</p>
            <p className="text-xl font-bold mt-2 text-orange-400">${product.price}</p>
            <button className="mt-3 w-full py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition">
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-gray-600 text-center mt-4">😞 No results found.</p>
    )}
  </div>
)}
  <div className="bg-gray-800 w-[90%] absolute top-[300px] left-1/2 transform -translate-x-1/2 h-[180px]">
            <p className="text-white top-4 left-5 font-bold text-3xl absolute">
              Retailers We Work With
            </p>
            <div className="flex justify-between items-center absolute top-8 w-full md:space-y-0">
              <Link
                to="/ebay"
                className="w-40 sm:w-48 md:w-60 p-2 rounded-lg transition-all duration-300"
              >
                <img
                  src={Fake}
                  className="absolute h-auto cursor-pointer rounded-lg hover:opacity-80 hover:bg-gray-700 mt-19 md:mt-10 md:w-55 w-30"
                  alt="Fake"
                />
              </Link>

              <Link
                to="/ecom"
                className="w-40 sm:w-48 md:w-60 p-2 rounded-lg transition-all duration-300"
              >
                <img
                  src={Ecom}
                  className="absolute h-auto cursor-pointer rounded-lg hover:opacity-80 hover:bg-gray-700 mt-15 md:mt-1 w-28 md:w-55 sm:w-35 sm:mt-12"
                  alt="Ecom"
                />
              </Link>

              <Link
                to="/shop"
                className="w-40 sm:w-48 md:w-60 p-2 rounded-lg transition-all duration-300"
              >
                <img
                  src={Shop}
                  className="absolute h-auto cursor-pointer rounded-lg hover:opacity-80 hover:bg-gray-700 mt-12 md:mt-1 w-22 md:w-35 sm:w-30 sm:mt-4"
                  alt="Shop"
                />
              </Link>
            </div>
            </div>
    </>
  );
}
