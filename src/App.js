import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import About from "./components/Home/About";
import Contact from "./components/Home/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};


export default App;
