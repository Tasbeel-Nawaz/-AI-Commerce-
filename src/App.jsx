import React, { useEffect } from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import Header from "./componet/header";
import Baner from "./componet/Banner";
import Topcategories from "./componet/Top-Categories";
import Topdeals from "./componet/Top-deals";
import TopProducts from "./componet/Top-Product";
import Home from "./componet/home";
import Ebay from "./componet/ebay";
import Ecom from "./componet/ecom";
import Shop from "./componet/shop";
import Comment from "./componet/comment";
import Footer from "./componet/footer";
import AboutUs from "./componet/about";
import Content from "./componet/content";
import Ricy from "./componet/ricy";
import Fol from "./componet/follow";
import SignupForm from "./componet/signup";
import LoginForm from "./componet/login";
import SearchProvider from "./componet/createcontext";
import { UserProvider } from "./componet/UserContext";

const App = () => {
  return (
    <Router>
      <MainApp />
    </Router>
  );
};

const MainApp = () => {
  const location = useLocation();
  const isHeader = location.pathname === "/Header";

  useEffect(() => {
    if (location.pathname === "/") {
      window.location.replace("/regiser");
    }
  }, [location]);

  return (
    <div className="bg-gray-900 min-h-screen w-full">
      <SearchProvider>
        <UserProvider>
          <Header />

          {!isHeader && <Baner />}

          <Routes>
            <Route path="/Top-Products" element={<TopProducts />} />
            <Route path="/" element={<Navigate to="/regiser" />} />
            <Route path="/baner" element={<Baner />} />
            <Route path="/Top-Categories" element={<Topcategories />} />
            <Route path="/Top-deals" element={<Topdeals />} />
            <Route path="/home" element={<Home />} />
            <Route path="/ebay" element={<Ebay />} />
            <Route path="/ecom" element={<Ecom />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/content" element={<Content />} />
            <Route path="/ricy" element={<Ricy />} />
            <Route path="/Follow" element={<Fol />} />
            <Route path="/regiser" element={<SignupForm />} />
            <Route path="/Login" element={<LoginForm />} />
          </Routes>

          <Comment />
          <Footer />
        </UserProvider>
      </SearchProvider>
    </div>
  );
};

export default App;
