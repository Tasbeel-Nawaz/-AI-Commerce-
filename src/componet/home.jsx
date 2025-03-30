import React, { useEffect, useState } from "react";
import beautiImage from "../assets/beauti.jpg";
import fragrances from "../assets/Fragrances.jpg";
import furniture from "../assets/featue.jpg";
import groceries from "../assets/gloceri.jpg";
import homedecoration from "../assets/Home Decoration.jpg";
import kitchen from "../assets/Kitchen Accessories.jpg";
import laptops from "../assets/Laptops.jpg";
import Men from "../assets/Mens Shirts.jpg";
import Mens from "../assets/Mens ShoesMens Shoes.jpg";
import Menw from "../assets/Mens Watches.jpg";
import Mena from "../assets/Mobile Accessories.jpg";
import Motorcycl from "../assets/bike.jpg";
import Smartphones from "../assets/Smartphones.jpg";
import Sports from "../assets/Sports Accessories.jpg";
import Sunglasses from "../assets/Sunglasses.jpg";
import Tablets from "../assets/bike.jpg";
import Tops from "../assets/Tops.avif";
import Vehicle from "../assets/VehicleVehicle.jpg";
import Womens from "../assets/Womens Bags.jpg";
import Dresses from "../assets/Womens Dresses.jpg";
import Jewellery from "../assets/Womens Jewellery.jpg";
import WShoes from "../assets/Womens Shoes.jpg";
import WWatches from "../assets/Womens WatchesWomens Watches.jpg";
import Skin from "../assets/Skin Care.jpg";
import { Link } from "react-router-dom";

const defaultImages = {
  beauty: beautiImage,
  fragrances: fragrances,
  furniture: furniture,
  groceries: groceries,
  "home-decoration": homedecoration,
  "kitchen-accessories": kitchen,
  skin: Skin,
  laptops: laptops,
  "mens-shirts": Men,
  "mens-shoes": Mens,
  "mens-watches": Menw,
  "mobile-accessories": Mena,
  motorcycle: Motorcycl,
  smartphones: Smartphones,
  "sports-accessories": Sports,
  sunglasses: Sunglasses,
  tablets: Tablets,
  tops: Tops,
  vehicle: Vehicle,
  "womens-bags": Womens,
  "womens-dresses": Dresses,
  "womens-jewellery": Jewellery,
  "womens-shoes": WShoes,
  "womens-watches": WWatches,
};

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [discont, setDiscount] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, productsRes, discontRes] = await Promise.all([
          fetch("https://dummyjson.com/products/categories"),
          fetch("https://dummyjson.com/products"),
          fetch("https://dummyjson.com/products?limit=100"),
        ]);

        const categoriesData = await categoriesRes.json();
        const productsData = await productsRes.json();
        const discontData = await discontRes.json();

        console.log("Categories:", categoriesData);
        console.log("Products:", productsData.products);
        console.log("Discount:", discontData.products);

        setCategories(categoriesData);
        setProducts(productsData.products);
        setDiscount(discontData.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
   
       <div>
        <p className=" absolute mt-100 ml-9 font-bold text-4xl text-white">
        Top-Category
        <Link to="/Top-Categories">
                 <p className="font-[Arial] absolute -right-250 -mt-10 cursor-pointer hover:border-b-2 font-bold text-2xl text-blue-500">
                   See more
                   </p>
               </Link>
               </p>
      </div>
      <div className="mt-100 overflow-hidden w-full h-[240px] bg-gray-800 text-black p-4 ">
        <div className="flex mt-10 flex-col justify-between space-y-4">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <li
                key={category.slug}
                className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
              >
                <img
                  src={
                    defaultImages[category.slug] ||
                    "https://dummyimage.com/200x200/ccc/000&text=No+Image"
                  }
                  alt={category.name}
                  className="w-24 h-24 object-cover mb-4 text-black rounded-full border-2 border-gray-300"
                />
                <span className="text-sm font-medium text-center">
                  {category.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
       
        <p className=" absolute mt-7 ml-9 font-bold text-4xl text-white">
          Top-Product
          <Link to="/Top-Products">
                 <p className="font-[Arial] absolute -right-257 -mt-9 cursor-pointer hover:border-b-2 font-bold text-2xl text-blue-500">
                   See more
                 </p>
               </Link>
        </p>
      </div>
      <div className="mt-5 overflow-hidden w-full h-[260px] bg-gray-800 text-black p-4 ">
        <div className="flex mt-10 flex-col justify-between space-y-4">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <li
                key={product.id}
                className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
              >
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  className="w-24 h-24 object-cover mb-4 text-black rounded-full border-2 border-gray-300"
                />
                <span className="text-sm font-medium text-center">
                  {product.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className=" absolute mt-7 ml-9 font-bold text-4xl text-white">
        Top-Deals
        <Link to="/Top-deals">
                 <p className="font-[Arial] absolute -right-267 -mt-9 cursor-pointer hover:border-b-2 font-bold text-2xl text-blue-500">
                 See more
                 </p>
               </Link>
      </p>
<div>

      <div className="mt-5 overflow-hidden w-full h-[330px] bg-gray-800 text-black p-4 ">
        <div className="flex mt-10 flex-col justify-between space-y-4">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {discont.map((product) => (
              <li
                key={product.id}
                className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-24 h-24 object-cover mb-4 text-black rounded-full border-2 border-gray-300"
                />
                <span className="text-sm font-medium text-center">
                  {product.title}
                </span>
                <p className="text-xl font-bold mt-31 absolute left-3">Price:</p>
              <p className="text-xl font-bold mt-2 line-through ml-18 text-red-500 ">  ${ product.price}</p>
              <p className="text-xl font-bold mt-49 absolute left-3">Discont Price:</p>
              <p className="text-xl font-bold mt-2 ml-37 text-green-500">${product.discountPercentage}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </>
  );
}
