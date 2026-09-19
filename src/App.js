import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import About from "./components/Home/About";
import Contact from "./components/Home/Contact";
import Shop from "./components/Shop/Shop";
import Login from "./components/Admin/Login";
import DashBoard from "./components/Admin/DashBoard";
import Product from "./components/Product/Product";
import Complain from "./components/Complain/Complain";
import ReviewPage from "./components/Review/ReviewPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop" element={<Shop />} />
        <Route path="rj-specialPu/login" element={<Login />} />
        <Route path="admin" element={<Layout />} >
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="products" element={<Product />} />
            <Route path="complains" element={<Complain />} />
            <Route path="reviews" element={<ReviewPage />} />
        </Route>
      </Route>
    </Routes>
  );
};


export default App;
