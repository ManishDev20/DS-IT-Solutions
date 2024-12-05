import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { FaWhatsapp } from "react-icons/fa";
const App = () => {
  return (
    <div className="relative">
      <div className="w-full min-h-screen overflow-hidden relative ">
        <div className="fixed bottom-3 right-5 rounded-t-xl rounded-bl-xl bg-[green] z-[999]">
          <a
            href="https://wa.me/+35699906873/?text=Help%20me%20with"
            className="block p-4 text-2xl hover:text-3xl"
          >
            <FaWhatsapp className=" text-[white]" />
          </a>
        </div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
