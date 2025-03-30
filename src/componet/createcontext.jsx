import { createContext, useEffect, useState } from "react";

const searchContext = createContext();

export default function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json()) 
      .then((data) => setProducts(data.products));  
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);

  return (
    <searchContext.Provider value={{ setSearchTerm, searchTerm, filteredProducts }}>
      {children}
    </searchContext.Provider>
  );
}

export { searchContext };
