import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useContext } from "react";
import { searchContext } from "./createcontext";
import Header from "./header";

const ProductList = () => {
  const { setSearchTerm, searchTerm, filteredProducts } = useContext(searchContext);

  return (
    <div className="flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <div className="flex flex-col items-center bg-gray-900 text-white overflow-hidden p-4">
        <div className="hidden ms flx sb fixed top-5 left-1/2 transform -translate-x-1/2 lg:w-full max-w-lg px-4 z-50">
          <TextField
            type="text"
            placeholder="Enter product name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
            sx={{
              "& .MuiInputBase-input": { color: "white", fontSize: "1.125rem" },
              "& .MuiInputBase-input::placeholder": { color: "#a0a0a0" },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon style={{ color: "white", fontSize: "1.5rem" }} />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-gray-800 p-4 rounded-md shadow-md">
              <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-contain mb-2" />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-400">{product.description.substring(0, 50)}...</p>
              <p className="text-xl font-bold mt-2">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
