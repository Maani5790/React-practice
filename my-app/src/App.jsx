import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Product from "./Components/product"
import "./styling/App.css";
import "./styling/Header.css";

function App() {
  return(

  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="*" element={<div>Page Not Found 404</div>} />
    </Routes>
  </Router>
  )
};

export default App;
