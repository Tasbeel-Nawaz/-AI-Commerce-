import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa"; 
import Logo from "../assets/logo.png";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); 
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 812); 
  const isProductPage = location.pathname === "/Top-Products";
  const isDealPage = location.pathname ===  "/Top-deals";

 const isregiserpage = location.pathname === "/regiser"
   const isLoginpage = location.pathname === "/Login"

 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 812);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 
0
  return (
    <>
       {!( isLoginpage || isregiserpage) &&(
      <div className="z-10 -mt-3">
        <nav className="bg-gray-800 m-3 p-7 flex justify-between items-center w-[93vw] sm:w-[95vw] lg:w-[97vw] relative z-10">
          <h2 className="text-white text-xl ml-16 font-[Algerian] text-[1.7rem]">
            Ai-Shoping
          </h2>
          <img
            src={Logo}
            alt="Logo"
            className="w-26 h-46 absolute -ml-7 -mt-4"
          />


  
          {!( isProductPage || isDealPage ) && !isMobile && (
            <ul className="md:flex space-x-4 text-white md:gap-1 lg:gap-5 hover:cursor-pointer ">
              
              <li>
                <Link to="/Top-Categories" className="hover:text-gray-300">Top Categories</Link>
              </li>
              <li>
                <Link to="/Top-Products" className="hover:text-gray-300">Products</Link>
              </li>
              <li>
                <Link to="/Top-deals" className="hover:text-gray-300">Top Deals</Link>
              </li>
              <li>
                <Link to="/home" className="hover:text-gray-300">Home</Link>
              </li>
              <li>
                <Link to="/regiser" className="hover:text-gray-300">Sign-Up</Link>
              </li>
              <li>
                <Link to="/Login"  className="hover:text-gray-300">Login</Link>
              </li>
            </ul>
          )}

         
          {(isProductPage || isMobile || isDealPage) && (
           <div className="mfs flex items-center">
           <button
             onClick={() => setMenuOpen(!menuOpen)}
             className="text-white hover:cursor-pointer text-3xl p-2 transform transition-all duration-300 hover:scale-110 hover:rotate-12 hover:text-yellow-400"
           >
             <FaBars />
           </button>
       
         
          
              {menuOpen && (
                <div className="absolute w-80 h-70 right-15 top-26 bg-gray-700 p-4 rounded-lg shadow-lg">
                  <ul className="text-white flex flex-col space-y-12 items-center  ">
                  
                    <li>
                      <Link to="/Top-Categories" onClick={() => setMenuOpen(false)} className="hover:cursor-pointer hover:text-2xl">
                        Top Categories
                      </Link>
                    </li>
                    <li>
                      <Link to="/Top-Products" onClick={() => setMenuOpen(false)} className="hover:cursor-pointer hover:text-2xl">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link to="/Top-deals" onClick={() => setMenuOpen(false)}className="hover:cursor-pointer hover:text-2xl">
                        Top Deals
                      </Link>
                    </li>
                    <li>
                      <Link to="/home" onClick={() => setMenuOpen(false)}className="hover:cursor-pointer hover:text-2xl">
                        Home
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </nav>
      </div>
       )}
    </>
  );
};

export default Header;
