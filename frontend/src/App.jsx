import React, { useState } from "react";
import Header from "./components/shared/Header";
import HeroSection from "./components/landing/HeroSection";
import FeaturesSection from "./components/landing/FeaturesSection";
import ContactoHero from "./components/contacto/ContactoHero";
import ValueProposition from "./components/landing/ValueProposition";
import UseCases from "./components/landing/UseCases";
import ContactoModal from "./components/contacto/ContactoModal";
import Footer from "./components/shared/Footer";
import "./App.css";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const abrirModal = () => setOpenModal(true);
  const cerrarModal = () => setOpenModal(false);

  return (
    <>
      <Header onAbrirModal={() => setOpenModal(true)}  />
      <main className="landing-wrapper">
        {/* <ContactoHero /> */}
        <HeroSection onAbrirModal={abrirModal} />
        <FeaturesSection />
        <ValueProposition onAbrirModal={abrirModal} />
        <UseCases />
        <ContactoModal open={openModal} onClose={cerrarModal} />
      </main>
       <Footer onAbrirModal={() => setOpenModal(true)} />
    </>
  );
}

export default App;
