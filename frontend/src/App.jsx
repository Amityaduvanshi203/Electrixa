import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import ProjectOrder from "./pages/ProjectOrder";
import Kits from "./pages/Kits";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";    

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/project-order" element={<ProjectOrder />} />
        <Route path="/kits" element={<Kits />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;