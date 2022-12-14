import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeaderPhone from "./components/HeaderPhone.jsx";
import { useState } from "react";

function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <Skills />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
