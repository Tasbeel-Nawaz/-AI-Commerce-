import React, { useEffect, useState } from "react";
import Header from "./header";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <div className="flex flex-col items-center bg-gray-900 text-white  overflow-hidden p-4">
      
      <div className="hidden ms flx sb fixed top-5 left-1/2 transform -translate-x-1/2 lg:w-full  max-w-lg px-4 z-50">
  <TextField
    type="text"
    placeholder="Enter product name"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    fullWidth
    className="bg-gray-800 text-white rounded-md py-3 px-4 focus:outline-none shadow-md transition-all duration-300 hover:shadow-lg"
    sx={{
      '& .MuiInputBase-input': {
        color: 'white',
        fontSize: '1.125rem', 
      },
      '& .MuiInputBase-input::placeholder': {
        color: '#a0a0a0', 
      },
    }}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <SearchIcon style={{ color: 'white' }} />
        </InputAdornment>
      ),
    }}
  />
</div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-gray-800 p-4 rounded-md shadow-md">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-contain mb-2"
              />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-400">{product.description.substring(0, 50)}...</p>
              <p className="text-xl font-bold mt-2 absolute ">Price:</p>
              <p className="text-xl font-bold mt-2 line-through ml-18 text-red-500 ">  ${ product.price}</p>
              <p className="text-xl font-bold mt-2 absolute">Discont Price:</p>
              <p className="text-xl font-bold mt-2 ml-37 text-green-500">${product.discountPercentage}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
