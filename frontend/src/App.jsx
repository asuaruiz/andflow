import React from "react";
import Header from "./components/shared/Header";
import HeroSection from "./components/landing/HeroSection";
import FeaturesSection from "./components/landing/FeaturesSection";
import ContactoHero from "./components/contacto/ContactoHero";

import Footer from "./components/shared/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="landing-wrapper">
        <ContactoHero />
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
